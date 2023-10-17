<?php
  if (isset($_POST['enviar'])) {
    if (!empty($_POST['name'] || !empty($_POST['email'] || !empty($_POST['phone'])||!empty($_POST['website'])||!empty($_POST['message'])))) {
        $name=$_POST['name'];
        $asunto=$_POST['subject'];
        $email=$_POST['email'];
        $message=$_POST['message'];
        $header="From: noreply@asomarianis.org";
        $to = "yecop123a@gmail.com";
      $mail = mail($to,$asunto,$message,$header);
      if ($mail) {
        echo "SI SE ENVIÓ";
      } else {
        echo "NO";
      }

      $name=$_POST['name'];
      $asunto=$_POST['subject'];
      $email=$_POST['email'];
      $message=$_POST['message'];
      error_reporting( E_ALL );
      $from = "notificaciones@pruebas-enlace.shop";
      $to = "yecop123a@gmail.com";
      $subject = $asunto;
      $message = "Saludos me gustaría que"."\r\n".$_POST['email'].$_POST['phone'].$_POST['website'];
      $headers = "From:" . $from;
      mail($to,$subject,$message, $headers);
      
    }
  };
?>