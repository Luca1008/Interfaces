

document.addEventListener("DOMContentLoaded", function() {
    const menuUserBtn = document.getElementById("menuUserBtn");
    const menuPerfilUser = document.getElementById("menuPerfilUser");
    const cerrarMenuBtn = document.getElementById("cerrarMenuBtn");

    menuUserBtn.addEventListener("click", function() {
        menuPerfilUser.classList.toggle("abierto");
    });

    cerrarMenuBtn.addEventListener("click", function() {
        menuPerfilUser.classList.remove("abierto");
    });
});
