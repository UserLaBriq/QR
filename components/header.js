class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-white/90 backdrop-blur border-b sticky top-0 z-50">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            <a href="index.html" class="text-xl font-bold text-gray-800">
              <span class="text-blue-800">QR</span> Avocat
            </a>

            <nav class="hidden md:flex items-center space-x-8" id="desktop-nav">
              <a href="index.html" class="nav-link text-gray-700 hover:text-blue-800">Accueil</a>
              <a href="expertise.html" class="nav-link text-gray-700 hover:text-blue-800">Expertises</a>
              <a href="about.html" class="nav-link text-gray-700 hover:text-blue-800">À propos</a>
              <a href="contact.html" class="nav-link text-gray-700 hover:text-blue-800">Contact</a>
              <a href="tel:+33681669806" class="flex items-center gap-2 text-blue-800 font-medium">
                <i data-feather="phone" class="w-4 h-4"></i>
                06 81 66 98 06
              </a>
            </nav>

            <button class="md:hidden p-2 rounded-lg hover:bg-gray-100" id="mobile-menu-button" aria-label="Menu">
              <i data-feather="menu" class="w-6 h-6 text-gray-800"></i>
            </button>
          </div>

          <div id="mobile-menu" class="md:hidden hidden pb-4">
            <div class="flex flex-col space-y-3">
              <a href="index.html" class="text-gray-700 hover:text-blue-800">Accueil</a>
              <a href="expertise.html" class="text-gray-700 hover:text-blue-800">Expertises</a>
              <a href="about.html" class="text-gray-700 hover:text-blue-800">À propos</a>
              <a href="contact.html" class="text-gray-700 hover:text-blue-800">Contact</a>
              <a href="tel:+33681669806" class="flex items-center gap-2 text-blue-800 font-medium">
                <i data-feather="phone" class="w-4 h-4"></i>
                06 81 66 98 06
              </a>
            </div>
          </div>
        </div>
      </header>
    `;

    // Active link styling
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    this.querySelectorAll("nav a.nav-link").forEach(a => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href === path) {
        a.classList.add("text-blue-800", "font-bold");
      }
    });

    // Mobile menu toggle
    const btn = this.querySelector("#mobile-menu-button");
    const menu = this.querySelector("#mobile-menu");

    btn.addEventListener("click", () => {
      const isOpen = !menu.classList.contains("hidden");
      menu.classList.toggle("hidden");

      // swap icon
      btn.innerHTML = isOpen
        ? `<i data-feather="menu" class="w-6 h-6 text-gray-800"></i>`
        : `<i data-feather="x" class="w-6 h-6 text-gray-800"></i>`;

      if (window.feather) feather.replace();
    });

    if (window.feather) feather.replace();
  }
}

customElements.define("custom-header", CustomHeader);
