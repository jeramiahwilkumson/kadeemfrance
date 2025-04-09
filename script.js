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

    // Animate track cards on scroll
    const trackCards = document.querySelectorAll('.track-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'cardPop 0.5s ease forwards';
            }
        });
    }, { threshold: 0.5 });

    trackCards.forEach(card => observer.observe(card));

    // Listen button pulse effect
    const listenBtn = document.querySelector('.listen-btn');
    listenBtn.addEventListener('mouseover', () => {
        listenBtn.style.animation = 'pulse 0.5s infinite';
    });
    listenBtn.addEventListener('mouseout', () => {
        listenBtn.style.animation = '';
    });
});

// Additional animation for track cards
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes cardPop {
        0% { transform: scale(0.8); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
    }
`, styleSheet.cssRules.length);
