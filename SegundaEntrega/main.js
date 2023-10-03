let dropbtn = document.querySelector(".dropbtn");
let menuHamburguesa =document.querySelector(".menuHamburguesa");
let dropdowncontent=document.querySelector(".dropdown-content");
let cerrar = document.querySelector(".cerrar");

let sideNav= document.querySelector(".sidenav");

dropbtn.addEventListener("click", ()=>{
    dropdowncontent.classList.add("display")
});

cerrar.addEventListener("click", ()=>{
    dropdowncontent.classList.remove("display");
});

menuHamburguesa.addEventListener("click", ()=>{
    console.log("hola")
sideNav.classList.toggle("remove");
})