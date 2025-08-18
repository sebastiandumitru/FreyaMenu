// set year
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

// scroll cu offset dinamic după header (să oprească exact pe titlu)
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  function headerOffset(){ return (header ? header.offsetHeight : 0) + 8; } // +8px aer
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if(!target) return;
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset();
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
});
