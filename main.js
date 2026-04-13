// 1. Changement de style de la Navbar au scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        header.style.padding = '12px 0';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.padding = '20px 0';
        header.style.background = '#ffffff';
    }
});

// 2. Animation d'apparition (Intersection Observer)
const revealOptions = { threshold: 0.1 };

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, revealOptions);

// On applique l'animation aux cartes et sections
document.querySelectorAll('.card, .about-section, .contact-section').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    revealOnScroll.observe(el);
});

// Classe CSS injectée par JS pour l'animation
const style = document.createElement('style');
style.innerHTML = `.active { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// 3. Gestion du Formulaire de Contact
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = form.querySelector('button');
    
    button.textContent = "Envoi...";
    button.disabled = true;

    // Simulation d'envoi (API réelle possible ici)
    setTimeout(() => {
        alert("Message envoyé avec succès ! L'équipe Afalco vous recontactera bientôt.");
        button.textContent = "Envoyer le message";
        button.disabled = false;
        form.reset();
    }, 1500);
});