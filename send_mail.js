window.addEventListener("DOMContentLoaded", (event) => {//sayfa yüklenmesini bekle
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Formun varsayılan gönderimini engelle

    const submitButton = document.getElementById('submitButton');
    submitButton.textContent = "Gönderiliyor..."; // Butonun yazısını değiştir

    // Formdaki verileri topla
    const formData = new FormData(this);

    // POST isteği yap
    fetch('https://godentalclinic-contact-info-eccb5426b03a.herokuapp.com/index.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            submitButton.textContent = "Başarıyla Gönderildi!";
        } else {
            submitButton.textContent = "Hata! Tekrar Deneyin.";
        }
        // 3 saniye bekledikten sonra butonun yazısını geri değiştir
        setTimeout(() => {
            submitButton.textContent = "GÖNDER";
        }, 3000);
    })
    .catch(error => {
        console.error('Error:', error);
        submitButton.textContent = "Hata! Tekrar Deneyin.";
        // 3 saniye bekledikten sonra butonun yazısını geri değiştir
        setTimeout(() => {
            submitButton.textContent = "GÖNDER";
        }, 3000);
    });
});
})