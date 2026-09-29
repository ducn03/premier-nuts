import { addToCart, getCartCount } from '../cart/cart.js';

const detailRoot = document.querySelector('#product-detail');

const detailVisuals = {
  almond: '<circle cx="32" cy="32" r="26" fill="#E4A45A"/><circle cx="24" cy="26" r="7" fill="#C98A4B"/><circle cx="40" cy="30" r="8" fill="#D9A24B"/><circle cx="30" cy="42" r="6" fill="#C98A4B"/>',
  chia: '<circle cx="32" cy="32" r="26" fill="#8FC53E"/><circle cx="20" cy="24" r="3" fill="#4F7A26"/><circle cx="30" cy="18" r="3" fill="#4F7A26"/><circle cx="40" cy="26" r="3" fill="#4F7A26"/><circle cx="24" cy="36" r="3" fill="#4F7A26"/><circle cx="36" cy="40" r="3" fill="#4F7A26"/><circle cx="44" cy="34" r="3" fill="#4F7A26"/>',
  granola: '<rect x="12" y="20" width="40" height="28" rx="8" fill="#D9A24B"/><circle cx="24" cy="34" r="5" fill="#8B5A2B"/><circle cx="38" cy="30" r="6" fill="#F0821E"/><circle cx="32" cy="42" r="4" fill="#8FC53E"/>',
  walnut: '<circle cx="32" cy="32" r="26" fill="#C98A4B"/><path d="M20 30c4-10 20-10 24 0" stroke="#8B5A2B" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="26" cy="38" r="3" fill="#8B5A2B"/><circle cx="38" cy="38" r="3" fill="#8B5A2B"/>',
  cashew: '<path d="M18 20c-5 9 0 24 11 26 9 2 17-4 17-12 0-7-5-11-10-10-5 1-5 8-1 11-5 3-11-1-11-8 0-4-3-8-6-7Z" fill="#E4A45A"/>',
  pistachio: '<ellipse cx="22" cy="34" rx="13" ry="20" transform="rotate(-28 22 34)" fill="#91B83F"/><ellipse cx="42" cy="30" rx="13" ry="20" transform="rotate(28 42 30)" fill="#A5C94F"/><path d="M32 18v28" stroke="#4F7A26" stroke-width="3" stroke-linecap="round"/>',
  pumpkin: '<ellipse cx="22" cy="32" rx="10" ry="18" fill="#D9A24B"/><ellipse cx="32" cy="32" rx="10" ry="18" fill="#F0B85A"/><ellipse cx="42" cy="32" rx="10" ry="18" fill="#D9A24B"/>',
  oat: '<path d="M20 48V18M32 48V12M44 48V20" stroke="#B77A32" stroke-width="3" stroke-linecap="round"/><ellipse cx="20" cy="20" rx="5" ry="9" fill="#D9A24B"/><ellipse cx="20" cy="32" rx="5" ry="9" fill="#E4A45A"/><ellipse cx="32" cy="14" rx="5" ry="9" fill="#E4A45A"/><ellipse cx="32" cy="27" rx="5" ry="9" fill="#D9A24B"/><ellipse cx="44" cy="22" rx="5" ry="9" fill="#E4A45A"/><ellipse cx="44" cy="35" rx="5" ry="9" fill="#D9A24B"/>',
  mix: '<circle cx="20" cy="28" r="12" fill="#D9A24B"/><circle cx="42" cy="24" r="11" fill="#8FC53E"/><circle cx="28" cy="44" r="10" fill="#C98A4B"/><circle cx="48" cy="43" r="9" fill="#F0821E"/>'
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[character]));
}

function renderDetail(product) {
  const tag = product.tag ? `<span class="detail-tag">${escapeHtml(product.tag)}</span>` : '';
  const oldPrice = product.oldPrice ? `<del>${escapeHtml(product.oldPrice)}</del>` : '';
  const background = product.mediaClass === 'chia' || product.mediaClass === 'walnut' ? 'var(--green-mist)' : '#FBEFD9';

  detailRoot.innerHTML = `<div class="detail-shell">
    <a class="detail-back" href="products.html">← Quay lại danh sách sản phẩm</a>
    <section class="detail-hero">
      <div class="detail-visual" style="background:${background}">
        <span class="detail-orbit detail-orbit-one"></span><span class="detail-orbit detail-orbit-two"></span>${tag}
        <svg width="260" height="260" viewBox="0 0 64 64" aria-label="Hình minh họa ${escapeHtml(product.name)}">${detailVisuals[product.mediaClass]}</svg>
      </div>
      <div class="detail-copy">
        <span class="detail-kicker">${escapeHtml(product.category)} / PREMIER NUTS</span>
        <h1>${escapeHtml(product.name)}</h1>
        <p class="detail-lead">${escapeHtml(product.description)}</p>
        <div class="detail-price"><strong>${escapeHtml(product.price)}</strong>${oldPrice}<span> / túi</span></div>
        <div class="detail-atc">
          <div class="detail-qty-wrap">
            <button class="qty-btn detail-dec" aria-label="Giảm">−</button>
            <span class="qty-val" id="detail-qty">1</span>
            <button class="qty-btn detail-inc" aria-label="Tăng">+</button>
          </div>
          <button class="cta-btn detail-add-cart-btn" id="detail-add-cart" data-id="${escapeHtml(product.id)}" data-name="${escapeHtml(product.name)}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" stroke-width="1.8"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="1.8"/><path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            Thêm vào giỏ
          </button>
        </div>
        <div class="detail-order-note">Thêm vào giỏ rồi đặt hàng. Đội ngũ Premier Nuts sẽ liên hệ xác nhận và hướng dẫn thanh toán.</div>
        <dl class="detail-specs"><div><dt>Xuất xứ</dt><dd>${escapeHtml(product.origin)}</dd></div><div><dt>Cách dùng</dt><dd>${escapeHtml(product.serving)}</dd></div><div><dt>Bảo quản</dt><dd>${escapeHtml(product.storage)}</dd></div></dl>
      </div>
    </section>
    <section class="detail-benefits"><div><b>01</b><h2>Thông tin dễ hiểu</h2><p>Biết rõ xuất xứ, cách dùng và cách bảo quản trước khi chọn sản phẩm.</p></div><div><b>02</b><h2>Ăn ngon, dễ kết hợp</h2><p>Từ bữa sáng nhanh đến món ăn nhẹ tại văn phòng, sản phẩm không cần chuẩn bị cầu kỳ.</p></div><div><b>03</b><h2>Đặt hàng đơn giản</h2><p>Để lại thông tin quan tâm, đội ngũ Premier Nuts sẽ liên hệ xác nhận và hướng dẫn thanh toán.</p></div></section>
    <section class="detail-story"><div><span class="detail-kicker">Gợi ý thưởng thức</span><h2>Một lựa chọn nhỏ cho nhịp sống lành mạnh hơn.</h2></div><p>Dùng trực tiếp, thêm vào sữa chua, granola hoặc salad. Liên hệ với Premier Nuts để được tư vấn khẩu phần và đặt hàng theo nhu cầu.</p></section>
  </div>`;
}

async function loadProductDetail() {
  try {
    const id = new URLSearchParams(window.location.search).get('id');
    const response = await fetch('../features/catalog/products.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const products = await response.json();
    const product = products.find(item => item.id === id) || products[0];
    renderDetail(product);
  } catch (error) {
    detailRoot.innerHTML = '<p role="alert">Không thể tải thông tin sản phẩm.</p>';
    console.error('Product detail loading failed:', error);
  }
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  const count = getCartCount();
  if (badge) { badge.textContent = count; badge.hidden = count === 0; }
}

function bindDetailCart() {
  const addBtn = document.getElementById('detail-add-cart');
  const qtyEl = document.getElementById('detail-qty');
  const decBtn = document.querySelector('.detail-dec');
  const incBtn = document.querySelector('.detail-inc');
  if (!addBtn || !qtyEl) return;

  let qty = 1;

  decBtn?.addEventListener('click', () => { if (qty > 1) { qty--; qtyEl.textContent = qty; } });
  incBtn?.addEventListener('click', () => { qty++; qtyEl.textContent = qty; });

  addBtn.addEventListener('click', () => {
    const id = addBtn.dataset.id;
    addToCart(id, qty);
    qty = 1;
    qtyEl.textContent = qty;
    addBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> Đã thêm vào giỏ`;
    addBtn.style.background = 'var(--green-dark)';
    updateCartBadge();
    setTimeout(() => {
      addBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" stroke-width="1.8"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="1.8"/><path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg> Thêm vào giỏ`;
      addBtn.style.background = '';
    }, 1600);
  });

  window.addEventListener('cart-updated', updateCartBadge);
  updateCartBadge();
}

loadProductDetail().then(() => bindDetailCart());
