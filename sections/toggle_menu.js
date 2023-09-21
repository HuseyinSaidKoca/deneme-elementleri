const menuIcon = document.getElementById("menuIcon");
const toggleMenu = document.getElementById("toggleMenu");
const closeIcon = document.getElementById("closeIcon");

menuIcon.addEventListener("click", function () {
    toggleMenu.style.right = "0"; // Menüyü sağdan sola kaydır
});

closeIcon.addEventListener("click", function () {
    toggleMenu.style.right = "-40%"; // Menüyü tekrar sağa kaydır ve gizle
});


