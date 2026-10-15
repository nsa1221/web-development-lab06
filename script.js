// 1. Dark / Light Mode Toggle Logic
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'light');
    themeIcon.className = 'fa-solid fa-sun';
    themeText.textContent = 'Dark Mode';
  } else {
    htmlElement.setAttribute('data-theme', 'dark');
    themeIcon.className = 'fa-solid fa-moon';
    themeText.textContent = 'Light Mode';
  }
});

// 2. Mobile Hamburger Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('nav-open');
});

// 3. Wireframe / Viewport Mode Switcher (Утас болон Компьютер горим солих)
const btnMobile = document.getElementById('btnMobile');
const btnDesktop = document.getElementById('btnDesktop');
const deviceViewport = document.getElementById('deviceViewport');

btnMobile.addEventListener('click', () => {
  deviceViewport.classList.remove('desktop-view');
  deviceViewport.classList.add('phone-view');
  btnMobile.classList.add('active');
  btnDesktop.classList.remove('active');
});

btnDesktop.addEventListener('click', () => {
  deviceViewport.classList.remove('phone-view');
  deviceViewport.classList.add('desktop-view');
  btnDesktop.classList.add('active');
  btnMobile.classList.remove('active');
});

// 4. 3D Flip Card Toggle Button (Таблет/Утас дээр дарж эргүүлэх)
document.querySelectorAll('.flip-back-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.flip-card');
    card.classList.toggle('is-flipped');
  });
});