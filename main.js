document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeToggle.textContent = body.classList.contains('dark-theme') ? 'Світла тема' : 'Темна тема';
    });
});
