const btnBuyList = document.querySelectorAll(".btnBuy");

btnBuyList.forEach(btnBuy => {
    btnBuy.addEventListener('click', () => {
        // Obtén la tarjeta asociada al botón en el que se hizo clic
        const card = btnBuy.closest('.card');
        const imagen = card.querySelector('.imagen');
       // Accede a la URL de la imagen
       const imageUrl = imagen.src;
        // Cambia el contenido de la tarjeta
        card.innerHTML = `
        <div class="absolute">
        <box-icon type='solid' name='cart-download' color='#fff'></box-icon>
        <p class="price">Agregado</p>
        </div>
        <img class="imagen" src="${imageUrl}">
        <h3> Apex Legends </h3>
        
        <p><button class="btnBuy">Finalizar</button></p>
        `;
    });
    
});

