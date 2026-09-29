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
    </div>
    <div class="header-actions">
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
      <a href="${rootPath}pages/contact-form-test.html">1900 6868</a>
      <a href="${rootPath}pages/contact-form-test.html">hello@premiernuts.vn</a>
      <a href="${rootPath}pages/contact-form-test.html">123 Nguyễn Huệ, Q.1, TP.HCM</a>
    </div>
  </div>
  <div class="foot-bottom">
    <span>© 2026 Premier Nuts. Bảo lưu mọi quyền.</span>
    <div class="social">
      <a href="#" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M15 8h2V4h-2a5 5 0 0 0-5 5v2H8v4h2v7h4v-7h3l1-4h-4V9a1 1 0 0 1 1-1Z" fill="var(--green-dark)"/></svg></a>
      <a href="#" aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="var(--green-dark)" stroke-width="1.8"/><circle cx="12" cy="12" r="4" stroke="var(--green-dark)" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.2" fill="var(--green-dark)"/></svg></a>
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
    } catch {}
  }
  syncCartBadge();
  window.addEventListener('cart-updated', syncCartBadge);


  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const activeNavItems = document.querySelectorAll('.bn-item');
  activeNavItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.page === currentPath) item.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', renderShell);
