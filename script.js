// Scroll lin cu offset calculat după header
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header'); // header-ul existent
  const headerHeight = header ? header.offsetHeight : 0;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const yOffset = -headerHeight - 10; // offset dinamic + spațiu mic extra
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
});
