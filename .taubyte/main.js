// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {

    // NAVBAR SCROLL
    const header = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (!header) return;

        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(255,255,255,0.9)';
        } else {
            header.style.padding = '20px 0';
            header.style.background = '#fff';
        }
    });

    // ANIMATION SCROLL
    const elements = document.querySelectorAll('.card, .about-section, .contact-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    // FORMULAIRE
    const form = document.querySelector('.contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const button = form.querySelector('button');
            if (!button) return;

            button.textContent = "Envoi...";
            button.disabled = true;

            setTimeout(() => {
                alert("Message envoyé !");
                button.textContent = "Envoyer le message";
                button.disabled = false;
                form.reset();
            }, 1500);
        });
    }
console.log("JS OK");
});