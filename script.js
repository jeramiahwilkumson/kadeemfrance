// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href');
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade in track cards on scroll
    const trackCards = document.querySelectorAll('.track-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });

    trackCards.forEach(card => {
        card.style.transform = 'translateY(20px)'; // Initial offset
        observer.observe(card);
    });
});
