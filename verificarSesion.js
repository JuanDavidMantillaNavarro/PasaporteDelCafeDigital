function verificarSesion(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pasaportedigitaldelcafe.free.nf/Backend/get/Check_Sesion.php", true);
    xhr.withCredentials = true;  // para enviar cookies
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            callback(response);
        }
    };
    xhr.send();
}
