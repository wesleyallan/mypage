const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('active');
  menu.classList.toggle('active');
});