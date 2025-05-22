document.addEventListener('DOMContentLoaded', () => {
    let navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Видаляємо клас active з усіх посилань
            navLinks.forEach(l => l.classList.remove('active'));
            // Додаємо клас active до клікнутого посилання
            e.target.classList.add('active');
        });
    });
});
