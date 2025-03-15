document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    
    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }
    
    alert("¡Formulario enviado con éxito!");
    this.reset();
});
