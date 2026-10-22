document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  const htmlTag = document.documentElement;

  const btnMobile = document.getElementById('btnMobile');
  const btnDesktop = document.getElementById('btnDesktop');
  const deviceViewport = document.getElementById('deviceViewport');

  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');

  const flipCards = document.querySelectorAll('.flip-card');

  // ==========================================
  // 1. DARK / LIGHT MODE TOGGLE
  // ==========================================
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlTag.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      htmlTag.setAttribute('data-theme', 'light');
      themeIcon.className = 'fa-solid fa-sun';
      themeText.textContent = 'Light Mode: ON';
    } else {
      htmlTag.setAttribute('data-theme', 'dark');
      themeIcon.className = 'fa-solid fa-moon';
      themeText.textContent = 'Dark Mode: ON';
    }
  });

  // ==========================================
  // 2. VIEWPORT SWITCHER (MOBILE / DESKTOP)
  // ==========================================
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

  // ==========================================
  // 3. MOBILE MENU TOGGLE
  // ==========================================
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  // ==========================================
  // 4. TOUCH / CLICK SUPPORT FOR 3D FLIP CARDS
  // ==========================================
  flipCards.forEach(card => {
    const backBtn = card.querySelector('.flip-back-btn');

    // Карт дээр дарахад эргүүлэх
    card.addEventListener('click', (e) => {
      // Хэрэв "Буцах" товчийг дарсан бол
      if (e.target === backBtn) {
        card.classList.remove('flipped');
      } else {
        card.classList.toggle('flipped');
      }
    });
  });
});
```<ElicitationsGroup>
</ElicitationsGroup>