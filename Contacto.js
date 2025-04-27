function enviarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const titulo = document.getElementById("titulo").value.trim();
    const motivo = document.getElementById("motivo").value.trim();
    const parrafo = document.getElementById("parrafo");

    if (!nombre || !telefono || !email || !titulo || !motivo) {
        alert("⚠️ Por favor, completa todos los campos.");
        return;
    }

    // Mostrar alerta con la confirmación
    alert("✅ ¡Formulario enviado con éxito!");

    // Mostrar texto en pantalla también (opcional)
    parrafo.innerHTML = "✅ Los datos fueron enviados correctamente.";
    parrafo.style.color = "green";
}







