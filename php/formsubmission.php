<!DOCTYPE html>
<html>
<body>
<?php

$errors = ";

$myemail = 'kent.nippard@gmail.com'; 

if (empty($_POST["name"]) || 
empty($_POST["email"]) || 
empty($_POST[""]))
// enter the rest of user chosen variables here
// Phone number
// Province
// Mortgage Specialist
// Mortgage type
// Mortgage Amount
// Time-frame
// Living-status
// Number of applicants
// 


{

$errors .= "\n Error: all fields are required";

}

$name = $_POST["name"];

$email_address = $_POST["email"];

$message = $_POST[""];
// enter the rest of user chosen variables here
// Phone number
// Province
// Mortgage Specialist
// Mortgage type
// Mortgage Amount
// Time-frame
// Living-status
// Number of applicants
// 

if (!preg_match(

"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address))

{

$errors .= "\n Error: Invalid email address";

}

if( empty($errors))

{

//TODO: Format this to be nicer and not bad
$to = $myemail;

$email_subject = "Contact form submission: $name";

$email_body = "You have received a new message. ".

" Here are the details:\n Name: $name \n ".

"Email: $email_address\n Message \n $message";

$headers = "From: $myemail\n";

$headers .= "Reply-To: $email_address";

mail($to,$email_subject,$email_body,$headers);

//redirect to the ‘thank you’ page

header("Location: contact-form-thank-you.html");

}

?>
</body>
</html>
