document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling functionality for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Function to handle opening WhatsApp link
    const handleWhatsAppClick = () => {
        const phoneNumber = '+5491133212191'; // Número de teléfono de WhatsApp
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    // Function to toggle the visibility of the consultation form
    window.toggleConsulta = () => {
        const consultaSection = document.getElementById('consultaSection');
        consultaSection.classList.toggle('hidden');
    };

    // Attach the click handler to the button with the 'consulta' class
    const consultaLink = document.querySelector('a[href="#consultaSection"]');
    if (consultaLink) {
        consultaLink.addEventListener("click", toggleConsulta);
    }
});

// Function to send WhatsApp message
function sendWhatsAppMessage() {
    const tipoTrabajo = document.getElementById('tipoTrabajo').value;
    const presupuesto = document.getElementById('presupuesto').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const descripcion = document.getElementById('descripcion').value;

    const phoneNumber = '5491133212191'; // Reemplaza con tu número de teléfono
    const message = `Consulta:\nTipo de Trabajo: ${tipoTrabajo}\nPresupuesto: ${presupuesto}\nUbicación: ${ubicacion}\nDescripción: ${descripcion}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
}
