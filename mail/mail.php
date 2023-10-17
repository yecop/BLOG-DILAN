<?php
  if (isset($_POST['enviar'])) {
    if (!empty($_POST['name']&&!empty($_POST['email'])&&!empty($_POST['subject'])&&!empty($_POST['message']))) {
      $name=$_POST['name'];
      $email=$_POST['email'];
      $asunto=$_POST['subject'];
      $message=$_POST['message'];
      error_reporting( E_ALL );
      $from = "notificaciones@pruebas-enlace.shop";
      $to = "yecop123a@gmail.com";
      $subject = $asunto;
      $message = "Saludos, mi nombre es ".$name."\r\n\r\n\r\n\r\n".$message."\r\n\r\n\r\n\r\n"."mis datos de contacto son los siguientes: "."\r\n"."Email: ".$email ;
      $headers = "From:" . $from;
      mail($to,$subject,$message, $headers);
      
    }
  };
?>