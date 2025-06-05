function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const button = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = 'Світла тема';
    } else {
        button.textContent = 'Темна тема';
    }
}
