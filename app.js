const productList = document.querySelector('#product-list');

const visuals = {
  almond: '<circle cx="32" cy="32" r="26" fill="#E4A45A"/><circle cx="24" cy="26" r="7" fill="#C98A4B"/><circle cx="40" cy="30" r="8" fill="#D9A24B"/><circle cx="30" cy="42" r="6" fill="#C98A4B"/>',
  chia: '<circle cx="32" cy="32" r="26" fill="#8FC53E"/><circle cx="20" cy="24" r="3" fill="#4F7A26"/><circle cx="30" cy="18" r="3" fill="#4F7A26"/><circle cx="40" cy="26" r="3" fill="#4F7A26"/><circle cx="24" cy="36" r="3" fill="#4F7A26"/><circle cx="36" cy="40" r="3" fill="#4F7A26"/><circle cx="44" cy="34" r="3" fill="#4F7A26"/>',
  granola: '<rect x="12" y="20" width="40" height="28" rx="8" fill="#D9A24B"/><circle cx="24" cy="34" r="5" fill="#8B5A2B"/><circle cx="38" cy="30" r="6" fill="#F0821E"/><circle cx="32" cy="42" r="4" fill="#8FC53E"/>',
  walnut: '<circle cx="32" cy="32" r="26" fill="#C98A4B"/><path d="M20 30c4-10 20-10 24 0" stroke="#8B5A2B" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="26" cy="38" r="3" fill="#8B5A2B"/><circle cx="38" cy="38" r="3" fill="#8B5A2B"/>'
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

  return `<a class="p-card" href="product-detail.html?id=${encodeURIComponent(product.id)}">
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

async function loadProducts() {
  if (!productList) return;

  try {
    const response = await fetch('products.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const products = await response.json();
    productList.innerHTML = products.map(productCard).join('');
  } catch (error) {
    productList.innerHTML = '<p role="alert">Không thể tải danh sách sản phẩm.</p>';
    console.error('Product loading failed:', error);
  }
}

loadProducts();
