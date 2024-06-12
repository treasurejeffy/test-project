const themeSwitch = document.getElementById('themeSwitch');
const themeIcon = document.getElementById('themeIcon');

themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-star');
        document.querySelector('nav').classList.remove('navbar-dark');
        document.querySelector('nav').classList.add('navbar-light');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-star');
        themeIcon.classList.add('fa-moon');
        document.querySelector('nav').classList.remove('navbar-light');
        document.querySelector('nav').classList.add('navbar-dark');
    }
});