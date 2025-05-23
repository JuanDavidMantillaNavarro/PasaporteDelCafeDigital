<?php

// Permitir solicitudes CORS
    header("Access-Control-Allow-Origin: https://juandavidmantillanavarro.github.io");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

// Manejar solicitud OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Permitir solicitudes CORS
    header("Access-Control-Allow-Origin: https://juandavidmantillanavarro.github.io");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    http_response_code(200);
    exit();
}

//Mostrar errores
error_reporting(E_ALL);
ini_set('display_errors', 1);


 // Get POST data from raw input stream
 $jsonData = file_get_contents('php://input');

 // Decode JSON data
$decodedData = json_decode($jsonData, true);



 //$encodedData = json_encode($decodedData, true);

 //echo  $encodedData;
            
 //$mysqli = new mysqli("localhost", "root", "", "mula"); // datos del servidor local
 $mysqli = new mysqli("sql106.infinityfree.com", "if0_38853897", "JuanDianaAna", "if0_38853897_registro");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
    
} else {
    
}

$nombre = $decodedData['nombre'];
$apellido = $decodedData['apellido'];
$correo = $decodedData['correo'];
$contrasena = $decodedData['contrasena'];

$sql = "INSERT INTO `login` (`id`, `Nombre`, `Apellido`, `Correo`, `Contrasena`) VALUES (NULL, '". $nombre ."', '". $apellido ."', '". $correo ."', '". $contrasena ."')";

if ($mysqli->query($sql) === TRUE) {
    echo json_encode(["status" => "ok", "message" => "Registro exitoso"]); 
} else {
    echo json_encode(["status" => "fail", "message" => "Registro erroneo"]);
}


$mysqli->close();

 

 //echo  $decodedData;
    
?><?php
 