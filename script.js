const themeToggleBtn = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeLabel(savedTheme);

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeLabel(newTheme);
});

function updateThemeLabel(theme) {
  themeLabel.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

document.querySelectorAll('.flip-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = button.closest('.flip-card');
    card.classList.toggle('is-flipped');
  });
});