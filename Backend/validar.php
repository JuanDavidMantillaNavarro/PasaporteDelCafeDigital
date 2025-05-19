<?php
/*error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();
*/
header("Access-Control-Allow-Origin: https://juandavidmantillanavarro.github.io");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

error_reporting(E_ALL);
ini_set('display_errors', 1);

$jsonData = file_get_contents('php://input');
$decodedData = json_decode($jsonData, true);

$correo = $decodedData['Usuario']; // <- OJO: nombre del input
$contrasena = $decodedData['Contrasena'];

$mysqli = new mysqli("sql106.infinityfree.com", "if0_38853897", "JuanDianaAna", "if0_38853897_registro");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

$sql = "SELECT * FROM login WHERE Correo = ? AND Contrasena = ?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("ss", $correo, $contrasena);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    echo json_encode(["status" => "ok", "message" => "Inicio de sesión exitoso"]);
} else {
    echo json_encode(["status" => "fail", "message" => "Correo o contraseña incorrectos"]);
}

$stmt->close();
$mysqli->close();

?><?php
