<?php
//get data from form  
$name = $_POST['pname'];
$surname = $_POST['surname'];
$email= $_POST['email'];
$mobile= $_POST['mobile'];
$postion= $_POST['postion'];
$to = "bhushannizare739@gmail.com";
$subject = "Career Form Tatkalbanking website";
$txt ="Name = ". $name . "\r\n Last Name = " . $surname . "\r\n Email = " . $email . "\r\n Mobile = " . $mobile . "\r\n Position =" . $postion;
$headers = "From: Tatkalbanking.com" . "\r\n" .
"CC: ";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>