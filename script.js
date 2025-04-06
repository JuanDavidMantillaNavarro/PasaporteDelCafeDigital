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