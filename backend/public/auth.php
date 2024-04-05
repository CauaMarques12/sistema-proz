<?php
require '../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');

$dotenv = Dotenv\Dotenv::createImmutable(dirname(__File__, 2));
$dotenv -> load();

$authorization = $_SERVER["HTTP_AUTHORIZATION"];

$token = str_replace('Bearer ', '', $authorization);

try {
    $decoded = JWT::decode($token, new Key($_ENV['KEY'], 'HS256'));
} 
catch (Throwable $e) {
    if ($e->getMessage() === 'Expired token') {
        http_response_code(401);
        die($e->getMessage());
    }     
        die("Token inválido");

}

