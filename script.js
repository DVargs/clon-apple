// ==========================================================================
// INTERRUPTOR DE TEMA CLARO / OSCURO (Fichas 62, 63, 66 y 67)
// ==========================================================================

// 1. Capturamos el botón del menú superior por su ID único (Ficha 63)
const btnModo = document.getElementById("btnModo");

// Auditamos la carga del script en la consola de inspección (Ficha 62)
console.log("Sistema interactivo cargado correctamente.");

// 2. Escuchamos el evento 'click' sobre el botón (Ficha 63)
btnModo.addEventListener("click", function() {
    
    // 3. Alternamos la clase global .light-mode en el <body> (Ficha 66)
    document.body.classList.toggle("light-mode");
    
    // 4. Verificamos si la clase quedó activa para actualizar el texto del botón
    if (document.body.classList.contains("light-mode")) {
        btnModo.textContent = "Modo Oscuro";
        console.log("Tema cambiado a: Modo Claro");
    } else {
        btnModo.textContent = "Modo Claro";
        console.log("Tema cambiado a: Modo Oscuro");
    }
});