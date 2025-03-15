// Mobile menu toggle
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});