export function initializeDarkmode() {

    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const icon = themeToggle.querySelector('i');
    const STORAGE_KEY = 'desk-oclock-theme';

    function applyTheme(theme) {
        document.documentElement.style.colorScheme = theme;
        if (icon) {
            icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
        themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }

    // On load: use saved preference if it exists, otherwise follow system
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const currentTheme = localStorage.getItem(STORAGE_KEY) || (systemPrefersDark ? 'dark' : 'light');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        localStorage.setItem(STORAGE_KEY, newTheme);
        applyTheme(newTheme);
    });
    
}