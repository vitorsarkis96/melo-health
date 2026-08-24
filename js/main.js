document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.hidden = true;
  formNote.hidden = false;
});
