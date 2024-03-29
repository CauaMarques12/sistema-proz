<?php

require '../vendor/autoload.php';

use app\database\Connection;

header("Access-Control-Allow-Origin: *");

$email = htmlspecialchars($_POST['email']);
$password = htmlspecialchars($_POST['password']);
$age = htmlspecialchars($_POST['age']);
$cellphone = htmlspecialchars($_POST['cell']);
$gender = htmlspecialchars($_POST['gender']);
$name = htmlspecialchars($_POST['name']);

$pdo = Connection::connect();

try {
   $prepare = $pdo->prepare('insert into clientes (nome, idade, senha, email, telefone, genero) values (?,?,?,?,?,?)');
   $prepare->execute([
      $name,
      $age,
      $password,
      $email,
      $cellphone,
      $gender
   ]);
} catch (PDOException $PDOException) {
   http_response_code(401);
   echo $PDOException->getCode() == 23000 ? "Usuário já existe" : $PDOException->getMessage();
}