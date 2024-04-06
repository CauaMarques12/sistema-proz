<?php

require '../vendor/autoload.php';
require 'auth.php';


use app\database\Connection;

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');

$newpassword = $_SERVER['HTTP_NEWPASSWORD'];

$pdo = Connection::connect();

$prepare = $pdo->prepare('update clientes set senha = :newPassword where email = :email');
$prepare->execute(
    [
        'email' => $decoded->email,
        'newPassword' => password_hash($newpassword, PASSWORD_DEFAULT)
    ]
);

$prepare->fetchAll();

exit();