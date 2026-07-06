// ==========================================
// MOBILE MENU TOGGLE (State & Interaction)
// ==========================================

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    
    navLinks.classList.toggle('active');
    
    
    if (navLinks.classList.contains('active')) {
        menuToggle.textContent = '✖'; 
        menuToggle.setAttribute('aria-expanded', 'true'); 
    } else {
        menuToggle.textContent = '☰'; 
        menuToggle.setAttribute('aria-expanded', 'false'); 
    }
});

const allLinks = document.querySelectorAll('.nav-links a');
allLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.textContent = '☰';
    });
});
const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => {
    document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
});