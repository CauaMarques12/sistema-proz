<?php

require '../vendor/autoload.php';
require 'auth.php';

use app\database\Connection;

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');

if (!$decoded->admin){
    http_response_code(401);
    die("Acesso não autorizado!");
}

$newRole = $_SERVER['HTTP_NEWROLE'];
$email = $_SERVER['HTTP_EMAIL'];

$pdo = Connection::connect();

$prepare = $pdo->prepare('update clientes set setor = :newRole where email = :email');
$prepare->execute(
    [
        'newRole' => $newRole,
        'email' => $email,
    ]
);

$prepare->fetchAll();

$prepare = $pdo->prepare('select nome, email, setor, genero from clientes where email = :email');
$prepare->execute(
    [
        'email' => $email,
    ]
);

$userFound = $prepare->fetchAll();


echo json_encode($userFound, JSON_PRETTY_PRINT);

exit();