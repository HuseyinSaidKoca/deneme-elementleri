window.addEventListener("DOMContentLoaded", (event) => {//sayfa yüklenmesini bekle
document.getElementById('sendMailButton').addEventListener('click', function() {
    const adsoyad = document.getElementById('adsoyad').value;
    const email = document.getElementById('email').value;
    const telefon = document.getElementById('telefon').value;

    const subject = encodeURIComponent("GO DENTAL CLINIC ILETISIM FORMU");
    const body = encodeURIComponent(
        "Ad & Soyad: " + adsoyad + "\n" +
        "E-Posta: " + email + "\n" +
        "Telefon: " + telefon + "\n" +
        "Varsa Mesajınız:"
    );

    window.location.href = "mailto:info@godental.clinic?subject=" + subject + "&body=" + body;
});
})