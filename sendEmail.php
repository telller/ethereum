<?php
  $site_name = 'Ethereum';
  $receiver_email = 'andrey.grimm.13@gmail.com';  
  
  $type = trim($_POST["type"]);
  $sender_name = trim($_POST["sender_name"]);
  $sender_email = trim($_POST["sender_email"]);
  $comment = trim($_POST["comment"]);

  if($type === 'sell'){
    $theme_message = 'Sell domain';
    $domain_name = trim($_POST["domain_name"]);
    $domain_price = trim($_POST["domain_price"]);
  }
  elseif ($type === 'buy') {
    $theme_message = 'Buy domain';
    $domain_name = trim($_POST["domain_name"]);
    $domain_price = trim($_POST["domain_price"]);
  }
  else {
    $theme_message = 'Contact us';
  }

  if($type === 'contact'){
    $message = "
    <div style='font-size: 16px;'>
      <p><b>Name:</b> {$sender_name}</p>
      <p><b>E-mail:</b> {$sender_email}</p>
      <p><b>Comment:</b> <span style='padding-left: 5px;'>{$comment}</span></p>
    </div>";
  } else {
    $message = " 
    <div style='font-size: 16px;'>
      <p><b>Name:</b> {$sender_name}</p>
      <p><b>E-mail:</b> {$sender_email}</p>
      <p><b>Domain:</b> {$domain_name}</p>
      <p><b>Price:</b> {$domain_price} ETH</p>
      <p><b>Comment:</b> <span style='padding-left: 5px;'>{$comment}</span></p>
    </div>";
  }

  date_default_timezone_set('Etc/UTC');
  require './includes/PHPMailer/PHPMailerAutoload.php';

  $mail = new PHPMailer;
  $mail->isSMTP();
  $mail->setLanguage('ru', './includes/PHPMailer/language/');

  $mail->SMTPDebug = 2;
  $mail->Debugoutput = 'html';

  $mail->Host = 'smtp.gmail.com';
  $mail->Port = 465;
  $mail->SMTPSecure = 'ssl';
  $mail->SMTPAuth = true;

  $mail->Username = 'andrey.grimm.13@gmail.com';
  $mail->Password = 'grimm@1011101';

  $mail->setFrom($receiver_email, $site_name);
  $mail->addAddress($receiver_email);

  $mail->isHTML(true);
  $mail->Subject = $theme_message;
  $mail->Body    = $message;

  if (!$mail->send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
  } else {
      echo "Message sent!";
  }
?>