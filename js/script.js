const navigationButton = document.querySelector(".button--navigationShow");
const navigation = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll(".navigation__link");
const buttonUp = document.querySelector(".buttonUp")

const showButtonUp = () => {
    if(window.scrollY > 400) {
        buttonUp.style.opacity = 1
    } else {
        buttonUp.style.opacity = 0
    }
};

const toggleNavigation = () => {
    navigation.classList.toggle("navigation__active");

    if(window.innerWidth <= 1024) {
        navigationLinks.forEach(link => {
            link.addEventListener("click", () => {
                navigation.classList.remove("navigation__active");
            });
        });
    };
};

navigationButton.addEventListener("click", toggleNavigation);
window.addEventListener("scroll", showButtonUp)
