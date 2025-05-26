document.addEventListener("DOMContentLoaded", function () {
    const codigos = document.querySelectorAll(".contenedor-codigo");
    const estrellass = document.querySelectorAll(".contenedor-estrellas");
    const sesionIniciada = localStorage.getItem("SesiónIniciada");




    if (sesionIniciada === "true") {
        // Mostrar contenedores
        codigos.forEach(elem => elem.style.display = "block");
    } else {
        // Ocultar contenedores
        codigos.forEach(elem => elem.style.display = "none");
        estrellass.forEach(elem => elem.style.display = "none");
    }



function processing(event){
     event.preventDefault(); // Prevent the default form submission

            const contenedor = event.target.closest(".contenedor-codigo");
            const carrusel = contenedor.closest(".carrusel-item");
            const estrellas = carrusel.querySelector(".contenedor-estrellas");
            const sello = carrusel.querySelector(".sello");


            const formData = new FormData(this); // Create a FormData object from the form
            let dataObject = Object.fromEntries(formData.entries());
            ajaxRequest("https://pasaportedigitaldelcafe.free.nf/Backend/pasaporte.php", "POST", dataObject,
                function (response) {
                    const res = JSON.parse(response);
                    if (res.status === "ok") {
                        sello.style.display = "block";
                        contenedor.style.display = "none";

                        if (estrellas) {
                            estrellas.style.display = "flex"; // 👈 Usa flex si aplica
                        } else {
                            console.warn("No se encontró el contenedor de estrellas.");
                        }
                    } else {
                        alert("Código incorrecto");
                    }
                })
}

    window.onload = function () {
         document.getElementById("validacion-codigo1").addEventListener('submit',  processing);
         document.getElementById("validacion-codigo2").addEventListener('submit',  processing);
         document.getElementById("validacion-codigo3").addEventListener('submit',  processing);
         document.getElementById("validacion-codigo4").addEventListener('submit',  processing);
         document.getElementById("validacion-codigo5").addEventListener('submit',  processing);
         document.getElementById("validacion-codigo6").addEventListener('submit',  processing);
         document.getElementById("validacion-codigo7").addEventListener('submit',  processing);
         document.getElementById("validacion-codigo8").addEventListener('submit',  processing);
         document.getElementById("validacion-codigo9").addEventListener('submit',  processing);
         document.getElementById("validacion-codigo10").addEventListener('submit',  processing);
         document.getElementById("validacion-codigo11").addEventListener('submit',  processing);
         document.getElementById("validacion-codigo12").addEventListener('submit',  processing);
         document.getElementById("validacion-codigo13").addEventListener('submit',  processing);

    }

    function ajaxRequest(url, method, data, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);  // Open a POST request to your PHP endpoint

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        // cuando se complete
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                callback(xhr.responseText);
            }
        };

        // Send the form data with the file to the server
        xhr.send(JSON.stringify(data));  // Send the FormData object, which includes the file
    }

    // Asigna el evento a todos los botones de validación
    // document.querySelectorAll(".icono-boton").forEach(function (boton) {
    //     boton.addEventListener("click", validarCodigo);
    // });

    document.querySelectorAll(".estrellas-container").forEach(container => {
        const estrellas = container.querySelectorAll(".estrella");


        estrellas.forEach((estrella, i) => {
            estrella.addEventListener("click", () => {
                const id_cafeteria = container.getAttribute("cafeteria");
                const formulario = document.getElementById("validacion-codigo"+ id_cafeteria);
                console.log(id_cafeteria);
                estrellas.forEach((e, j) => {
                    e.classList.toggle("seleccionada", j <= i); //Las estrellas se llenan 
                });

                const calificacion = i + 1;
                const puntuacion = formulario.querySelector('input[name="puntuacion"]');
                const bandera = formulario.querySelector('input[name="bandera"]');
                bandera.value = "validacion";
                puntuacion.value = calificacion;
                console.log("Calificación seleccionada:", calificacion);

                const carrusel = container.closest(".carrusel-item");
                carrusel.setAttribute("data-calificacion", calificacion);
                formulario.requestSubmit();
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