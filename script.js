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

// Improve keyboard accessibility: allow Enter/Space to trigger buttons styled as divs
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && document.activeElement.classList.contains('scroll-arrow')) {
    e.preventDefault();
    document.activeElement.click();
  }
});