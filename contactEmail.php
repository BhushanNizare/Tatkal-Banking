<?php
//get data from form  
$name = $_POST['name'];
$cname = $_POST['cname'];
$email= $_POST['email'];
$mobile= $_POST['mobile'];
$message= $_POST['message'];
$to = "bhushannizare739@gmail.com";
$subject = "Request Form Demo Tatkalbanking website";
$txt ="Name = ". $name . "\r\n Company Name = " . $cname . "\r\n Email = " . $email . "\r\n Mobile = " . $mobile . "\r\n Message =" . $message;
$headers = "From: Tatkalbanking.com" . "\r\n" .
"CC: ";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>