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
    <a class="detail-back" href="../index.html#san-pham">← Quay lại sản phẩm</a>
    <section class="detail-hero">
      <div class="detail-visual" style="background:${background}">
        <span class="detail-orbit detail-orbit-one"></span><span class="detail-orbit detail-orbit-two"></span>${tag}
        <svg width="260" height="260" viewBox="0 0 64 64" aria-label="Hình minh họa ${escapeHtml(product.name)}">${detailVisuals[product.mediaClass]}</svg>
      </div>
      <div class="detail-copy">
        <span class="detail-kicker">${escapeHtml(product.category)} / PREMIER NUTS</span>
        <h1>${escapeHtml(product.name)}</h1>
        <div class="detail-rating">${escapeHtml(product.rating)} <span>Được khách hàng yêu thích</span></div>
        <p class="detail-lead">${escapeHtml(product.description)}</p>
        <div class="detail-price"><strong>${escapeHtml(product.price)}</strong>${oldPrice}<span> / túi</span></div>
        <div class="detail-actions"><a href="tel:19006868" class="cta-btn">Gọi đặt hàng</a><a href="https://zalo.me/0900000000" class="cta-btn ghost" target="_blank" rel="noopener">Nhắn Zalo</a></div>
        <div class="detail-note"><span>✓</span> Không đường tinh luyện <span>✓</span> Rang mộc tươi mới <span>✓</span> Đóng gói kỹ</div>
        <dl class="detail-specs"><div><dt>Xuất xứ</dt><dd>${escapeHtml(product.origin)}</dd></div><div><dt>Cách dùng</dt><dd>${escapeHtml(product.serving)}</dd></div><div><dt>Bảo quản</dt><dd>${escapeHtml(product.storage)}</dd></div></dl>
      </div>
    </section>
    <section class="detail-benefits"><div><b>01</b><h2>Chọn lọc có chủ đích</h2><p>Mỗi sản phẩm được chọn theo hương vị, độ tươi và cách dùng thực tế trong nhịp sống hằng ngày.</p></div><div><b>02</b><h2>Ăn ngon, dễ kết hợp</h2><p>Từ bữa sáng nhanh đến món ăn nhẹ tại văn phòng, sản phẩm dễ dùng và không cần chuẩn bị cầu kỳ.</p></div><div><b>03</b><h2>Giao tận tay chỉn chu</h2><p>Đóng gói cẩn thận để hạt giữ được độ ngon trong suốt hành trình đến căn bếp của bạn.</p></div></section>
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

loadProductDetail();
