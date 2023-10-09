const carouselesChicos = document.querySelectorAll('.carouselChico');

carouselesChicos.forEach(carouselChico => {
    const container = carouselChico.querySelector('.carouselChicoContainer');
    const buttonLeft = carouselChico.querySelector('.carouselChicoButtonLeft');
    const buttonRight = carouselChico.querySelector('.carouselChicoButtonRight');
    // Controlador de evento para el botón de la izquierda
    buttonLeft.addEventListener('click', function () {
      container.scrollLeft -= 500; // Desplaza hacia la izquierda (ajusta la cantidad según tus necesidades)
    });
    
    // Controlador de evento para el botón de la derecha
    buttonRight.addEventListener('click', function () {
      container.scrollLeft += 500; // Desplaza hacia la derecha (ajusta la cantidad según tus necesidades)
    });
});


