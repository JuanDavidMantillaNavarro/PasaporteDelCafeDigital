document.addEventListener("DOMContentLoaded", function () {


    function validarCodigo(event) {
        const contenedor = event.target.closest(".contenedor-codigo");
        const carrusel = contenedor.closest(".carrusel-item");
        const codigoCorrecto = carrusel.getAttribute("data-codigo");
        const codigoIngresado = contenedor.querySelector("input").value.trim();
        const sello = carrusel.querySelector(".sello");
        const estrellas = carrusel.querySelector(".contenedor-estrellas");

        console.log("Estrellas:", estrellas); // 🔍 Verifica si existe

        if (codigoIngresado === codigoCorrecto) {
            sello.style.display = "block";
            contenedor.style.display = "none";

            if (estrellas) {
                estrellas.style.display = "flex"; // 👈 Usa flex si aplica
            } else {
                console.warn("No se encontró el contenedor de estrellas.");
            }
        } else {
            alert("Código incorrecto. Intenta de nuevo.");
        }
    }

    // Asigna el evento a todos los botones de validación
    document.querySelectorAll(".icono-boton").forEach(function (boton) {
        boton.addEventListener("click", validarCodigo);
    });

    document.querySelectorAll(".estrellas-container").forEach(container => {
        const estrellas = container.querySelectorAll(".estrella");

        estrellas.forEach((estrella, i) => {
            estrella.addEventListener("click", () => {
                estrellas.forEach((e, j) => {
                    e.classList.toggle("seleccionada", j <= i); // ⭐ AQUÍ SE LLENAN
                });

                const calificacion = i + 1;
                console.log("Calificación seleccionada:", calificacion);

                const carrusel = container.closest(".carrusel-item");
                carrusel.setAttribute("data-calificacion", calificacion);
            });
        });
    });
});



const contenedorGeneral = document.getElementById("contenedorgeneral");
const items = document.querySelectorAll(".carrusel-item");
const flechaIzquierda = document.getElementById("flechaIzquierda");
const flechaDerecha = document.getElementById("flechaDerecha");

let index = 0; // Índice del elemento visible
const totalItems = items.length; // Número total de elementos

function actualizarCarrusel() {
    const desplazamiento = -index * items[0].offsetWidth;
    contenedorGeneral.style.transform = `translateX(${desplazamiento}px)`;
}

flechaDerecha.addEventListener("click", function (e) {
    e.preventDefault();
    if (index < totalItems - 1) {
        index++;
    } else {
        index = 0; // Reiniciar al primer elemento si llega al final
    }
    actualizarCarrusel();
});

flechaIzquierda.addEventListener("click", function (e) {
    e.preventDefault();
    if (index > 0) {
        index--;
    } else {
        index = totalItems - 1; // Volver al último elemento si está en el primero
    }
    actualizarCarrusel();
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








