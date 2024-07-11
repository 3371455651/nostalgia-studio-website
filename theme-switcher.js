document.addEventListener('DOMContentLoaded', function() {
    var themeSwitcher = document.querySelector('.theme-switcher');
    themeSwitcher.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });

    // 响应式导航栏的交互
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
