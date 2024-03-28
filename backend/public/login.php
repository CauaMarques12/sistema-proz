<?php

require '../vendor/autoload.php';

use app\database\Connection;
use Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");

$dotenv = Dotenv\Dotenv::createImmutable(dirname(__File__, 2));
$dotenv->load();

$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);

$pdo = Connection::connect();

$prepare = $pdo->prepare('select * from clientes where email = :email');
$prepare->execute([
   'email' => $email,
]);

$userFound = $prepare -> fetch();

if(!$userFound){
    http_response_code(401);
}

if($password !== $userFound->senha){
    http_response_code(401);
}

$payload = [
    "exp" => time() + 1000,
    "iat" => time(),
    "email" => $email  
];

$encode = JWT::encode($payload, $_ENV['KEY'], "HS256");

echo json_encode($encode);