{
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
}

{
    const buttonNext = document.querySelector(".slider__button--next");
    const buttonPrevious = document.querySelector(".slider__button--previous");
    const slide = document.querySelectorAll(".slide__image");

    let arrSlide = [];
    let i = 0;
    let index = 100;

    slide.forEach(image => {
        arrSlide.push(image);
    });

    const showNextSlide = () => {
        i++;
        if(i === 3) {
            i = 0;
        };

        index++;
        arrSlide[i].style.zIndex = index;
    };

    const showPreviousSlide = () => {
        i--;
        if(i === -1) {
            i = 2;
        };

        index++;
        arrSlide[i].style.zIndex = index;
    }

    buttonNext.addEventListener("click", showNextSlide);
    buttonPrevious.addEventListener("click", showPreviousSlide);
}

