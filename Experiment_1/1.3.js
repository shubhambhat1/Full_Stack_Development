// Get the theme toggle button
const themeToggle = document.getElementById('themeToggle');

// Check if user has a saved theme preference
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.textContent = '🌙 Dark Mode';
    } else {
        document.body.classList.remove('light-theme');
        themeToggle.textContent = '☀️ Light Mode';
    }
}

// Toggle theme and save preference
function toggleTheme() {
    const isLightTheme = document.body.classList.toggle('light-theme');
    
    if (isLightTheme) {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 Dark Mode';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ Light Mode';
    }
}

// Add click event listener
themeToggle.addEventListener('click', toggleTheme);

// Load saved theme on page load
loadTheme();
