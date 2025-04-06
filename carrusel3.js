const container = document.getElementById('container_carrusel3');
const slider = document.getElementById('slider3');
const images = slider.querySelectorAll('img');
const buttons = document.getElementsByClassName('btn_carrusel3');

let currentPosition = 0;
let slidesPerPage = 4;

window.addEventListener("resize", setParams);
setParams3();

function setParams3() {
    const width = window.innerWidth;

    if (width <= 550) {
        slidesPerPage = 1;
    } else if (width <= 900) {
        slidesPerPage = 2;
    } else if (width <= 1100) {
        slidesPerPage = 3;
    } else {
        slidesPerPage = 4;
    }

    updateSlider3();
}

function sliderRight3() {
    const maxPosition = images.length - slidesPerPage;
    if (currentPosition < maxPosition) {
        currentPosition++;
        updateSlider3();
    }
}

function sliderLeft3() {
    if (currentPosition > 0) {
        currentPosition--;
        updateSlider3();
    }
}

function updateSlider3() {
    const imageWidth = images[0].offsetWidth + 10; // incluye el gap
    slider.style.transform = `translateX(-${currentPosition * imageWidth}px)`;

    buttons[0].classList.toggle('inactive', currentPosition === 0);
    buttons[1].classList.toggle('inactive', currentPosition >= images.length - slidesPerPage);
}


