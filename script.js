const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('#site-nav a').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')));
document.querySelector('#year').textContent = new Date().getFullYear();
