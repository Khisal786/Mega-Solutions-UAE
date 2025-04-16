// darkmode.js

// Get the button and current theme from localStorage
const toggleBtn = document.getElementById('darkModeToggle');
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on load
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Light Mode';
}

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Update localStorage and button text
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = '☀️ Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = '🌙 Dark Mode';
  }
});
