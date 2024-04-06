<?php

require '../vendor/autoload.php';
require 'auth.php';


use app\database\Connection;

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');

$gender = $_SERVER['HTTP_GENDER'];

$pdo = Connection::connect();

$prepare = $pdo->prepare('select COUNT(*) as genero FROM clientes where genero = :gender');
$prepare->execute([
    'gender' => $gender
]);

$userFound = $prepare->fetchAll();

echo json_encode($userFound, JSON_PRETTY_PRINT);

exit();