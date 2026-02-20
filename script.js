 document.querySelectorAll('.scroll-arrow').forEach(arrow => {
   arrow.addEventListener('click', () => {
    const container = arrow.parentElement.querySelector('.scroll-content');
    const direction = arrow.classList.contains('left') ? -1 : 1;
    container.scrollBy({ left: 300 * direction, behavior: 'smooth' });
   });
  });