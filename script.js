document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
      const carousel = arrow.closest('.carousel-container');
      if (!carousel) return;
      const container = carousel.querySelector('.scroll-content');
      const item = container ? container.querySelector('.work-item, .service-card, li') : null;
      if (!container || !item) return;
      const gap = parseFloat(getComputedStyle(container).gap) || 0;
      const itemW = item.getBoundingClientRect().width + gap;
      const visible = Math.max(1, Math.floor(container.clientWidth / itemW));
      const distance = itemW * visible;
      const dir = arrow.classList.contains('left') ? -1 : 1;
      container.scrollBy({ left: distance * dir, behavior: 'smooth' });
    });
  });
});

// IntersectionObserver to reveal hero and sections
document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll('.hero-content, main > section');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // once shown, unobserve to improve performance
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(t => io.observe(t));
});

// Improve keyboard accessibility: allow Enter/Space to trigger buttons styled as divs
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && document.activeElement.classList.contains('scroll-arrow')) {
    e.preventDefault();
    document.activeElement.click();
  }
});