document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Перемкнути на Світлу тему';
    } else {
        themeToggle.textContent = 'Перемкнути на Темну тему';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = 'Перемкнути на Світлу тему';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = 'Перемкнути на Темну тему';
        }
    });
});
