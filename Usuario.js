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

//Validacion
window.onload = function () {
    document.getElementById('login').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(this); // Create a FormData object from the form
        let dataObject = Object.fromEntries(formData.entries());
        ajaxRequest("https://pasaportedigitaldelcafe.free.nf/Backend/validar.php","POST",dataObject,
            function (response) {
                const res = JSON.parse(response);
                if (res.status === "ok") {
                    alert("Inicio de sesión exitoso");
                    // Redireccionar a la página de usuario, por ejemplo:
                    window.location.href = "index.html";
                    localStorage.setItem("SesiónIniciada", "true");
                } else {
                    alert("Correo o contraseña incorrectos");
                }
            })
    });
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