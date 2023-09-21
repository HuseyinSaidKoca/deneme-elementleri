window.addEventListener("DOMContentLoaded", (event) => {//sayfa yüklenmesini bekle
const ctaButton = document.querySelector(".cta-button");

ctaButton.addEventListener("click", function() {
    window.location.href = "contact_page.html";
});

const aboutButton = document.querySelector(".about-us-button");

aboutButton.addEventListener("click", function() {
    window.location.href = "about_us_page.html";
});
})