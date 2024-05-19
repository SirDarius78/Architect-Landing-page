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
