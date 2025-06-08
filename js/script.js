document.querySelectorAll('.faq-question-wrapper').forEach(item => {
  item.addEventListener('click', () => {
    const faqItem = item.parentElement;
    const toggleIcon = item.querySelector('.faq-toggle');
    faqItem.classList.toggle('open');
    toggleIcon.classList.toggle('open');
  });
});