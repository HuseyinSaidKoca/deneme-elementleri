<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $adsoyad = $_POST['adsoyad'];
    $email = $_POST['email'];
    $telefon = $_POST['telefon'];

    $to = "huseyinsaidk@gmail.com";
    $subject = "WEB SİTEDEN YENİ MESAJ GELDİ";
    $message = "
    GO Dental Clinic web sitesinin iletişim formundan yeni bir mesaj geldi.
    Ad & Soyad: $adsoyad
    E-Posta: $email
    Telefon: $telefon
    ";

    $headers = "From: godental.clinic" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

    // Mesajı site sahibine gönder
    mail($to, $subject, $message, $headers);

    // Formu dolduran kişiye otomatik cevap gönder
    $autoReplySubject = "Mesajınızı Aldık!";
    $autoReplyMessage = "Merhaba $adsoyad,\n\nMesajınızı başarıyla aldık. Ekibimiz en kısa sürede size geri dönecektir.\n\nTeşekkürler!";
    $autoReplyHeaders = "From: godental.clinic" . "\r\n" .
    "Reply-To: huseyinsaidk@gmail.com" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

    mail($email, $autoReplySubject, $autoReplyMessage, $autoReplyHeaders);

    // Kullanıcıyı teşekkür sayfasına yönlendir
    header("Location: mail_sended.html");
    exit();
} else {
    echo "Formdan gelen veri yok!";
}
?>