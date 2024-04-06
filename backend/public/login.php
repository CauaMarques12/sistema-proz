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
    die("Usuário não encontrado");
}

if (!password_verify($password, $userFound->senha)) {
    http_response_code(401);

    $data = [
        "input" => 'password',
        "error" => "Senha incorreta.",
    ];
    echo json_encode($data);

    exit();
}

$payload = [
    "exp" => time() + 1000 * 60 * 60 * 24,
    "iat" => time(),
    "email" => $email,
    "admin" => ($userFound->setor == "admin") ? true : false,
];


$encode = JWT::encode($payload, $_ENV['KEY'], "HS256");

echo json_encode($encode);