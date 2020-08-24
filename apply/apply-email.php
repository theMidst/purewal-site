<?php
// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

// Load Composer's autoloader
require '../vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    // retrieve contact info, recording missing data as errors
    $error_messages = '';
    $name = isset($_POST['name']) ? $_POST['name'] : $error_messages .= 'Name N/A; ';
    $visitor_email = isset($_POST['email']) ? $_POST['email'] : $error_messages .= 'Email N/A; ';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : $error_messages .= 'Phone N/A; ';
    $province = isset($_POST['province']) ? $_POST['province'] : $error_messages .= 'Province N/A; ';
    $mortgage_specialist = isset($_POST['mortgageSpecialist']) ? $_POST['mortgageSpecialist'] : 'N/A'; // not an error!

    // retrieve mortgage info
    $mortgage_type = isset($_POST['mortgageType']) ? $_POST['mortgageType'] : $error_messages .= 'Mortgage type N/A; ';
    $mortgage_amount = isset($_POST['mortgageAmount']) ? $_POST['mortgageAmount'] : $error_messages .= 'Mortgage amount N/A; ';
    $time_frame = isset($_POST['timeFrame']) ? $_POST['timeFrame'] : $error_messages .= 'Time frame N/A; ';
    $living_status = isset($_POST['livingStatus']) ? $_POST['livingStatus'] : $error_messages .= 'Living status N/A; ';
    $number_of_applicants = isset($_POST['numberOfApplicants']) ? $_POST['numberOfApplicants'] : $error_messages .= 'Number of applicants N/A;';

    // halt if any variables are missing
    if ($error_messages != '') {
        throw new Exception('Error(s) retrieving application data: ' . $error_messages);
    }

    // apply mailserver (PHPMailer) settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;  // Enable verbose debug output
    $mail->isSMTP();  // Send using SMTP
    $mail->Host = 'smtp.gmail.com';  // Set the SMTP server to send through
    $mail->SMTPAuth = true;  // Enable SMTP authentication
    $mail->Username = 'purewalmailer@gmail.com';  // SMTP username
    $mail->Password = 'TcETrTQq5GN6jD3';  // SMTP password
    $mail->SMTPSecure = 'PHPMailer::ENCRYPTION_SMTPS';  // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged, 'PHPMailer::ENCRYPTION_STARTTLS' default
    $mail->Port = 587;  // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    // set email recipients
    $mail->setFrom('purewalmailer@gmail.com', 'Purewal Mailer');
    $mail->addAddress('kent.nippard@gmail.com', 'Joe Purewal'); // Add a recipient w/optional name
    $mail->addReplyTo($visitor_email, $name);
    $mail->addCC('andrewmceachren@gmail.com');
    // $mail->addBCC('bcc@example.com');

    // set email content
    $mail->isHTML(true); // set email format to HTML
    $mail->Subject = 'New Application Received'; // set the subject line
    // define plain-text email body for non-HTML clients
    $mail->AltBody = "A new application has been received from:\n" .
        "- Name: $name\n" .
        "- Email: $visitor_email\n" .
        "- Phone: $phone\n" .
        "- Province: $province\n" .
        "- Mortgage Specialist: $mortgage_specialist\n" .
        "\nMortgage Info:\n" .
        "- Mortgage type: $mortgage_type\n" .
        "- Mortgage amount: $$mortgage_amount\n" .
        "- Time frame: $time_frame\n" .
        "- Living status: $living_status\n" .
        "- Number of applicants: $number_of_applicants";
    // define HTML-format email body for compatible clients
    $table_style = "padding: 5px; background-color: lightblue; border: 2px solid black; border-radius: 15px;";
    $cell_style = "padding: 5px; min-width: 150px; background-color: white; border: 2px solid black; border-radius: 3px;";
    $mail->Body = "<html>
    <head>
      <title>Application Received</title>
    </head>
    <body style='font-family: \"Helvetica Neue\", Helvetica, Arial;'>
      <h2>New Application Received</h2>
      <table style='$table_style'>
        <tr>
          <th colspan='2' style='font-size: 1.2em;'>Contact Info</th>
        </tr>
        <tr style='border: 2px solid black; border-radius: 2px;'>
          <th style='$cell_style'>Name</th>
          <td style='$cell_style'>$name</td>
        <tr>
        </tr>
          <th style='$cell_style'>Email</th>
          <td style='$cell_style'>$visitor_email</td>
        </tr>
        <tr>
          <th style='$cell_style'>Phone</th>
          <td style='$cell_style'>$phone</td>
        </tr>
          <th style='$cell_style'>Province</th>
          <td style='$cell_style'>$province</td>
        <tr>
        </tr>
          <th style='$cell_style'>Mortgage Specialist</th>
          <td style='$cell_style'>$mortgage_specialist</td>
        </tr>
        <tr>
          <th colspan='2' style='font-size: 1.2em;'>Mortgage Info</th>
        </tr>
        <tr>
          <th style='$cell_style'>Mortgage Type</th>
          <td style='$cell_style'>$mortgage_type</td>
        </tr>
        <tr>
          <th style='$cell_style'>Mortgage Amount</th>
          <td style='$cell_style'>$$mortgage_amount</td>
        </tr>
        <tr>
          <th style='$cell_style'>Time Frame</th>
          <td style='$cell_style'>$time_frame</td>
        </tr>
        <tr>
          <th style='$cell_style'>Living Status</th>
          <td style='$cell_style'>$living_status</td>
        </tr>
        <tr>
          <th style='$cell_style'>Number of Applicants</th>
          <td style='$cell_style'>$number_of_applicants</td>
        </tr>
      </table>
    </body>
    </html>";

    // send the prepared email via PHPMailer
    $mail->send();
    echo 'E-mail sent successfully.';

} catch (Exception $e) {
    // todo: use logger instead
    echo "Mailer error: {$mail->ErrorInfo}";
    error_log("Mailer error: {$mail->ErrorInfo}");
}
