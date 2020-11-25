<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "recodepro";

// $tabela = $_GET['table'];

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM orders";
$result = $conn->query($sql);

print_r(json_encode($result->fetch_all(MYSQLI_ASSOC)));

mysqli_close($conn);