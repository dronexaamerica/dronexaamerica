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

const collaborationForm = document.querySelector('#collaboration-form');
if (collaborationForm) {
  collaborationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(collaborationForm);
    const subject = `DRONEXA America Collaboration Inquiry — ${data.get('interest') || 'General'}`;
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Organization / Institution: ${data.get('organization') || ''}`,
      `Role / Title: ${data.get('role') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Area of Interest: ${data.get('interest') || ''}`,
      '',
      'Message:',
      `${data.get('message') || ''}`
    ].join('\n');
    window.location.href = `mailto:info@dronexaamerica.best?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
