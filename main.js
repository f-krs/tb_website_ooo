document.addEventListener("DOMContentLoaded", () => {
    // Animation au scroll pour les cartes
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    // Gestion de la Navbar lors du scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // Gestion du formulaire
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.textContent = "Envoi en cours...";
            btn.style.opacity = "0.7";

            setTimeout(() => {
                alert("Merci ! Afalco a bien reçu votre message. Nous vous recontacterons sous 24h.");
                btn.textContent = "Envoyer le message";
                btn.style.opacity = "1";
                form.reset();
            }, 1500);
        });
    }
});