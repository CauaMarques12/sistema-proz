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

if (strlen($name) > 50) {
   http_response_code(402);

   $data = [
      "input" => 'name',
      "error" => "Nome pode conter até 50 caracteres.",
   ];

   echo json_encode($data);
   exit();
}

if (strlen($password) > 18) {
   http_response_code(402);
   $data = [
      "input" => 'password',
      "error" => "A senha deve conter entre 8 a 18 caracteres.",
   ];

   echo json_encode($data);
   exit();
}

if (strlen($cellphone) != 11) {
   http_response_code(402);
   $data = [
      "input" => 'phone',
      "error" => "Formato de telefone inválido, deve conter 11 caracteres.",
   ];

   echo json_encode($data);
   exit();
}

$pdo = Connection::connect();

try {
   $prepare = $pdo->prepare('insert into clientes (nome, idade, senha, email, telefone, genero) values (?,?,?,?,?,?)');
   $prepare->execute([
      $name,
      $age,
      password_hash($password, PASSWORD_DEFAULT),
      $email,
      $cellphone,
      $gender
   ]);
} catch (PDOException $PDOException) {
   http_response_code(401);
   echo $PDOException->getCode() == 23000 ? "Usuário já existe" : $PDOException->getMessage();
}