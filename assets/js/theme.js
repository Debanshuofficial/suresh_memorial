/* --- Theme Toggle --- */
function initTheme() {
    // Desktop Switch
    const themeCheckbox = document.getElementById('theme-toggle-checkbox');
    // Mobile Link
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Sync switch state
    if (themeCheckbox) {
        themeCheckbox.checked = (savedTheme === 'light');
    }

    // Function to set theme
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (themeCheckbox) themeCheckbox.checked = (theme === 'light');
    };

    // Toggle Logic
    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', () => {
            const newTheme = themeCheckbox.checked ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const current = document.documentElement.getAttribute('data-theme');
            const newTheme = current === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }
}
