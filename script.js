const burgerMenu = document.querySelector('.ham');
const navigation = document.querySelector('nav');
const closeIcon = document.querySelector(".menu-close");

burgerMenu.addEventListener('click', displayNav);
closeIcon.addEventListener('click', closeNav);

function displayNav() {
    navigation.style.display = "block";
}

function closeNav() {
    navigation.style.display = 'none';
}