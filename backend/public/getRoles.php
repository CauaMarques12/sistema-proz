<?php

require '../vendor/autoload.php';
require 'auth.php';


use app\database\Connection;

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');

$pdo = Connection::connect();

$prepare = $pdo->prepare('SELECT setor, COUNT(*) as quantidadeUsuarios FROM clientes WHERE setor IS NOT NULL AND setor != :block GROUP BY setor');
$prepare->execute([
    'block' => 'block'
]);

$userFound = $prepare->fetchAll();

echo json_encode($userFound, JSON_PRETTY_PRINT);

exit();