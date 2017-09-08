<?php
  include('./STMPmail.php');

  $method = $_SERVER['REQUEST_METHOD'];
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
    $message = ' 
    <html> 
        <head> 
            <title>{$theme_message}</title> 
        </head> 
        <body>
            <p><span>Name:</span> {$sender_name}</p>
            <p><span>E-mail:</span> {$sender_email}</p>
            <br />
            <p>{$comment}</p>
        </body> 
    </html>';
  } else {
    $message = ' 
    <html> 
        <head> 
            <title>{$theme_message}</title> 
        </head> 
        <body>
            <p><span>Name:</span> {$sender_name}</p>
            <p><span>E-mail:</span> {$sender_email}</p>
            <br />
            <p><span>Domain:</span> {$domain_name}</p>
            <p><span>Price:</span> {$domain_price}</p>
            <p>{$comment}</p>
        </body> 
    </html>';
  }

  function adopt($text) {
    return '=?UTF-8?B?'.Base64_encode($text).'?=';
  }

  $headers = "MIME-Version: 1.0" . PHP_EOL .
    "Content-Type: text/html; charset=utf-8" . PHP_EOL .
    'From: ' . adopt($site_name) . ' <' . $_POST["sender_email"] . '>' . PHP_EOL .
    'Reply-To: '.$receiver_email.'' . PHP_EOL;

  echo smtpmail($receiver_email, adopt($theme_message), $message, $headers );
?>