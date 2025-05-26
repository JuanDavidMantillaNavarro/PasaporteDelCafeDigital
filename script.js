const container = document.getElementById('container_carrusel2');
const slider = document.getElementById('slider2');
const images = slider.querySelectorAll('img');
const buttons = document.getElementsByClassName('btn_carrusel');

let currentPosition = 0;
let slidesPerPage = 4;

window.addEventListener("resize", setParams);
setParams();

let SIniciada = false;



function setParams() {
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

    updateSlider();
}

function sliderRight() {
    const maxPosition = images.length - slidesPerPage;
    if (currentPosition < maxPosition) {
        currentPosition++;
        updateSlider();
    }
}

function sliderLeft() {
    if (currentPosition > 0) {
        currentPosition--;
        updateSlider();
    }
}

function updateSlider() {
    const imageWidth = images[0].offsetWidth + 20; // incluye el gap
    slider.style.transform = `translateX(-${currentPosition * imageWidth}px)`;

    buttons[0].classList.toggle('inactive', currentPosition === 0);
    buttons[1].classList.toggle('inactive', currentPosition >= images.length - slidesPerPage);
}

// Hover para cambiar imagen
const alternateImages = {
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

images.forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = alternateImages[img.id];

    if (hoverSrc) {
        img.addEventListener("mouseover", () => img.src = hoverSrc);
        img.addEventListener("mouseout", () => img.src = originalSrc);
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


// JAVA DE COFFE STYLERS
const coffeStylersInfo = document.querySelector("#coffeStylersInfo");
const botoncoffestylers= document.querySelector("#botoncoffestylers");
const cerrar= document.querySelector("#cerrar");

botoncoffestylers.addEventListener("click", () => {
    coffeStylersInfo.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{

    coffeStylersInfo.classList.remove("visible");
})


// JAVA DE CAFÉ GONZALEZ
const cafegonzalezInfo = document.querySelector("#cafegonzalezInfo");
const botoncafegonzalez= document.querySelector("#botoncafegonzalez");
const cerrardos= document.querySelector("#cerrardos");

botoncafegonzalez.addEventListener("click", () => {
    cafegonzalezInfo.classList.add("visible");
})

cerrardos.addEventListener("click", ()=>{

    cafegonzalezInfo.classList.remove("visible");
})



// JAVA DE CRANEO SACRAL
const craneosacralInfo = document.querySelector("#craneosacralInfo");
const botoncraneosacral= document.querySelector("#botoncraneosacral");
const cerrartres= document.querySelector("#cerrartres");

botoncraneosacral.addEventListener("click", () => {
    craneosacralInfo.classList.add("visible");
})

cerrartres.addEventListener("click", ()=>{

    craneosacralInfo.classList.remove("visible");
})


// JAVA DE LOS AMANTES DEL CAFE
const losamantesdelcafeInfo = document.querySelector("#losamantesdelcafeInfo");
const botonamantesdelcafe= document.querySelector("#botonamantesdelcafe");
const cerrarcuatro= document.querySelector("#cerrarcuatro");

botonamantesdelcafe.addEventListener("click", () => {
    losamantesdelcafeInfo.classList.add("visible");
})

cerrarcuatro.addEventListener("click", ()=>{

    losamantesdelcafeInfo.classList.remove("visible");
})


// JAVA DE CAFÉ DEL MERCADO
const cafedelmercadoInfo = document.querySelector("#cafedelmercadoInfo");
const botoncafedelmercado= document.querySelector("#botoncafedelmercado");
const cerrarcinco= document.querySelector("#cerrarcinco");

botoncafedelmercado.addEventListener("click", () => {
    cafedelmercadoInfo.classList.add("visible");
})

cerrarcinco.addEventListener("click", ()=>{

    cafedelmercadoInfo.classList.remove("visible");
})


// JAVA DE NIEBLA
const nieblaInfo = document.querySelector("#nieblaInfo");
const botonniebla= document.querySelector("#botonniebla");
const cerrarseis= document.querySelector("#cerrarseis");

botonniebla.addEventListener("click", () => {
    nieblaInfo.classList.add("visible");
})

cerrarseis.addEventListener("click", ()=>{

    nieblaInfo.classList.remove("visible");
})


// JAVA LA TINTERIA
const tinteriaInfo = document.querySelector("#tinteriaInfo");
const botontinteria= document.querySelector("#botontinteria");
const cerrarsiete= document.querySelector("#cerrarsiete");

botontinteria.addEventListener("click", () => {
    tinteriaInfo.classList.add("visible");
})

cerrarsiete.addEventListener("click", ()=>{

    tinteriaInfo.classList.remove("visible");
})




// JAVA LA ENAMORADOS
const enamoradosInfo = document.querySelector("#enamoradosInfo");
const botonenamorados= document.querySelector("#botonenamorados");
const cerrarocho= document.querySelector("#cerrarocho");

botonenamorados.addEventListener("click", () => {
    enamoradosInfo.classList.add("visible");
})

cerrarocho.addEventListener("click", ()=>{

    enamoradosInfo.classList.remove("visible");
})


// JAVA LA AGUITA NEGRA
const aguitanegraInfo = document.querySelector("#aguitanegraInfo");
const botonaguitanegra= document.querySelector("#botonaguitanegra");
const cerrarnueve= document.querySelector("#cerrarnueve");

botonaguitanegra.addEventListener("click", () => {
    aguitanegraInfo.classList.add("visible");
})

cerrarnueve.addEventListener("click", ()=>{

    aguitanegraInfo.classList.remove("visible");
})



// JAVA CAFÉ JAGUAR
const jaguarInfo = document.querySelector("#jaguarInfo");
const botonjaguar= document.querySelector("#botonjaguar");
const cerrardiez= document.querySelector("#cerrardiez");

botonjaguar.addEventListener("click", () => {
    jaguarInfo.classList.add("visible");
})

cerrardiez.addEventListener("click", ()=>{

    jaguarInfo.classList.remove("visible");
})


// JAVA RACER
const racerInfo = document.querySelector("#racerInfo");
const botonracer= document.querySelector("#botonracer");
const cerraronce= document.querySelector("#cerraronce");

botonracer.addEventListener("click", () => {
    racerInfo.classList.add("visible");
})

cerraronce.addEventListener("click", ()=>{

    racerInfo.classList.remove("visible");
})


// JAVA QUIPILE
const quipileInfo = document.querySelector("#quipileInfo");
const botonquipile= document.querySelector("#botonquipile");
const cerrardoce= document.querySelector("#cerrardoce");

botonquipile.addEventListener("click", () => {
    quipileInfo.classList.add("visible");
})

cerrardoce.addEventListener("click", ()=>{

    quipileInfo.classList.remove("visible");
})


// JAVA VRONX 60
const vronxInfo = document.querySelector("#vronxInfo");
const botonvronx= document.querySelector("#botonvronx");
const cerrartrece= document.querySelector("#cerrartrece");

botonvronx.addEventListener("click", () => {
    vronxInfo.classList.add("visible");
})

cerrartrece.addEventListener("click", ()=>{

    vronxInfo.classList.remove("visible");
})

//SLIDER DESCUENTOS

const container2 = document.getElementById('container_carrusel3');
const slider2 = document.getElementById('slider3');
const images2 = slider2.querySelectorAll('img');
const buttons2 = document.getElementsByClassName('btn_carrusel3');

let currentPosition2 = 0;
let slidesPerPage2 = 4;

window.addEventListener("resize", setParams);
setParams3();

function setParams3() {
    const width = window.innerWidth;

    if (width <= 550) {
        slidesPerPage2 = 1;
    } else if (width <= 900) {
        slidesPerPage2 = 2;
    } else if (width <= 1100) {
        slidesPerPage2 = 3;
    } else {
        slidesPerPage2 = 4;
    }

    updateSlider3();
}

function sliderRight3() {
    const maxPosition = images2.length - slidesPerPage2;
    if (currentPosition2 < maxPosition) {
        currentPosition2++;
        updateSlider3();
    }
}

function sliderLeft3() {
    if (currentPosition2 > 0) {
        currentPosition2--;
        updateSlider3();
    }
}

function updateSlider3() {
    const imageWidth = images2[0].offsetWidth + 150; // incluye el gap 150
    slider2.style.transform = `translateX(-${currentPosition2 * imageWidth}px)`;

    buttons2[0].classList.toggle('inactive', currentPosition2 === 0);
    buttons2[1].classList.toggle('inactive', currentPosition2 >= images2.length - slidesPerPage2);
}


window.onload = function () {
    verificarSesion(function (res) {
        if (res.sesion === true) {
         SIniciada = true;
        }

    // Hover para cambiar imagen de promo a qr
    const alternateImages2 = {
    "Promo1": "Imagenes/PROMOS/qr coffe stylers .png",
    "Promo2": "Imagenes/PROMOS/qr coffe stylers .png",
    "Promo3": "Imagenes/PROMOS/qr coffe stylers .png",
    "Promo4": "Imagenes/PROMOS/qr coffe stylers .png",
    "Promo5": "Imagenes/PROMOS/qr coffe stylers .png",
    "Promo6": "Imagenes/PROMOS/qr coffe stylers .png",
    "Promo7": "Imagenes/PROMOS/qr coffe stylers .png"
    };

    const alternateImagesNlog = {
    "Promo1": "Imagenes/PROMOS/Aviso.png",
    "Promo2": "Imagenes/PROMOS/Aviso.png",
    "Promo3": "Imagenes/PROMOS/Aviso.png",
    "Promo4": "Imagenes/PROMOS/Aviso.png",
    "Promo5": "Imagenes/PROMOS/Aviso.png",
    "Promo6": "Imagenes/PROMOS/Aviso.png",
    "Promo7": "Imagenes/PROMOS/Aviso.png"
    };

    images2.forEach(img => {
    const originalSrc2 = img.src;
    const hoverSrc2 = alternateImages2[img.id];
    const hoverSrcnoLog = alternateImagesNlog[img.id];
    if(SIniciada==true)
    {
        if (hoverSrc2) {
        img.addEventListener("mouseover", () => img.src = hoverSrc2);
        img.addEventListener("mouseout", () => img.src = originalSrc2);
        }
    }else{
        if (hoverSrcnoLog) {
        img.addEventListener("mouseover", () => img.src = hoverSrcnoLog);
        img.addEventListener("mouseout", () => img.src = originalSrc2);
        }
    }
    });


});
};

//COOKIES

document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");
  
    // Si ya hay un dato no mostrar las cookies
    if (localStorage.getItem("cookieConsent")) {
      cookieBanner.style.display = "none";
    }
    
    //Guardar dato local
    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "accepted");
      cookieBanner.style.display = "none";
    });
  
    rejectBtn.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "rejected");
      cookieBanner.style.display = "none";
    });
  });