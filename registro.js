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

//DATOS REGISTRO

window.onload = function() {
    let form = document.getElementById("registro");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let inputData = new FormData(form);
        let dataObject = Object.fromEntries(inputData.entries());
        //console.log(dataObject);
        
        ajaxRequest("https://pasaportedigitaldelcafe.free.nf/Backend/registro.php", "POST", dataObject,
            function(response) {
            let res;
        try {
            res = JSON.parse(response);  
        } catch (error) {
            console.error("Respuesta no es JSON válido:", response);
            alert("Correo ya utilizado, porfavor intente con otro");
            return; // Salimos de la función para evitar errores
        }
            if (res.status === "ok") {
            alert("Registro exitoso");
            // Redireccionar a la página de usuario:
            window.location.href = "Usuario.html";
            console.log("Server Response:", response);
            }else{
            console.log("Server Response:", response);
            alert("Registro Invalido");
            }
        
        });
       
    });

    function ajaxRequest(url, method, data, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                /*console.log(xhr.responseText);*/
                callback(xhr.responseText);
            }
        };
        xhr.send(JSON.stringify(data));
    }
};
