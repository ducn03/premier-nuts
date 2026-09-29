const newsList = document.querySelector('#news-list');
const newsFeatured = document.querySelector('#news-featured');
const newsFilters = document.querySelectorAll('[data-news-category]');

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[character]));
}

function articleCard(article) {
  return `<article class="news-article news-article-${escapeHtml(article.tone)}">
    <div class="news-article-art" aria-hidden="true"><span>${escapeHtml(article.categoryKey.slice(0, 2).toUpperCase())}</span></div>
    <div class="news-article-body">
      <div class="news-meta"><span>${escapeHtml(article.category)}</span><time datetime="2026-09-01">${escapeHtml(article.date)}</time></div>
      <h3>${escapeHtml(article.title)}</h3>
      <p>${escapeHtml(article.excerpt)}</p>
      <a class="news-read-button" href="news-detail.html?id=${encodeURIComponent(article.id)}">Đọc bài <span aria-hidden="true">→</span></a>
    </div>
  </article>`;
}

function renderFeatured(article) {
  newsFeatured.innerHTML = `<article class="news-featured-card news-featured-${escapeHtml(article.tone)}">
    <div class="news-featured-art" aria-hidden="true"><span>GÓC<br>KIẾN THỨC</span></div>
    <div class="news-featured-body">
      <div class="news-meta"><span>${escapeHtml(article.category)}</span><time datetime="2026-09-12">${escapeHtml(article.date)}</time></div>
      <h2>${escapeHtml(article.title)}</h2>
      <p>${escapeHtml(article.excerpt)}</p>
      <a class="cta-btn" href="news-detail.html?id=${encodeURIComponent(article.id)}">Đọc bài nổi bật</a>
    </div>
  </article>`;
}

function renderArticles(articles) {
  newsList.innerHTML = articles.length
    ? articles.map(articleCard).join('')
    : '<p class="news-empty" role="status">Chưa có bài viết trong chủ đề này.</p>';
}

async function loadNews() {
  try {
    const response = await fetch('../features/news/articles.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const articles = await response.json();
    const featured = articles.find(article => article.featured) || articles[0];
    renderFeatured(featured);
    renderArticles(articles.filter(article => article.id !== featured.id));

    newsFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        const category = filter.dataset.newsCategory;
        const filtered = category === 'all'
          ? articles.filter(article => article.id !== featured.id)
          : articles.filter(article => article.categoryKey === category && article.id !== featured.id);
        newsFilters.forEach(item => item.classList.toggle('active', item === filter));
        renderArticles(filtered);
      });
    });

  } catch (error) {
    newsFeatured.innerHTML = '<p class="news-error" role="alert">Không thể tải bài viết nổi bật.</p>';
    newsList.innerHTML = '<p class="news-error" role="alert">Không thể tải danh sách bản tin.</p>';
    console.error('News loading failed:', error);
  }
}

loadNews();
