class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-white/85 backdrop-blur border-b sticky top-0 z-50">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            <a href="index.html" class="text-xl font-extrabold text-slate-900 tracking-tight">
              <span class="text-blue-900">QR</span><span class="text-slate-900"> Avocat</span>
            </a>

            <nav class="hidden md:flex items-center gap-8" id="desktop-nav">
              <a href="index.html" class="nav-link text-slate-700 hover:text-blue-900">Accueil</a>
              <a href="expertise.html" class="nav-link text-slate-700 hover:text-blue-900">Expertises</a>
              <a href="about.html" class="nav-link text-slate-700 hover:text-blue-900">À propos</a>
              <a href="contact.html" class="nav-link text-slate-700 hover:text-blue-900">Contact</a>

              <a href="tel:+33681669806" class="hidden lg:inline-flex items-center gap-2 text-blue-900 font-semibold">
                <i data-feather="phone" class="w-4 h-4"></i>
                06 81 66 98 06
              </a>

              <a href="contact.html"
                 class="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-950 transition">
                <i data-feather="calendar" class="w-4 h-4"></i>
                RDV
              </a>
            </nav>

            <button class="md:hidden p-2 rounded-xl hover:bg-slate-100" id="mobile-menu-button" aria-label="Menu">
              <i data-feather="menu" class="w-6 h-6 text-slate-900"></i>
            </button>
          </div>

          <div id="mobile-menu" class="md:hidden hidden pb-4">
            <div class="flex flex-col space-y-3 pt-2">
              <a href="index.html" class="text-slate-700 hover:text-blue-900">Accueil</a>
              <a href="expertise.html" class="text-slate-700 hover:text-blue-900">Expertises</a>
              <a href="about.html" class="text-slate-700 hover:text-blue-900">À propos</a>
              <a href="contact.html" class="text-slate-700 hover:text-blue-900">Contact</a>
              <a href="tel:+33681669806" class="inline-flex items-center gap-2 text-blue-900 font-semibold">
                <i data-feather="phone" class="w-4 h-4"></i>
                06 81 66 98 06
              </a>
              <a href="contact.html" class="bg-blue-900 text-white px-4 py-2 rounded-xl font-semibold text-center hover:bg-blue-950 transition">
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </header>
    `;

    // Active link
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    this.querySelectorAll("nav a.nav-link").forEach(a => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href === path) a.classList.add("text-blue-900", "font-bold");
    });

    const btn = this.querySelector("#mobile-menu-button");
    const menu = this.querySelector("#mobile-menu");

    btn.addEventListener("click", () => {
      const isOpen = !menu.classList.contains("hidden");
      menu.classList.toggle("hidden");
      btn.innerHTML = isOpen
        ? `<i data-feather="menu" class="w-6 h-6 text-slate-900"></i>`
        : `<i data-feather="x" class="w-6 h-6 text-slate-900"></i>`;
      if (window.feather) feather.replace();
    });

    if (window.feather) feather.replace();
  }
}
customElements.define("custom-header", CustomHeader);
