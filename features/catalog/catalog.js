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
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[character]));
}

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

  return `<a class="p-card" href="${pageRoot}pages/product-detail.html?id=${encodeURIComponent(product.id)}">
    <div class="p-media" style="background:${mediaBackground}">
      ${tag}
      <svg width="86" height="86" viewBox="0 0 64 64">${visuals[product.mediaClass]}</svg>
    </div>
    <div class="p-body">
      <div class="p-cat">${escapeHtml(product.category)}</div>
      <div class="p-name">${escapeHtml(product.name)}</div>
      <div class="rating">${escapeHtml(product.rating)}</div>
      <div class="p-bottom">
        <div class="p-price">${escapeHtml(product.price)} ${oldPrice}</div>
      </div>
    </div>
  </a>`;
}

function renderProducts(products) {
  productList.innerHTML = products.length
    ? products.map(productCard).join('')
    : '<p role="status">Chưa có sản phẩm trong danh mục này.</p>';
}

async function loadProducts() {
  if (!productList) return;

  try {
    const response = await fetch(`${pageRoot}features/catalog/products.json`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const products = await response.json();
    renderProducts(isCatalogPage ? products : products.slice(0, 4));

    categoryFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        const category = filter.dataset.category;
        const filteredProducts = category === 'all'
          ? products
          : products.filter(product => product.category === category);

        categoryFilters.forEach(item => item.classList.toggle('active', item === filter));
        renderProducts(filteredProducts);
      });
    });
  } catch (error) {
    productList.innerHTML = '<p role="alert">Không thể tải danh sách sản phẩm.</p>';
    console.error('Product loading failed:', error);
  }
}

loadProducts();
