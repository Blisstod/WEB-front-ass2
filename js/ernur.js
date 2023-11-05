document.addEventListener('DOMContentLoaded', () => {
    const   navbar = document.querySelector('nav.nav'),
            toggleButton = navbar.querySelector('button.toggler');


    toggleButton.addEventListener('click', (e) => {
        navbar.classList.toggle('nav_expanded')
    });

    let user = localStorage.getItem('loggedIn');
    user = JSON.parse(user);
    if (user['loggedIn']) {
        $('.nav .login_btn').text(user['username']);
    }
});