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
        
        ajaxRequest("http://pasaportedigitaldelcafe.free.nf/registro.php", "POST", dataObject, function(response) {
            console.log("Server Response:", response);
        });
       
    });

    function ajaxRequest(url, method, data, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);

                //let response = JSON.parse(xhr.responseText);
                //console.log(response.correo);
                
                
                //callback(JSON.parse(xhr.responseText));
            }
        };
        xhr.send(JSON.stringify(data));
    }
};
