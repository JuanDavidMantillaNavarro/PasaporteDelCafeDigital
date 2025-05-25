<?php
session_start();
$usuario_id = $_SESSION["id"]; 

$conexion = new mysqli("sql106.infinityfree.com", "if0_38853897", "JuanDianaAna", "if0_38853897_registro");

$query = "SELECT id_cafeteria, puntuacion FROM puntuacion WHERE id_login = ?";
$stmt = $conexion->prepare($query);
$stmt->bind_param("i", $usuario_id);
$stmt->execute();
$resultado = $stmt->get_result();

$sellos = [];
while ($fila = $resultado->fetch_assoc()) {
    $sellos[] = [
        "id_cafeteria" => $fila['id_cafeteria'],
        "puntuacion" => (int)$fila['puntuacion']
    ];
}

echo json_encode($sellos);
?>
