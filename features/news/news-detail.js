const detailRoot = document.querySelector('#news-detail');

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[character]));
}

const topicNotes = {
  nutrition: {
    heading: 'Một lựa chọn tốt nên bắt đầu bằng sự hiểu rõ.',
    body: 'Khi tìm hiểu về một loại hạt, hãy bắt đầu từ cách dùng, khẩu phần phù hợp và nguồn thông tin rõ ràng. Không cần gắn cho một món ăn quá nhiều lời hứa; điều quan trọng là nó có thể đi cùng thói quen thật của bạn.'
  },
  recipe: {
    heading: 'Càng đơn giản, càng dễ duy trì.',
    body: 'Một công thức tốt không cần nhiều bước. Hãy thử kết hợp hạt với những món bạn vốn đã dùng như sữa chua, smoothie hoặc cốc nước buổi sáng để việc chuẩn bị trở nên tự nhiên hơn.'
  },
  lifestyle: {
    heading: 'Chăm mình theo cách vừa vặn với ngày hôm nay.',
    body: 'Sống khỏe không phải một cuộc thi. Một thay đổi nhỏ nhưng có thể lặp lại thường đáng giá hơn một kế hoạch hoàn hảo chỉ kéo dài vài ngày.'
  },
  brand: {
    heading: 'Premier Nuts chọn bắt đầu từ điều gần gũi.',
    body: 'Tụi mình muốn đưa những lựa chọn lành mạnh đến gần hơn với nhịp sống của người trẻ: dễ hiểu, dễ dùng và đủ thoải mái để trở thành một phần của ngày thường.'
  },
  promotion: {
    heading: 'Chọn ưu đãi phù hợp với nhu cầu của bạn.',
    body: 'Thông tin chương trình có thể thay đổi theo từng thời điểm. Bạn có thể để lại thông tin để Premier Nuts xác nhận sản phẩm, thời gian áp dụng và cách đặt hàng cụ thể.'
  }
};

function renderArticle(article) {
  const note = topicNotes[article.categoryKey] || topicNotes.lifestyle;
  const paragraphs = article.body || [article.excerpt];
  detailRoot.innerHTML = `<article class="news-detail-article">
    <a class="news-detail-back" href="news.html">← Quay lại Bản tin</a>
    <header class="news-detail-header">
      <div class="news-meta"><span>${escapeHtml(article.category)}</span><time>${escapeHtml(article.date)}</time><span>${escapeHtml(article.readTime)}</span></div>
      <h1>${escapeHtml(article.title)}</h1>
      <p class="news-detail-excerpt">${escapeHtml(article.excerpt)}</p>
    </header>
    <div class="news-detail-layout">
      <div class="news-detail-art news-detail-${escapeHtml(article.tone)}" aria-hidden="true"><span>${escapeHtml(article.categoryKey.slice(0, 2).toUpperCase())}</span></div>
      <div class="news-detail-content">
        ${paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}
        <h2>${escapeHtml(note.heading)}</h2>
        <p>${escapeHtml(note.body)}</p>
      </div>
    </div>
    <footer class="news-detail-footer">
      <strong>Muốn bắt đầu từ một thìa hạt?</strong>
      <a class="cta-btn" href="products.html">Xem sản phẩm</a>
    </footer>
  </article>`;
}

async function loadArticle() {
  try {
    const id = new URLSearchParams(window.location.search).get('id');
    const response = await fetch('../features/news/articles.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const articles = await response.json();
    const article = articles.find(item => item.id === id) || articles[0];
    renderArticle(article);
    document.title = `${article.title} | Premier Nuts`;
  } catch (error) {
    detailRoot.innerHTML = '<p class="news-error" role="alert">Không thể tải nội dung bài viết.</p>';
    console.error('News detail loading failed:', error);
  }
}

loadArticle();
