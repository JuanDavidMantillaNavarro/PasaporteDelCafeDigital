var container = document.getElementById('container_carrusel2');
var slider = document.getElementById('slider2');
var slides = slider.getElementsByTagName('img').length; 
var buttons = document.getElementsByClassName('btn_carrusel');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var moveStep = 1;

window.addEventListener("resize", checkWidth);
setParams(containerWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else if (w < 901) {
        slidesPerPage = 2;
    } else if (w < 1101) {
        slidesPerPage = 3;
    } else {
        slidesPerPage = 4;
    }

    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition = slidesCount;
    }

    currentMargin = -currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';

    updateButtons();
}

function sliderRight() {
    if (currentPosition < slidesCount) {
        currentPosition++;
    } else {
        currentPosition = slidesCount;
    }
    
    currentMargin = -currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    updateButtons();
}

function sliderLeft() {
    if (currentPosition > 0) {
        currentPosition--;
    } else {
        currentPosition = 0;
    }
    
    currentMargin = -currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    updateButtons();
}

function updateButtons() {
    buttons[0].classList.toggle('inactive', currentPosition === 0);
    buttons[1].classList.toggle('inactive', currentPosition >= slidesCount);
}

var btn_carruselLeft = buttons[0];
var btn_carruselRight = buttons[1];
var alternateImages = {
    "cafe1": "carrusel2/cafe2c.png",
    "cafe2": "carrusel2/cafe2c.png",
    "cafe3": "carrusel2/cafe3c.png",
    "cafe4": "carrusel2/cafe4c.png",
    "cafe5": "carrusel2/cafe5c.png",
    "cafe6": "carrusel2/cafe6c.png",
    "cafe7": "carrusel2/cafe7c.png",
    "cafe8": "carrusel2/cafe8c.png",
    "cafe9": "carrusel2/cafe9c.png",
    "cafe10": "carrusel2/cafe10c.png",
    "cafe11": "carrusel2/cafe11c.png",
    "cafe12": "carrusel2/cafe12c.png",
    "cafe13": "carrusel2/cafe13c.png"
};

var images = document.querySelectorAll("#slider2 img");

images.forEach(img => {
    var originalSrc = img.src;
    var hoverSrc = alternateImages[img.id]; 

    if (hoverSrc) {
        img.addEventListener("mouseover", function() {
            img.src = hoverSrc; 
        });

        img.addEventListener("mouseout", function() {
            img.src = originalSrc; 
        });
    }
});


//MENÚ HAMBURGUESA
var menu = document.getElementById('hamburguesa');

// method
function toggleMenu(event) {
    //this.classList.toggle('is-active');
    document.querySelector(".menu").classList.toggle("is_active");
    event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);
