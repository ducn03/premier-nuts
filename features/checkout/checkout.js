import { getCartItems, getCartTotal, clearCart, removeFromCart, updateQty } from '../cart/cart.js';

function fmt(n) { return n.toLocaleString('vi-VN') + 'đ'; }

async function renderCart() {
  const list = document.getElementById('cart-items-list');
  const totalRow = document.getElementById('cart-total-row');
  const totalEl = document.getElementById('cart-total-display');
  const submitBtn = document.getElementById('checkout-submit-btn');

  const items = await getCartItems();

  if (!items.length) {
    list.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" stroke-width="1.5"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="1.5"/><path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" stroke-width="1.5"/></svg>
        <p>Giỏ hàng trống</p>
        <a href="products.html" class="cta-btn">Xem sản phẩm</a>
      </div>`;
    totalRow.hidden = true;
    if (submitBtn) submitBtn.disabled = true;
    return;
  }

  if (submitBtn) submitBtn.disabled = false;

  list.innerHTML = items.map(({ product, qty, unitPrice, lineTotal }) => `
    <div class="cart-item" data-id="${product.id}">
      <div class="cart-item-info">
        <div class="cart-item-name">${product.name}</div>
        <div class="cart-item-price">${fmt(unitPrice)} / gói</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" data-action="dec" data-id="${product.id}" aria-label="Giảm">−</button>
        <span class="qty-val">${qty}</span>
        <button class="qty-btn" data-action="inc" data-id="${product.id}" aria-label="Tăng">+</button>
      </div>
      <div class="cart-item-total">${fmt(lineTotal)}</div>
      <button class="cart-remove" data-id="${product.id}" aria-label="Xoá">✕</button>
    </div>`).join('');

  const total = await getCartTotal();
  totalEl.textContent = fmt(total);
  totalRow.hidden = false;

  // Build hidden cart summary string for Google Form (formatted for readability)
  const summaryLines = items.map(i =>
    `- ${i.product.name}: ${i.qty} x ${fmt(i.unitPrice)} = ${fmt(i.lineTotal)}`
  );
  summaryLines.push(`=> TỔNG CỘNG: ${fmt(total)}`);
  
  const hiddenInput = document.getElementById('hidden-cart-summary');
  if (hiddenInput) hiddenInput.value = summaryLines.join('\n');
}

function bindCartEvents() {
  document.getElementById('cart-items-list').addEventListener('click', async e => {
    const btn = e.target.closest('[data-action],[data-id]');
    if (!btn) return;
    const id = btn.dataset.id;

    if (btn.classList.contains('cart-remove')) {
      removeFromCart(id);
    } else if (btn.dataset.action === 'inc') {
      const cur = parseInt(btn.closest('.cart-item').querySelector('.qty-val').textContent);
      updateQty(id, cur + 1);
    } else if (btn.dataset.action === 'dec') {
      const cur = parseInt(btn.closest('.cart-item').querySelector('.qty-val').textContent);
      updateQty(id, cur - 1);
    }
    await renderCart();
  });
}

function bindFormSubmit() {
  const form = document.getElementById('checkout-form');
  const status = document.getElementById('checkout-status');
  const btn = document.getElementById('checkout-submit-btn');

  if (!form) return;

  // Client-side validation
  form.addEventListener('submit', async e => {
    const name = form.querySelector('#co-name').value.trim();
    const phone = form.querySelector('#co-phone').value.trim();
    const email = form.querySelector('#co-email').value.trim();
    const address = form.querySelector('#co-address').value.trim();

    if (!name || !phone || !email || !address) {
      e.preventDefault();
      status.textContent = '⚠️ Vui lòng điền đầy đủ các trường bắt buộc.';
      status.className = 'checkout-status is-error';
      return;
    }

    // Phone validation (basic VN phone: 10 digits starting with 0)
    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
      e.preventDefault();
      status.textContent = '⚠️ Số điện thoại không hợp lệ.';
      status.className = 'checkout-status is-error';
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      status.textContent = '⚠️ Email không hợp lệ.';
      status.className = 'checkout-status is-error';
      return;
    }

    const items = await getCartItems();
    if (!items.length) {
      e.preventDefault();
      status.textContent = '⚠️ Giỏ hàng trống, không thể đặt hàng.';
      status.className = 'checkout-status is-error';
      return;
    }

    // Show loading state
    btn.disabled = true;
    btn.textContent = 'Đang gửi...';
  });

  // Listen for iframe load = form submitted successfully
  const frame = document.querySelector('[name="checkout-submit-frame"]');
  if (frame) {
    frame.addEventListener('load', () => {
      if (btn.textContent === 'Đang gửi...') {
        // Clear cart and show success
        clearCart();
        status.textContent = '✅ Đặt hàng thành công! Đội ngũ Premier Nuts sẽ liên hệ sớm nhất.';
        status.className = 'checkout-status is-success';
        btn.textContent = 'Đã gửi đơn';
        form.reset();
        setTimeout(() => renderCart(), 300);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await renderCart();
  bindCartEvents();
  bindFormSubmit();
});
