document.getElementById('cta-button').addEventListener('click', function() {
    var contactInfo = document.getElementById('contact-info');
    
    // Verifica se a área de contatos está visível ou oculta
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
    } else {
        contactInfo.style.display = "none";  // Alterna entre mostrar e esconder
    }
});
