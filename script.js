document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Sticky Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});