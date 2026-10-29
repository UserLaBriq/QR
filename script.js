// Page loader — masqué après chargement complet
window.addEventListener('load', function () {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  // Laisser la barre terminer son animation (≈1.3s) avant de masquer
  setTimeout(function () {
    loader.classList.add('loader-hidden');
  }, 500);
});

// Smooth mouse wheel scroll (souris à molette sur Chrome/Brave/Edge/Firefox uniquement)
// Désactivé sur tactile, sur Safari (son défilement natif est déjà fluide, et le lissage
// maison s'ajoutait à l'inertie du trackpad = sensation de latence) et pour les trackpads.
(function () {
  if ('ontouchstart' in window) return;
  const ua = navigator.userAgent;
  const isSafari = /safari/i.test(ua) && !/chrome|chromium|crios|fxios|edg|android/i.test(ua);
  if (isSafari) return;

  let current = window.scrollY;
  let target  = window.scrollY;
  let running = false;
  const ease  = 0.09; // 0.05 = très lent, 0.15 = rapide

  // Garde la position interne alignée avec le vrai scroll (ancres, clavier, barre de défilement…)
  window.addEventListener('scroll', function () {
    if (!running) { current = window.scrollY; target = window.scrollY; }
  }, { passive: true });

  window.addEventListener('wheel', function (e) {
    // Trackpad / molette à inertie : petits deltas continus -> on laisse le navigateur faire
    if (e.deltaMode === 0 && Math.abs(e.deltaY) < 30) return;
    // Zoom (Ctrl + molette) : on ne touche à rien
    if (e.ctrlKey) return;

    e.preventDefault();
    if (!running) { current = window.scrollY; target = window.scrollY; }
    target += e.deltaY * 1.1;
    target = Math.max(0, Math.min(target, document.documentElement.scrollHeight - window.innerHeight));
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