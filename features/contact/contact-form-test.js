const contactForm = document.querySelector('#contact-test-form');
const contactStatus = document.querySelector('#contact-test-status');

contactForm?.addEventListener('submit', event => {
  contactStatus.textContent = 'Đã gửi yêu cầu. Premier Nuts sẽ liên hệ lại với bạn.';
  contactStatus.classList.add('is-visible');
});
