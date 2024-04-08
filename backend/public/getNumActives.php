<?php

require '../vendor/autoload.php';
require 'auth.php';


use app\database\Connection;

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');


$pdo = Connection::connect();

$prepare = $pdo->prepare('select COUNT(*) AS total FROM clientes WHERE setor is not null AND setor != "block"');
$prepare->execute();

$userFound = $prepare->fetchAll();

echo json_encode($userFound, JSON_PRETTY_PRINT);

exit();