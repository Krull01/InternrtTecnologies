<?php
$login = "undefine";


session_start();
if(isset($_POST['login']))
$login = $_POST['login'];

$_SESSION['login']=$login;

echo "Добро пожаловать, ";
echo $_SESSION['login'];
echo "!";
unset($_SESSION['login'] );
?>