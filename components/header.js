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
              <a href="index.html" class="nav-link text-slate-700 hover:text-blue-900">Cabinet</a>

              <button id="expertise-trigger"
                class="nav-link flex items-center gap-1 text-slate-700 hover:text-blue-900 bg-transparent border-none cursor-pointer text-base">
                Expertise
                <i data-feather="chevron-down" class="w-4 h-4 transition-transform duration-300" id="expertise-chevron"></i>
              </button>

              <a href="about.html" class="nav-link text-slate-700 hover:text-blue-900">Actualités</a>

              <a href="tel:+33681669806" class="hidden lg:inline-flex items-center gap-2 text-blue-900 font-semibold">
                <i data-feather="phone" class="w-4 h-4"></i>
                06 81 66 98 06
              </a>

              <a href="contact.html"
                 class="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-950 transition">
                <i data-feather="calendar" class="w-4 h-4"></i>
                Contact
              </a>
            </nav>

            <button class="md:hidden p-2 rounded-xl hover:bg-slate-100" id="mobile-menu-button" aria-label="Menu">
              <i data-feather="menu" class="w-6 h-6 text-slate-900"></i>
            </button>
          </div>

          <!-- MENU MOBILE -->
          <div id="mobile-menu" class="md:hidden hidden pb-4">
            <div class="flex flex-col space-y-1 pt-2">
              <a href="index.html" class="text-slate-700 hover:text-blue-900 py-2">Cabinet</a>

              <!-- Expertise accordion mobile -->
              <div>
                <button id="mobile-expertise-trigger"
                  class="w-full flex items-center justify-between text-slate-700 hover:text-blue-900 py-2 bg-transparent border-none cursor-pointer text-base">
                  Expertise
                  <i data-feather="chevron-down" class="w-4 h-4 transition-transform duration-300" id="mobile-expertise-chevron"></i>
                </button>
                <div id="mobile-expertise-panel"
                  style="display:grid; grid-template-rows:0fr; transition:grid-template-rows .35s ease;">
                  <div class="overflow-hidden">
                    <div class="pl-3 border-l-2 border-blue-900/20 ml-1 mb-2 flex flex-col gap-1 mt-1">
                      <a href="expertise.html#penal" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                        <i data-feather="shield" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Défense pénale
                      </a>
                      <a href="expertise.html#instruction" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                        <i data-feather="file-text" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Mise en examen & instruction
                      </a>
                      <a href="expertise.html#assises" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                        <i data-feather="briefcase" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Cour d'assises & correctionnel
                      </a>
                      <a href="expertise.html#famille" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                        <i data-feather="users" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Famille & violences conjugales
                      </a>
                      <a href="expertise.html#victimes" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                        <i data-feather="heart" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Victimes & indemnisation
                      </a>
                      <a href="expertise.html#international" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                        <i data-feather="globe" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Procédures internationales
                      </a>
                      <a href="contact.html" class="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 py-1.5 mt-1">
                        <i data-feather="calendar" class="w-3.5 h-3.5 flex-shrink-0"></i>Prendre RDV
                      </a>
                      <a href="contact.html" class="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 py-1.5">
                        <i data-feather="message-square" class="w-3.5 h-3.5 flex-shrink-0"></i>Exposer ma situation
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <a href="about.html" class="text-slate-700 hover:text-blue-900 py-2">Actualités</a>
              <a href="tel:+33681669806" class="inline-flex items-center gap-2 text-blue-900 font-semibold py-2">
                <i data-feather="phone" class="w-4 h-4"></i>
                06 81 66 98 06
              </a>
              <a href="contact.html" class="bg-blue-900 text-white px-4 py-2 rounded-xl font-semibold text-center hover:bg-blue-950 transition mt-1">
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>

        <!-- MEGA MENU DESKTOP -->
        <div id="mega-menu" class="absolute left-0 right-0 z-40 hidden" style="top:100%;">

          <div id="mega-backdrop"
            style="position:fixed; inset:0; background:rgba(15,23,42,0.45); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); z-index:-1; opacity:0; transition:opacity .3s ease; pointer-events:none;">
          </div>

          <div id="mega-panel" style="
            background: linear-gradient(135deg, rgba(30,58,138,0.95) 0%, rgba(15,23,42,0.98) 100%);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255,255,255,0.08);
            transform: translateY(-12px);
            opacity: 0;
            transition: transform .35s cubic-bezier(0.22,1,0.36,1), opacity .3s ease;">
            <div class="container mx-auto px-4 py-10">
              <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 max-w-5xl">

                <div>
                  <p class="text-xs uppercase tracking-widest text-white/40 mb-5"
                    style="font-family:'Barlow Condensed',sans-serif; font-weight:800;">
                    Domaines d'intervention
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1">
                    <a href="expertise.html#penal" class="group flex items-center gap-3 py-3 border-b border-white/10 hover:border-amber-300/50 transition-colors">
                      <i data-feather="shield" class="w-4 h-4 text-amber-300/70 group-hover:text-amber-300 flex-shrink-0"></i>
                      <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Défense pénale</span>
                    </a>
                    <a href="expertise.html#instruction" class="group flex items-center gap-3 py-3 border-b border-white/10 hover:border-amber-300/50 transition-colors">
                      <i data-feather="file-text" class="w-4 h-4 text-amber-300/70 group-hover:text-amber-300 flex-shrink-0"></i>
                      <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Mise en examen & instruction</span>
                    </a>
                    <a href="expertise.html#assises" class="group flex items-center gap-3 py-3 border-b border-white/10 hover:border-amber-300/50 transition-colors">
                      <i data-feather="briefcase" class="w-4 h-4 text-amber-300/70 group-hover:text-amber-300 flex-shrink-0"></i>
                      <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Cour d'assises & correctionnel</span>
                    </a>
                    <a href="expertise.html#famille" class="group flex items-center gap-3 py-3 border-b border-white/10 hover:border-amber-300/50 transition-colors">
                      <i data-feather="users" class="w-4 h-4 text-amber-300/70 group-hover:text-amber-300 flex-shrink-0"></i>
                      <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Famille & violences conjugales</span>
                    </a>
                    <a href="expertise.html#victimes" class="group flex items-center gap-3 py-3 border-b border-white/10 hover:border-amber-300/50 transition-colors">
                      <i data-feather="heart" class="w-4 h-4 text-amber-300/70 group-hover:text-amber-300 flex-shrink-0"></i>
                      <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Victimes & indemnisation</span>
                    </a>
                    <a href="expertise.html#international" class="group flex items-center gap-3 py-3 border-b border-white/10 hover:border-amber-300/50 transition-colors">
                      <i data-feather="globe" class="w-4 h-4 text-amber-300/70 group-hover:text-amber-300 flex-shrink-0"></i>
                      <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Procédures internationales</span>
                    </a>
                  </div>
                </div>

                <div class="flex flex-col gap-4">
                  <p class="text-xs uppercase tracking-widest text-white/40 mb-1"
                    style="font-family:'Barlow Condensed',sans-serif; font-weight:800;">
                    Contact
                  </p>
                  <a href="contact.html"
                    style="background:linear-gradient(135deg,rgba(251,191,36,0.15),rgba(251,191,36,0.05)); border:1px solid rgba(251,191,36,0.3);"
                    class="group flex items-center gap-4 p-4 rounded-2xl hover:border-amber-300/60 transition-colors">
                    <div class="w-10 h-10 rounded-xl bg-amber-300/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-300/30 transition-colors">
                      <i data-feather="calendar" class="w-5 h-5 text-amber-300"></i>
                    </div>
                    <div>
                      <p class="text-white font-semibold text-sm">Prendre RDV</p>
                      <p class="text-white/50 text-xs mt-0.5">Consultation au cabinet</p>
                    </div>
                  </a>
                  <a href="contact.html"
                    style="background:linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.1);"
                    class="group flex items-center gap-4 p-4 rounded-2xl hover:border-white/20 transition-colors">
                    <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors">
                      <i data-feather="message-square" class="w-5 h-5 text-white/70"></i>
                    </div>
                    <div>
                      <p class="text-white font-semibold text-sm">Exposer ma situation</p>
                      <p class="text-white/50 text-xs mt-0.5">Première analyse rapide</p>
                    </div>
                  </a>
                  <a href="about.html"
                    style="background:linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.1);"
                    class="group flex items-center gap-4 p-4 rounded-2xl hover:border-white/20 transition-colors">
                    <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors">
                      <i data-feather="rss" class="w-5 h-5 text-white/70"></i>
                    </div>
                    <div>
                      <p class="text-white font-semibold text-sm">Actualités</p>
                      <p class="text-white/50 text-xs mt-0.5">Dernières affaires & presse</p>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    `;

    // ── Active link ──
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    this.querySelectorAll("nav a.nav-link").forEach(a => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href === path) a.classList.add("text-blue-900", "font-bold");
    });

    // ── Mobile menu burger ──
    const btn  = this.querySelector("#mobile-menu-button");
    const mobileMenu = this.querySelector("#mobile-menu");
    btn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      btn.innerHTML = isOpen
        ? `<i data-feather="menu" class="w-6 h-6 text-slate-900"></i>`
        : `<i data-feather="x" class="w-6 h-6 text-slate-900"></i>`;
      if (window.feather) feather.replace();
    });

    // ── Mobile expertise accordion ──
    const mobileTrigger = this.querySelector("#mobile-expertise-trigger");
    const mobilePanel   = this.querySelector("#mobile-expertise-panel");
    const mobileChevron = this.querySelector("#mobile-expertise-chevron");
    let mobileOpen = false;
    mobileTrigger.addEventListener("click", () => {
      mobileOpen = !mobileOpen;
      mobilePanel.style.gridTemplateRows = mobileOpen ? "1fr" : "0fr";
      mobileChevron.style.transform = mobileOpen ? "rotate(180deg)" : "rotate(0deg)";
      if (window.feather) feather.replace();
    });

    // ── Desktop mega menu ──
    const trigger  = this.querySelector("#expertise-trigger");
    const megaMenu = this.querySelector("#mega-menu");
    const panel    = this.querySelector("#mega-panel");
    const chevron  = this.querySelector("#expertise-chevron");
    let isOpen = false;

    let backdrop = document.getElementById("mega-backdrop-global");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.id = "mega-backdrop-global";
      backdrop.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(15,23,42,0.45);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        z-index: 40;
        opacity: 0;
        transition: opacity .3s ease;
        pointer-events: none;
      `;
      document.body.appendChild(backdrop);
    }
    
    function openMega() {
      isOpen = true;
      megaMenu.classList.remove("hidden");
      megaMenu.offsetHeight; // force reflow
      panel.style.transform        = "translateY(0)";
      panel.style.opacity          = "1";
      backdrop.style.opacity       = "1";
      backdrop.style.pointerEvents = "auto";
      chevron.style.transform      = "rotate(180deg)";
      if (window.feather) feather.replace();
    }

    function closeMega() {
      isOpen = false;
      panel.style.transform        = "translateY(-12px)";
      panel.style.opacity          = "0";
      backdrop.style.opacity       = "0";
      backdrop.style.pointerEvents = "none";
      chevron.style.transform      = "rotate(0deg)";
      setTimeout(() => { if (!isOpen) megaMenu.classList.add("hidden"); }, 350);
    }

    trigger.addEventListener("click", () => isOpen ? closeMega() : openMega());
    backdrop.addEventListener("click", closeMega);
    document.addEventListener("keydown", e => { if (e.key === "Escape" && isOpen) closeMega(); });

    if (window.feather) feather.replace();
  }
}
customElements.define("custom-header", CustomHeader);