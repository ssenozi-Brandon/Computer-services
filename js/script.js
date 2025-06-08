document.querySelectorAll('.faq-question-wrapper').forEach(item => {
  item.addEventListener('click', () => {
    const faqItem = item.parentElement;
    const toggleIcon = item.querySelector('.faq-toggle');
    faqItem.classList.toggle('open');
    toggleIcon.classList.toggle('open');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const statItems = document.querySelectorAll('.stat-item');
  
  const animateCounters = () => {
    statItems.forEach(item => {
      const numberElement = item.querySelector('.stat-number');
      const target = parseInt(numberElement.getAttribute('data-count'));
      const duration = 2000;
      const start = 0;
      const increment = target / (duration / 16);
      
      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          current = target;
        }
        numberElement.textContent = Math.floor(current);
      }, 16);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    observer.observe(statsSection);
  }

});