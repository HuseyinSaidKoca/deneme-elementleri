
window.addEventListener("DOMContentLoaded", (event) => {//sayfa yüklenmesini bekle
const menuIcon = document.getElementById("menuIcon");
const toggleMenu = document.getElementById("toggleMenu");
const closeIcon = document.getElementById("closeIcon");

menuIcon.addEventListener("click", function () {
    toggleMenu.style.right = "0"; // Menüyü sağdan sola kaydır
    document.body.classList.add('no-scroll'); // Kaydırmayı engelle
});
closeIcon.addEventListener("click", function () {
    toggleMenu.style.right = "-43vw"; // Menüyü tekrar sağa kaydır ve gizle
    document.body.classList.remove('no-scroll'); // Kaydırmayı tekrar etkinleştir
});

})
