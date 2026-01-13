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
