const isNestedPage = window.location.pathname.split('/').includes('pages');
const rootPath = isNestedPage ? '../' : '';
const productsPath = isNestedPage ? 'products.html' : 'pages/products.html';

const checkoutPath = isNestedPage ? 'checkout.html' : 'pages/checkout.html';

const siteHeaderMarkup = `
<header class="site">
  <div class="header-row">
    <a href="${rootPath}index.html" class="brand">
      <img src="${rootPath}assets/images/premier-nuts-logo-2.png" alt="Premier Nuts">
    </a>
    <nav class="main-nav">
      <a href="${rootPath}index.html">Trang chủ</a>
      <a href="${rootPath}pages/about-us.html">Về chúng tôi</a>
      <a href="${rootPath}pages/news.html">Bản tin</a>
      <a href="${rootPath}pages/support.html">Hỗ trợ</a>
      <a href="${productsPath}" class="products-link">Sản phẩm</a>
    </nav>
    <div class="search-box">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      <input type="text" placeholder="Tìm hạt óc chó, chia, granola...">
      <div class="search-suggestions" hidden></div>
    </div>
    <div class="header-actions">
      <button class="mobile-search-btn" aria-label="Tìm kiếm">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
      <a href="${checkoutPath}" class="cart-icon-btn" aria-label="Giỏ hàng">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" stroke-width="1.8"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="1.8"/><path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        <span class="cart-badge" hidden>0</span>
      </a>
    </div>
  </div>
</header>
<!-- Mobile cart FAB -->
<a href="${checkoutPath}" class="cart-fab" aria-label="Giỏ hàng">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" stroke-width="1.8"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="1.8"/><path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
  <span class="cart-badge" hidden>0</span>
</a>
`;

const siteFooterMarkup = `
<footer>
  <div class="foot-grid">
    <div>
      <div class="foot-brand">
        <img src="${rootPath}assets/images/premier-nuts-logo-2.png" alt="Premier Nuts">
        <span>Premier Nuts</span>
      </div>
      <p class="desc">Hạt dinh dưỡng và ngũ cốc sạch, tuyển chọn kỹ càng để mỗi bữa ăn của bạn đều trọn vẹn năng lượng.</p>
    </div>
    <div class="foot-col">
      <h5>Mua sắm</h5>
      <a href="#">Hạt dinh dưỡng</a>
      <a href="#">Hạt chia &amp; hạt lanh</a>
      <a href="#">Ngũ cốc &amp; yến mạch</a>
      <a href="#">Combo quà tặng</a>
    </div>
    <div class="foot-col">
      <h5>Về Premier Nuts</h5>
      <a href="${rootPath}pages/about-us.html">Về chúng tôi</a>
      <a href="${rootPath}pages/news.html">Bản tin</a>
      <a href="${rootPath}pages/support.html">Hỗ trợ &amp; chính sách</a>
      <a href="#">Chính sách đổi trả</a>
      <a href="#">Vận chuyển</a>
    </div>
    <div class="foot-col">
      <h5>Liên hệ</h5>
      <a href="tel:0949382374">0949 382 374</a>
      <a href="mailto:premiernutshcm@gmail.com">premiernutshcm@gmail.com</a>
      <a href="${rootPath}pages/contact-form-test.html">131/53/3 đường số 6, khu phố 1, p. Linh Xuân, Thủ Đức, TP HCM</a>
    </div>
  </div>
  <div class="foot-bottom">
    <span>© 2026 Premier Nuts. Bảo lưu mọi quyền.</span>
    <div class="social">
      <a href="https://www.facebook.com/share/19Z9yyJetr/?mibextid=wwXIfr" target="_blank" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M15 8h2V4h-2a5 5 0 0 0-5 5v2H8v4h2v7h4v-7h3l1-4h-4V9a1 1 0 0 1 1-1Z" fill="var(--green-dark)"/></svg></a>
      <a href="https://www.tiktok.com/@premirenutsvn" target="_blank" aria-label="TikTok"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v8a8 8 0 1 1-8-8v3a5 5 0 0 0 1 5z" fill="var(--green-dark)"/></svg></a>
      <a href="#" aria-label="Zalo"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="var(--green-dark)" stroke-width="1.8"/><path d="M8 9h6l-6 6h6" stroke="var(--green-dark)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
  </div>
</footer>`;

const bottomNavMarkup = `
<nav class="bottom-nav">
  <a href="${rootPath}index.html" class="bn-item" data-page="index.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 11 12 4l8 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Trang chủ
  </a>
  <a href="${rootPath}pages/about-us.html" class="bn-item" data-page="about-us.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
    Về chúng tôi
  </a>
  <a href="${productsPath}" class="bn-item" data-page="products.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/></svg>
    Sản phẩm
  </a>
  <a href="${rootPath}pages/news.html" class="bn-item" data-page="news.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 4h14v16H5z" stroke="currentColor" stroke-width="1.8"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
    Bản tin
  </a>
  <a href="${rootPath}pages/support.html" class="bn-item" data-page="support.html">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M9.5 9.5a2.5 2.5 0 1 1 4.2 1.8c-1.1.8-1.7 1.2-1.7 2.7M12 17h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
    Hỗ trợ
  </a>
</nav>`;

function renderShell() {
  const headerRoot = document.querySelector('#site-header');
  const footerRoot = document.querySelector('#site-footer');
  const bottomNavRoot = document.querySelector('#site-bottom-nav');

  if (headerRoot) headerRoot.innerHTML = siteHeaderMarkup;
  if (footerRoot) footerRoot.innerHTML = siteFooterMarkup;
  if (bottomNavRoot) bottomNavRoot.innerHTML = bottomNavMarkup;

  // Move cart FAB out of #site-header into body
  const fab = headerRoot?.querySelector('.cart-fab');
  if (fab) document.body.appendChild(fab);

  // Sync cart badge count from localStorage
  function syncCartBadge() {
    try {
      const cart = JSON.parse(localStorage.getItem('pn_cart') || '{}');
      const count = Object.values(cart).reduce((a, b) => a + b, 0);
      document.querySelectorAll('.cart-badge').forEach(b => {
        b.textContent = count;
        b.hidden = count === 0;
      });
    } catch { }
  }
  syncCartBadge();
  window.addEventListener('cart-updated', syncCartBadge);


  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const activeNavItems = document.querySelectorAll('.bn-item');
  activeNavItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.page === currentPath) item.classList.add('active');
  });

  // Handle Header Search & Autocomplete
  const searchInput = document.querySelector('.search-box input');
  const searchIcon = document.querySelector('.search-box > svg');
  const suggestionsBox = document.querySelector('.search-suggestions');
  const mobileSearchBtn = document.querySelector('.mobile-search-btn');
  const searchBox = document.querySelector('.search-box');

  if (mobileSearchBtn && searchBox) {
    mobileSearchBtn.addEventListener('click', () => {
      searchBox.classList.toggle('is-open');
      if (searchBox.classList.contains('is-open')) searchInput.focus();
    });
  }

  if (searchInput && suggestionsBox) {
    const qParams = new URLSearchParams(window.location.search);
    if (qParams.has('q')) {
      searchInput.value = qParams.get('q');
    }

    const doSearch = () => {
      const query = searchInput.value.trim();
      if (query) window.location.href = productsPath + '?q=' + encodeURIComponent(query);
    };

    if (searchIcon) {
      searchIcon.style.cursor = 'pointer';
      searchIcon.addEventListener('click', doSearch);
    }

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

    let allProducts = null;
    let searchTimeout;
    let activeIndex = -1;

    function removeAccents(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').trim();
    }

    searchInput.addEventListener('input', () => {
      activeIndex = -1;
      clearTimeout(searchTimeout);
      const query = searchInput.value.trim();
      
      if (!query) {
        suggestionsBox.hidden = true;
        return;
      }

      searchTimeout = setTimeout(async () => {
        try {
          if (!allProducts) {
            const dataPath = isNestedPage ? '../features/catalog/products.json' : 'features/catalog/products.json';
            const res = await fetch(dataPath);
            allProducts = await res.json();
          }

          const normQ = removeAccents(query.toLowerCase());
          
          const isSubsequence = (search, str) => {
            let i = 0;
            for (let j = 0; j < str.length && i < search.length; j++) {
              if (search[i] === str[j]) i++;
            }
            return i === search.length;
          };

          const matches = allProducts.filter(p => {
            const normName = removeAccents(p.name.toLowerCase());
            const normCat = removeAccents(p.category.toLowerCase());
            const acronym = normName.split(/\s+/).map(w => w[0]).join('');
            
            return normName.includes(normQ) || 
                   normCat.includes(normQ) || 
                   acronym.includes(normQ) ||
                   isSubsequence(normQ, normName);
          }).slice(0, 5); // Limit to 5 suggestions

          if (matches.length === 0) {
            suggestionsBox.innerHTML = '<div style="padding:12px 16px; font-size:13px; color:var(--ink-soft);">Không tìm thấy sản phẩm.</div>';
            suggestionsBox.hidden = false;
            return;
          }

          suggestionsBox.innerHTML = matches.map(m => {
            const mediaBackground = m.mediaClass === 'chia' || m.mediaClass === 'walnut' ? 'var(--green-mist)' : '#FBEFD9';
            const detailUrl = rootPath + 'pages/product-detail.html?id=' + encodeURIComponent(m.id);
            return `
              <a href="${detailUrl}" class="sg-item">
                <div class="sg-img" style="background:${mediaBackground}">
                  <svg viewBox="0 0 64 64">${visuals[m.mediaClass] || ''}</svg>
                </div>
                <div class="sg-info">
                  <span class="sg-name">${m.name}</span>
                  <span class="sg-price">${m.price}</span>
                </div>
              </a>
            `;
          }).join('');
          
          suggestionsBox.hidden = false;
        } catch (e) {
          console.error('Search failed', e);
        }
      }, 300);
    });

    searchInput.addEventListener('keydown', e => {
      const items = suggestionsBox.querySelectorAll('.sg-item');
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        if (!suggestionsBox.hidden && items.length > 0) {
          e.preventDefault();
          items.forEach(item => item.classList.remove('active'));
          
          if (e.key === 'ArrowDown') {
            activeIndex = (activeIndex + 1) % items.length;
          } else {
            activeIndex = (activeIndex - 1 + items.length) % items.length;
          }
          
          items[activeIndex].classList.add('active');
          items[activeIndex].scrollIntoView({ block: 'nearest' });
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < items.length && !suggestionsBox.hidden) {
          window.location.href = items[activeIndex].href;
        } else {
          doSearch();
        }
      }
    });

    // Hide suggestions and mobile search box when clicking outside
    document.addEventListener('click', e => {
      if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.hidden = true;
      }
      if (searchBox && mobileSearchBtn && !searchBox.contains(e.target) && !mobileSearchBtn.contains(e.target)) {
        searchBox.classList.remove('is-open');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', renderShell);
