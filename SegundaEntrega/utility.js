// Variables para la primera sección de carrusel
let slideIndexSection1 = 1;
showSlides(slideIndexSection1, 'forYou'); // Agregar 'section1' como segundo argumento

// Variables para la segunda sección de carrusel
let slideIndexSection2 = 1;
showSlides(slideIndexSection2, 'action'); // Agregar 'section2' como segundo argumento

function plusSlides(n, section) {
    if (section === 'forYou') {
        showSlides(slideIndexSection1 += n, 'forYou');
    } else if (section === 'action') {
        showSlides(slideIndexSection2 += n, 'action');
    }
}

function currentSlide(n, section) {
    if (section === 'forYou') {
        showSlides(slideIndexSection1 = n, 'forYou');
    } else if (section === 'action') {
        showSlides(slideIndexSection2 = n, 'action');
    }
}

function showSlides(n, section) {
    let i;
    console.log(`mySlides ${section}`);
    let slides = document.getElementsByClassName(`mySlides ${section}`);
   let nextt= document.querySelector('.next');
   let previo=document.querySelector('.prev');
    let dots = document.getElementsByClassName(`dot ${section}`);
    console.log(`dot ${section}`)
    console.log(n)

    if(n===3){
     nextt.classList.add('hidde');
     previo.classList.remove('hidde');
    }
    if (n!=3){
  nextt.classList.remove('hidde');
  previo.classList.remove('hidde');
}
if (n==1){
  previo.classList.add('hidde');
}
    if (n > slides.length) { 
        n = 1;
       
    }
    if (n < 1) { 
        n = slides.length;
       
    }
   
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n-1].style.display = "block";
    dots[n-1].className += " active";
    
   
}