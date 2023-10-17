document.addEventListener('DOMContentLoaded', () => {
    const   navbar = document.querySelector('nav.nav'),
            toggleButton = navbar.querySelector('button.toggler');


    toggleButton.addEventListener('click', (e) => {
        navbar.classList.toggle('nav_expanded')
    });
});