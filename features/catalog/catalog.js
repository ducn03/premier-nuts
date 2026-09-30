import { addToCart, getCartCount } from '../cart/cart.js';

const productList = document.querySelector('#product-list');
const categoryFilters = document.querySelectorAll('[data-category]');
const isCatalogPage = Boolean(document.querySelector('.catalog-page'));
const pageRoot = window.location.pathname.includes('/pages/') ? '../' : '';

const visuals = {
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
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

const cartIconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" stroke-width="1.8"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="1.8"/><path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
const checkSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function productCard(product) {
  const tag = product.tag
    ? `<span class="p-tag ${escapeHtml(product.tagClass)}">${escapeHtml(product.tag)}</span>`
    : '';
  const oldPrice = product.oldPrice
    ? `<small>${escapeHtml(product.oldPrice)}</small>`
    : '';
  const mediaBackground = product.mediaClass === 'chia' || product.mediaClass === 'walnut'
    ? 'var(--green-mist)'
    : '#FBEFD9';

  return `<div class="p-card" data-product-id="${escapeHtml(product.id)}">
    <a class="p-card-link" href="${pageRoot}pages/product-detail.html?id=${encodeURIComponent(product.id)}">
      <div class="p-media" style="background:${mediaBackground}">
        ${tag}
        <svg width="86" height="86" viewBox="0 0 64 64">${visuals[product.mediaClass]}</svg>
      </div>
      <div class="p-body">
        <div class="p-cat">${escapeHtml(product.category)}</div>
        <div class="p-name">${escapeHtml(product.name)}</div>
        <div class="p-bottom">
          <div class="p-price">${escapeHtml(product.price)} ${oldPrice}</div>
        </div>
      </div>
    </a>
    <button class="p-add-cart" data-id="${escapeHtml(product.id)}" aria-label="Thêm ${escapeHtml(product.name)} vào giỏ">
      ${cartIconSvg}
    </button>
  </div>`;
}

function renderProducts(products) {
  productList.innerHTML = products.length
    ? products.map(productCard).join('')
    : '<p role="status">Chưa có sản phẩm trong danh mục này.</p>';
}

function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').trim();
}

async function loadProducts() {
  if (!productList) return;
  try {
    const response = await fetch(`${pageRoot}features/catalog/products.json`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const products = await response.json();
    
    let filteredProducts = products;
    if (isCatalogPage) {
      const urlParams = new URLSearchParams(window.location.search);
      const q = urlParams.get('q');
      if (q) {
        const normQ = removeAccents(q.toLowerCase());
        
        const isSubsequence = (search, str) => {
          let i = 0;
          for (let j = 0; j < str.length && i < search.length; j++) {
            if (search[i] === str[j]) i++;
          }
          return i === search.length;
        };

        filteredProducts = products.filter(p => {
          const normName = removeAccents(p.name.toLowerCase());
          const normCat = removeAccents(p.category.toLowerCase());
          const acronym = normName.split(/\s+/).map(w => w[0]).join('');
          
          return normName.includes(normQ) || 
                 normCat.includes(normQ) || 
                 acronym.includes(normQ) ||
                 isSubsequence(normQ, normName);
        });
        // Remove active class from 'All' filter if searching
        categoryFilters.forEach(item => item.classList.remove('active'));
      }
    }

    renderProducts(isCatalogPage ? filteredProducts : products.slice(0, 4));

    categoryFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        const category = filter.dataset.category;
        const filtered = category === 'all'
          ? products
          : products.filter(p => p.catalogGroup === category);
        categoryFilters.forEach(item => item.classList.toggle('active', item === filter));
        renderProducts(filtered);
      });
    });
  } catch (error) {
    productList.innerHTML = '<p role="alert">Không thể tải danh sách sản phẩm.</p>';
    console.error('Product loading failed:', error);
  }
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  const count = getCartCount();
  if (badge) {
    badge.textContent = count;
    badge.hidden = count === 0;
  }
}

function bindAddToCart() {
  if (!productList) return;
  productList.addEventListener('click', e => {
    const btn = e.target.closest('.p-add-cart');
    if (!btn) return;
    e.preventDefault();
    const id = btn.dataset.id;
    addToCart(id);
    btn.classList.add('p-add-cart--added');
    btn.innerHTML = checkSvg;
    setTimeout(() => {
      btn.classList.remove('p-add-cart--added');
      btn.innerHTML = cartIconSvg;
    }, 1200);
    updateCartBadge();
  });
}

window.addEventListener('cart-updated', updateCartBadge);
loadProducts().then(() => { bindAddToCart(); updateCartBadge(); });
