<?php

require '../vendor/autoload.php';
require 'auth.php';

use app\database\Connection;

header("Access-Control-Allow-Origin: *");


$pdo = Connection::connect();

$prepare = $pdo->prepare('select nome, email, profissao, genero from clientes');
$prepare->execute();

$userFound = $prepare->fetchAll();

echo json_encode($userFound, JSON_PRETTY_PRINT);