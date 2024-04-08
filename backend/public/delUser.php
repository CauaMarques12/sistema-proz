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

$email = $_GET['email'];

if($email == $decoded->email){
    http_response_code(401);
    die("Você não pode deletar o seu perfil.");
}

$pdo = Connection::connect();

$prepare = $pdo->prepare('delete from clientes WHERE email = :email');
$prepare->execute([
    'email' => $email
]);

$prepare->fetchAll();

require 'getUsers.php';

exit();