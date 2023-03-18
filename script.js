const menu = document.querySelector('#mobile-menu');  //hamburguer menu
const menuLinks = document.querySelector('.navbar_menu') ;// target li in menu

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

