document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("btnAlerta");

    boton.addEventListener("click", function() {
        const texto = document.getElementById("miTexto").value;
    
        alert(texto);
    });
});
