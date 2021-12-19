<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "carloronchin@gmail.com";
    $headers = "Da: ". $mailFrom;
    $txt = "Hai ricevuto una mail da".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}