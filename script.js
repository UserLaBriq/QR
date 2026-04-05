// Page loader — masqué après chargement complet
window.addEventListener('load', function () {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  // Laisser la barre terminer son animation (≈1.3s) avant de masquer
  setTimeout(function () {
    loader.classList.add('loader-hidden');
  }, 500);
});

// Smooth mouse wheel scroll (desktop only)
(function () {
  if ('ontouchstart' in window) return; // désactivé sur mobile/tactile

  let current = window.scrollY;
  let target  = window.scrollY;
  let running = false;
  const ease  = 0.09; // 0.05 = très lent, 0.15 = rapide

  window.addEventListener('wheel', function (e) {
    e.preventDefault();
    target += e.deltaY * 1.1;
    target = Math.max(0, Math.min(target, document.body.scrollHeight - window.innerHeight));
    if (!running) { running = true; tick(); }
  }, { passive: false });

  function tick() {
    current += (target - current) * ease;
    if (Math.abs(target - current) < 0.5) {
      current = target;
      running = false;
    }
    window.scrollTo(0, current);
    if (running) requestAnimationFrame(tick);
  }
})();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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
console.log("%cSite officiel publié par Julien — UserLaBriq © 2026", 
"color:#1e3a8a;font-size:14px;font-weight:bold;");
console.log("Repo officiel : https://github.com/UserLaBriq/QR");
