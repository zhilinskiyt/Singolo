function onLoad() {
    console.log('Loaded');
    initSlider();
}

function initSlider () {
    const activeClass = 'active';
    const phoneSlider = document.getElementById("phone-slider");
    const slides = document.querySelectorAll("#phone-slider .slide");
    const slideCounter = slides.length;
    let activeElement = 0;
    console.log(slideCounter);



    const red = document.querySelector(".red");
    const blue = document.querySelector(".blue");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");


    arrowLeft.addEventListener("click", () => {
        if (activeElement === 0) {
            activeElement = slideCounter -1;
        } else {
            activeElement = activeElement - 1;
        }
        console.log(activeElement)

        updateClass(activeElement);
    });

    arrowRight.addEventListener("click", () => {
        if (activeElement === slideCounter -1) {
            activeElement = 0;
        } else {
            activeElement = activeElement + 1;
        }
        console.log(activeElement)

        updateClass(activeElement);
    });


    function updateClass(active) {
        slides.forEach((element) => element.classList.remove(activeClass));
        slides[activeElement].className += " " + activeClass;
    }
}
document.addEventListener("DOMContentLoaded", onLoad);




//   const red = document.querySelector(".red");
//   const blue = document.querySelector(".blue");
//   const arrowLeft = document.querySelector(".arrow-left");
//   const arrowRight = document.querySelector(".arrow-right");

//   arrowLeft.addEventListener("click", () => {
//     red.classList.add("red-hide");
//     blue.classList.add("blue-open");
//   });
