<?php

require '../vendor/autoload.php';

use app\database\Connection;
use Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");

$dotenv = Dotenv\Dotenv::createImmutable(dirname(__FILE__, 2));
$dotenv->load();

$email = htmlspecialchars($_POST['email']);
$password = htmlspecialchars($_POST['password']);

$pdo = Connection::connect();

$prepare = $pdo->prepare('select * from clientes where email = :email');
$prepare->execute([
    'email' => $email,
]);

$userFound = $prepare->fetch();

if (!$userFound) {
    http_response_code(404);
    echo "Usuário não encontrado";
    return;
}

if ($password !== $userFound->senha) {
    http_response_code(401);
    echo "Senha incorreta";
    return;
}

$payload = [
    "exp" => time() + 1000,
    "iat" => time(),
    "email" => $email
];

$encode = JWT::encode($payload, $_ENV['KEY'], "HS256");

echo json_encode($encode);