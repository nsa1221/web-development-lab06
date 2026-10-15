// Dark Mode Toggle Functionality
const themeToggleBtn = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const htmlElement = document.documentElement;

// LocalStorage-оос сэдвийг сэргээх
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeLabel(savedTheme);

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeLabel(newTheme);
});

function updateThemeLabel(theme) {
  themeLabel.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

// Interactive Flip Button Trigger for Cards
document.querySelectorAll('.flip-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = button.closest('.flip-card');
    card.classList.toggle('is-flipped');
  });
});