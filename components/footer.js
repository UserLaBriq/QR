class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-blue-900 text-white">
        <div class="container mx-auto px-4 py-12">
          <div class="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 class="text-xl font-bold mb-3">Quentin Rapaud</h3>
              <p class="opacity-80 mb-4">Avocat au Barreau de Paris</p>
              <p class="opacity-80">
                51 rue de Maubeuge<br />
                75009 Paris
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold mb-3">Navigation</h3>
              <ul class="space-y-2 opacity-90">
                <li><a href="index.html" class="hover:opacity-80">Accueil</a></li>
                <li><a href="expertise.html" class="hover:opacity-80">Domaines d'expertise</a></li>
                <li><a href="about.html" class="hover:opacity-80">À propos</a></li>
                <li><a href="contact.html" class="hover:opacity-80">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-bold mb-3">Contact</h3>
              <div class="space-y-3 opacity-90">
                <div class="flex items-center gap-2">
                  <i data-feather="phone" class="w-5 h-5"></i>
                  <a href="tel:+33681669806" class="hover:opacity-80">06 81 66 98 06</a>
                </div>
                <div class="flex items-center gap-2">
                  <i data-feather="mail" class="w-5 h-5"></i>
                  <a href="mailto:qr.cabinet@gmail.com" class="hover:opacity-80">qr.cabinet@gmail.com</a>
                </div>
                <div class="flex items-center gap-2">
                  <i data-feather="clock" class="w-5 h-5"></i>
                  <span class="opacity-80">Lun–Ven : 8h30–20h30</span>
                </div>
              </div>
            </div>
          </div>

          <div class="h-px bg-white/20 my-6"></div>

          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm opacity-80">© ${new Date().getFullYear()} Quentin Rapaud — Tous droits réservés</p>
            <div class="flex items-center gap-4">
              <a href="#" class="hover:opacity-80" aria-label="LinkedIn">
                <i data-feather="linkedin" class="w-5 h-5"></i>
              </a>
              <a href="#" class="hover:opacity-80" aria-label="X/Twitter">
                <i data-feather="twitter" class="w-5 h-5"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    `;

    if (window.feather) feather.replace();
  }
}

customElements.define("custom-footer", CustomFooter);
