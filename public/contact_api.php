<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "No data received"]);
    exit();
}

// Configuration
$to_email = "varunaat@varunaat.in"; // REPLACE with your actual admin email
$subject = "New Contact Form Submission: " . $data['name'];
$headers = "From: website@varunaat.in\r\n";
$headers .= "Reply-To: " . $data['email'] . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Email Body
$message = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
        h2 { color: #2563eb; }
        .field { margin-bottom: 10px; }
        .label { font-weight: bold; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>New Inquiry from Website</h2>
        <div class='field'><span class='label'>Name:</span> " . htmlspecialchars($data['name']) . "</div>
        <div class='field'><span class='label'>Email:</span> " . htmlspecialchars($data['email']) . "</div>
        <div class='field'><span class='label'>Company:</span> " . htmlspecialchars($data['company'] ?? 'N/A') . "</div>
        
        <div class='field'>
            <span class='label'>Message:</span><br>
            " . nl2br(htmlspecialchars($data['message'])) . "
        </div>
    </div>
</body>
</html>
";

// Send Email
if (mail($to_email, $subject, $message, $headers)) {
    echo json_encode(["status" => "success", "message" => "Message sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to send email"]);
}
?>
