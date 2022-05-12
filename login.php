<?php
session_start();
extract($_POST);

if($nome == "Administrador" && $senha == "123"){
  $_SESSION['usuario'] = [
    'nome' => $usuario,
    'senha' => $senha
  ];
  header("Location: restrito.php");
}
?>