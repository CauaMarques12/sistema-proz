<?php

require '../vendor/autoload.php';

use app\database\Connection;

header("Access-Control-Allow-Origin: *");

$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
$age = filter_input(INPUT_POST, 'age', FILTER_SANITIZE_STRING);
$cellphone = filter_input(INPUT_POST, 'cell', FILTER_SANITIZE_STRING);
$gender = filter_input(INPUT_POST, 'gender', FILTER_SANITIZE_STRING);
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);

$pdo = Connection::connect();

try{
   $prepare = $pdo->prepare('insert into clientes (nome, idade, senha, email, telefone, genero) values (?,?,?,?,?,?)');
   $prepare->execute([
      $name, $age, $password, $email, $cellphone, $gender
   ]);
}catch(PDOException){
   http_response_code(401);
}


