<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    if (!$visitor_email) {
        die("Invalid email address.");
    }

    $email_from = 'raphaelodinaka14@gmail.com'; // Must be your server/domain email
    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                  "User Email: $visitor_email.\n".
                  "Subject: $subject.\n".
                  "Message: $message.\n";

    $to = "raphaelodinaka13@gmail.com";

    $headers = "From: $email_from\r\n";
    $headers .= "Reply-To: $visitor_email\r\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        header("Location: contact.html?success=true");
        exit();
    } else {
        echo "Sorry, the email could not be sent.";
    }
}
?>
