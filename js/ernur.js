document.addEventListener('DOMContentLoaded', () => {

    $('.nav button.toggler').click(function (e) { 
        e.preventDefault();
        $('.nav').toggleClass('nav_expanded');
    });

    let user = localStorage.getItem('loggedIn');
    if (user !== null) {
        user = JSON.parse(user);
        if (user['loggedIn']) {
            $('.nav .login_btn').text(user['username']);
        }
    }
});