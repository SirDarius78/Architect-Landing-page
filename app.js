// Smooth scrolling functionality for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            });
        }
    });
});

// Function to handle opening WhatsApp link
const handleWhatsAppClick = () => {
    const phoneNumber = '5491133212191'; // Número de teléfono de WhatsApp
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
};

// Toggle the visibility of the consultation form
const toggleConsulta = () => {
    const consultaSection = document.getElementById('consultaSection');
    consultaSection.classList.toggle('hidden');
};

// Open the consultation form when the button is clicked
document.getElementById('consultaButton').addEventListener('click', (e) => {
    e.preventDefault();
    toggleConsulta();
});

// Close the consultation form when the close button is clicked
document.getElementById('closeForm').addEventListener('click', (e) => {
    toggleConsulta();
});

// Send WhatsApp message function
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

