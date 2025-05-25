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

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

error_reporting(E_ALL);
ini_set('display_errors', 1);

$jsonData = file_get_contents('php://input');
$decodedData = json_decode($jsonData, true);

$id_login = $_SESSION["id"]; // <- OJO: nombre del input
$cafeteria = $decodedData['id_cafeteria'];
$codigo = $decodedData['codigo'];
$puntuacion = $decodedData['puntuacion'];
$bandera = $decodedData['bandera'];

$mysqli = new mysqli("sql106.infinityfree.com", "if0_38853897", "JuanDianaAna", "if0_38853897_registro");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

if($bandera == 'codigo'){
    $sql = "SELECT * FROM codigos_aleatorios c LEFT JOIN puntuacion p ON c.codigo = p.codigo WHERE c.codigo = ? AND p.codigo IS NULL";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s", $codigo);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {

        echo json_encode(["status" => "ok", "message" => "Código valido"]);
    } else {
        echo json_encode(["status" => "fail", "message" => "Valide el código"]);
    }

}else{
    
    $sql = "INSERT INTO `puntuacion` (`id_cafeteria`, `codigo`, `puntuacion`, `id_login`) VALUES (?, ?, ?, ?);";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("ssss", $cafeteria, $codigo,$puntuacion,$id_login);
    if (!$stmt->execute()) {
        echo json_encode(["status" => "fail", "message" => "Valide el código"]);
        }
        echo json_encode(["status" => "ok", "message" => "Registro exitoso"]);
}
$stmt->close();
$mysqli->close();