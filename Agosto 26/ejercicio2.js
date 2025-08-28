document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("btnConsola");

    boton.addEventListener("click", function() {
        // Texto fijo para mostrar en la consola
        console.log("¡Hola! Este es un mensaje desde JavaScript.");
    });
});
