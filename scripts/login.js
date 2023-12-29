const burgerMenu = document.querySelector('.ham-burger-menu');
const navigation = document.querySelector('nav');
const closeIcon = document.querySelector(".menu-close");
const titleNavigation = document.querySelector(".title-navigation")
const hideMain = document.querySelector(".main")

burgerMenu.addEventListener('click', displayNav);
closeIcon.addEventListener('click', closeNav);

function displayNav() {
    navigation.style.display = "block";
    titleNavigation.style.display = 'none';
    hideMain.style.display = 'none';
}

function closeNav() {
    // navigation.style.display = 'none';
    hideMain.style.display = 'flex';
    // titleNavigation.style.display = 'block';
}