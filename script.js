const burgerMenu = document.querySelector('.ham');
const navigation = document.querySelector('nav');
const closeIcon = document.querySelector(".menu-close");
const titleNavigation =document.querySelector(".title-navigation")
const hideMain = document.querySelector(".main")
const filterDiv = document.querySelector('.filter-button')

burgerMenu.addEventListener('click', displayNav);
closeIcon.addEventListener('click', closeNav);

function displayNav() {
    navigation.style.display = "block";
    titleNavigation.style.display = 'none';
    // hideMain.style.display = 'none';
}

function closeNav() {
    titleNavigation.style.display = 'flex'
    navigation.style.display = 'none';
    // filterDiv.style.display = 'none'
    burgerMenu.style.display = 'block'
    // hideMain.style.display = 'flex';
    // titleNavigation.style.display = 'block';
}