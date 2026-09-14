const siteHeaderMarkup = `
<header class="site">
  <div class="header-row">
    <a href="index.html" class="brand">
      <img src="premier-nuts-logo-2.png" alt="Premier Nuts">
    </a>
    <nav class="main-nav">
      <a href="index.html">Trang chủ</a>
      <a href="index.html#ve-chung-toi">Về chúng tôi</a>
      <a href="index.html#faq">Hỏi &amp; đáp</a>
      <a href="index.html#lien-he">Liên hệ</a>
      <a href="products.html" class="products-link">Sản phẩm</a>
    </nav>
    <div class="search-box">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      <input type="text" placeholder="Tìm hạt óc chó, chia, granola...">
    </div>
    <div class="header-actions"></div>
  </div>
</header>`;

const siteFooterMarkup = `
<footer>
  <div class="foot-grid">
    <div>
      <div class="foot-brand">
        <img src="premier-nuts-logo-2.png" alt="Premier Nuts">
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
      <a href="index.html#ve-chung-toi">Về chúng tôi</a>
      <a href="index.html#faq">Hỏi &amp; đáp</a>
      <a href="#">Chính sách đổi trả</a>
      <a href="#">Vận chuyển</a>
    </div>
    <div class="foot-col">
      <h5>Liên hệ</h5>
      <a href="index.html#lien-he">1900 6868</a>
      <a href="index.html#lien-he">hello@premiernuts.vn</a>
      <a href="index.html#lien-he">123 Nguyễn Huệ, Q.1, TP.HCM</a>
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
  <a href="index.html" class="bn-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 11 12 4l8 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Trang chủ
  </a>
  <a href="products.html" class="bn-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/></svg>
    Sản phẩm
  </a>
</nav>`;

function renderShell() {
  const headerRoot = document.querySelector('#site-header');
  const footerRoot = document.querySelector('#site-footer');
  const bottomNavRoot = document.querySelector('#site-bottom-nav');

  if (headerRoot) headerRoot.innerHTML = siteHeaderMarkup;
  if (footerRoot) footerRoot.innerHTML = siteFooterMarkup;
  if (bottomNavRoot) bottomNavRoot.innerHTML = bottomNavMarkup;

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const activeNavItems = document.querySelectorAll('.bn-item');
  activeNavItems.forEach(item => {
    item.classList.remove('active');
    const href = item.getAttribute('href');
    if (href === 'index.html' && currentPath === 'index.html') item.classList.add('active');
    if (href === 'products.html' && currentPath === 'products.html') item.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', renderShell);
