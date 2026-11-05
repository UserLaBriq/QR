// Page loader — masqué après chargement complet
window.addEventListener('load', function () {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  // Laisser la barre terminer son animation (≈1.3s) avant de masquer
  setTimeout(function () {
    loader.classList.add('loader-hidden');
  }, 500);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {threshold: 0.1});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
console.log("%cSite conçu et réalisé par Julien Anstett — heliosdigital.org © 2026",
"color:#1e3a8a;font-size:14px;font-weight:bold;");