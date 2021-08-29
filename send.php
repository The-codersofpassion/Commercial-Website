<?php

$to = "nupur532002@gmail.com";
$from = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$subject = "Message from your website";
$message = $_POST['textC'];

$body = "This is an automated message Please do not reply to this message. \n \n $message \n $phone";

$new_user = "From: $name";

mail($to,$from,$subject,$message);

echo "Message sent! <a href='/index.html#Contactus'>Click here</a> to send another message";

?>