const navigationButton = document.querySelector(".button--navigationShow");
const navigation = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll(".navigation__link");

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
