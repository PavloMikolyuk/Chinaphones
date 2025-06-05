document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
if (localStorage.getItem('theme') === 'dark') {
    html.classList.remove('light');
    html.classList.add('dark');
    themeToggle.textContent = 'Світла тема';
} else {
    html.classList.remove('dark');
    html.classList.add('light');
    themeToggle.textContent = 'Темна тема';
}
themeToggle.addEventListener('click', () => {
    if (html.classList.contains('light')) {
        html.classList.remove('light');
        html.classList.add('dark');
        themeToggle.textContent = 'Світла тема';
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.remove('dark');
        html.classList.add('light');
        themeToggle.textContent = 'Темна тема';
        localStorage.setItem('theme', 'light');
    }
});
