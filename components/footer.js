class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer style="background: linear-gradient(135deg, #0f172a 0%, #1e2d4a 100%);" class="text-white">
        <div class="container mx-auto px-4 py-12">
          <div class="grid md:grid-cols-3 gap-8 mb-8">

            <div class="md:col-span-1">
              <a href="index.html" class="text-xl font-extrabold tracking-tight mb-3 inline-block">
                <span class="text-blue-900">QR</span><span class="text-white"> Avocat</span>
              </a>
              <p class="text-white/60 text-sm mb-4">Avocat au Barreau de Paris</p>
              <p class="text-white/60 text-sm leading-relaxed">
                51 rue de Maubeuge<br>75009 Paris
              </p>
            </div>

            <div>
              <h3 class="text-xs uppercase tracking-widest text-white/40 font-bold mb-4" style="font-family:'Barlow Condensed',sans-serif;">Navigation</h3>
              <ul class="space-y-2.5">
                <li><a href="index.html" class="text-white/70 hover:text-white text-sm transition-colors">Accueil</a></li>
                <li><a href="expertise.html" class="text-white/70 hover:text-white text-sm transition-colors">Domaines d'expertise</a></li>
                <li><a href="actualites.html" class="text-white/70 hover:text-white text-sm transition-colors">Actualités</a></li>
                <li><a href="contact.html" class="text-white/70 hover:text-white text-sm transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-xs uppercase tracking-widest text-white/40 font-bold mb-4" style="font-family:'Barlow Condensed',sans-serif;">Contact</h3>
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <i data-feather="phone" class="w-4 h-4 text-amber-300/70 flex-shrink-0"></i>
                  <a href="tel:+33681669806" class="text-white/70 hover:text-white text-sm transition-colors">06 81 66 98 06</a>
                </div>
                <div class="flex items-center gap-2">
                  <i data-feather="mail" class="w-4 h-4 text-amber-300/70 flex-shrink-0"></i>
                  <a href="mailto:qr.cabinet@gmail.com" class="text-white/70 hover:text-white text-sm transition-colors">qr.cabinet@gmail.com</a>
                </div>
                <div class="flex items-center gap-2">
                  <i data-feather="clock" class="w-4 h-4 text-amber-300/70 flex-shrink-0"></i>
                  <span class="text-white/60 text-sm">Lun–Ven : 8h30–20h30</span>
                </div>
              </div>
            </div>

          </div>

          <div class="h-px bg-white/10 my-6"></div>

          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-xs text-white/40">© ${new Date().getFullYear()} Quentin Rapaud — Tous droits réservés.</p>
            <div class="flex items-center gap-6">
              <a href="mentions-legales.html" class="text-xs text-white/40 hover:text-white/80 transition-colors">Mentions légales</a>
              <a href="politique-confidentialite.html" class="text-xs text-white/40 hover:text-white/80 transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    `;

    if (window.feather) feather.replace();
  }
}

customElements.define("custom-footer", CustomFooter);