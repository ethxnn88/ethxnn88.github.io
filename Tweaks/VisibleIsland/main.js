const hamburger = document.querySelector('.hamburger');
const closeicon = document.querySelector('.closeicon');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

closeicon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});