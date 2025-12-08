// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar la tarjeta flip
    const flipCard = document.querySelector('.flip-card');
    
    // Seleccionar botones
    const btnContactar = document.querySelector('.btn-contactar');
    const btnVolver = document.querySelector('.btn-volver');
    
    // Función para girar la tarjeta
    function girarTarjeta() {
        flipCard.classList.toggle('flipped');
    }
    
    // Agregar evento al botón "Contactar"
    if (btnContactar) {
        btnContactar.addEventListener('click', function(e) {
            e.stopPropagation(); // Evitar que el clic se propague
            girarTarjeta();
        });
    }
    
    // Agregar evento al botón "Volver"
    if (btnVolver) {
        btnVolver.addEventListener('click', function(e) {
            e.stopPropagation(); // Evitar que el clic se propague
            girarTarjeta();
        });
    }
    
    // Opcional: Girar la tarjeta al hacer clic en cualquier parte (excepto botones)
    // Descomentar si se desea esta funcionalidad
    /*
    flipCard.addEventListener('click', function(e) {
        // Solo girar si no se hizo clic en un botón
        if (!e.target.closest('button')) {
            girarTarjeta();
        }
    });
    */
});