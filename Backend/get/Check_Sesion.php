<?php

header("Access-Control-Allow-Origin: https://pasaportedigitaldelcafe.free.nf");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'domain' => 'pasaportedigitaldelcafe.free.nf',
    'secure' => true,  // Importante si usas HTTPS
    'httponly' => true,
    'samesite' => 'None'
]);

session_start();

if (isset($_SESSION['autenticado']) && $_SESSION['autenticado'] === true) {
    echo json_encode(["sesion" => true, "correo" => $_SESSION['correo']]);
} else {
    echo json_encode(["sesion" => false]);
}

?>
