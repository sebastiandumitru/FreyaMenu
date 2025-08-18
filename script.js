const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

function scrollWithOffset(target, offset=20){
  const el = document.querySelector(target);
  if(!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({top:y, behavior:'smooth'});
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const href = a.getAttribute('href');
    scrollWithOffset(href, 20);
  });
});
