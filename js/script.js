const navigationButton = document.querySelector(".button--navigationShow");
const navigation = document.querySelector(".navigation");

const toggleNavigation = () => {
    navigation.classList.toggle("navigation__active")
}

navigationButton.addEventListener("click", toggleNavigation);