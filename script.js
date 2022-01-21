const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.menu-icon')
menuIcon.addEventListener('click', toggleMenu)

function toggleMenu() {
    menu.classList.toggle('show-menu')
}