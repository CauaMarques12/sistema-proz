<?php

require '../vendor/autoload.php';

use app\database\Connection;

header("Access-Control-Allow-Origin: *");


$pdo = Connection::connect();

$prepare = $pdo->prepare('select * from clientes');
$prepare->execute();

$userFound = $prepare->fetchAll();