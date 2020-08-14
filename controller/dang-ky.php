<?php

if(isset($_POST['uname'])){
   $user = [];
   if($_POST['type']=='hocvien'){
      userSignUp($_POST['uname'],password_hash($_POST['pwd'],PASSWORD_DEFAULT),$_POST['email'],$_POST['fname'],$_POST['lname']);
      $user = checkLogin($_POST['uname'],$_POST['pwd']);
      setcookie("user_id",$user['id'], time() + (86400 * 180), "/");
   }
   if($_POST['type']=='giangvien'){
      lectureSignUp($_POST['uname'],password_hash($_POST['pwd'],PASSWORD_DEFAULT),$_POST['email'],$_POST['fname'],$_POST['lname']);
      $user = checkLoginGV($_POST['uname'],$_POST['pwd']);
      setcookie("lecturer_id",$user['id'], time() + (86400 * 180), "/");
   }
   header("Location: index.php");
}
include './view/signup.php';