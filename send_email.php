<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $mobile = htmlspecialchars($_POST['mobile']);
    $message = htmlspecialchars($_POST['message']);

    // Validate that all fields are filled
    if (!empty($name) && !empty($email) && !empty($mobile) && !empty($message)) {
        // Email details
        $to = "prasadbelure07@gmail.com"; // Replace with your email
        $subject = "New Contact Form Submission";
        $body = "You have received a new message from your contact form:\n\n" .
                "Name: $name\n" .
                "Email: $email\n" .
                "Mobile: $mobile\n" .
                "Message: $message";

        $headers = "From: $email";

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            echo "<h3>Message sent successfully! We'll get back to you soon.</h3>";
        } else {
            echo "<h3>Oops! Something went wrong. Please try again.</h3>";
        }
    } else {
        echo "<h3>All fields are required. Please fill out the form completely.</h3>";
    }
} else {
    echo "<h3>Invalid form submission.</h3>";
}
?>
