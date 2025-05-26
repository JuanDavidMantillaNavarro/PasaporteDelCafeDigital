<?php
header("Access-Control-Allow-Origin: https://pasaportedigitaldelcafe.free.nf");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'domain' => 'pasaportedigitaldelcafe.free.nf',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'None'
]);

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if (!isset($_SESSION['autenticado']) || $_SESSION['autenticado'] !== true) {
    // No está autenticado
    echo json_encode(["sesion" => false]);
    exit();
}

// Ya está autenticado, conectamos a la base para traer datos adicionales
$correo = $_SESSION['correo'];

$mysqli = new mysqli("sql106.infinityfree.com", "if0_38853897", "JuanDianaAna", "if0_38853897_registro");
if ($mysqli->connect_error) {
    http_response_code(500);
    echo json_encode(["sesion" => true, "error" => "Error en conexión a la base de datos"]);
    exit();
}

$sql = "SELECT Nombre, Apellido, AnioInicioEspecialidad, Nacionalidad, FotoPerfil FROM login WHERE Correo = ?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $correo);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    echo json_encode([
        "sesion" => true,
        "nombre" => $row['Nombre'],
        "apellido" => $row['Apellido'],
        "anio" => $row['AnioInicioEspecialidad'],  // Ajusta si tu campo tiene otro nombre
        "nacionalidad" => $row['Nacionalidad'],
        "foto" => $row['FotoPerfil']  // URL o path accesible a la imagen
    ]);
} else {
    // Usuario no encontrado, aunque debería existir porque está en sesión
    echo json_encode(["sesion" => false]);
}

$stmt->close();
$mysqli->close();
?>
