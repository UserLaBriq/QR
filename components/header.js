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
              <a href="index.html" class="nav-link nav-page text-slate-700 hover:text-blue-900" data-page="index.html">Cabinet</a>

              <button id="expertise-trigger"
                class="nav-link nav-page flex items-center gap-1 text-slate-700 hover:text-blue-900 bg-transparent border-none cursor-pointer text-base p-0" data-page="expertise.html">
                Expertise
                <i data-feather="chevron-down" class="w-4 h-4" id="expertise-chevron" style="transition: transform 0.3s ease;"></i>
              </button>

              <a href="actualites.html" class="nav-link nav-page text-slate-700 hover:text-blue-900" data-page="actualites.html">Actualités</a>

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

            <div class="md:hidden flex items-center gap-4">
              <a href="tel:+33681669806"
                class="inline-flex items-center gap-10 text-blue-900 font-semibold py-2 ml-auto lg:hidden">
                <i data-feather="phone" class="w-5 h-5"></i>
              </a>

              <button class="p-2 rounded-xl hover:bg-slate-100" id="mobile-menu-button" aria-label="Menu">
                <i data-feather="menu" class="w-6 h-6 text-slate-900"></i>
              </button>
            </div>
          </div>

          <!-- MENU MOBILE -->
          <div id="mobile-menu" class="md:hidden hidden overflow-hidden"
            style="grid-template-rows:0fr; transition:grid-template-rows .35s cubic-bezier(0.22,1,0.36,1);">
            <div class="overflow-hidden" style="min-height:0">
              <div class="flex flex-col space-y-1 pt-2 pb-4">
                <a href="index.html" class="text-slate-700 hover:text-blue-900 py-2">Cabinet</a>

                <!-- Expertise accordion mobile -->
                <div>
                  <button id="mobile-expertise-trigger"
                    class="w-full flex items-center justify-between text-slate-700 hover:text-blue-900 py-2 bg-transparent border-none cursor-pointer text-base">
                    Expertise
                    <i data-feather="chevron-down" class="w-4 h-4" id="mobile-expertise-chevron" style="transition: transform 0.3s ease;"></i>
                  </button>
                  <div id="mobile-expertise-panel"
                    style="display:grid; grid-template-rows:0fr; transition:grid-template-rows .35s ease; overflow:hidden;">
                    <div class="overflow-hidden" style="min-height:0">
                      <div class="pl-3 border-l-2 border-blue-900/20 ml-1 mb-2 flex flex-col gap-1 mt-1">
                        <a href="expertise.html#penal" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                          <i data-feather="shield" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Défense Pénale
                        </a>
                        <a href="expertise.html#instruction" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                          <i data-feather="users" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Famille & International
                        </a>
                        <a href="expertise.html#assises" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                          <i data-feather="activity" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Corporel & Victimes
                        </a>
                        <a href="expertise.html#famille" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                          <i data-feather="plus-circle" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Responsabilité Médicale
                        </a>
                        <a href="expertise.html?modal=penal&item=gardeavue" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                          <i data-feather="lock" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Garde à Vue
                        </a>
                        <a href="expertise.html?modal=penal&item=assises" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                          <i data-feather="alert-circle" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Comparution Immédiate
                        </a>
                        <a href="expertise.html?modal=penal&item=assises" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                          <i data-feather="mic" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Audiences Pénales
                        </a>
                        <a href="expertise.html?modal=penal&item=violences" class="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 py-1.5">
                          <i data-feather="alert-triangle" class="w-3.5 h-3.5 text-amber-500 flex-shrink-0"></i>Violences Conjugales
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

                <a href="actualites.html" class="text-slate-700 hover:text-blue-900 py-2">Actualités</a>
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
        </div>

        <!-- MEGA MENU DESKTOP -->
        <div id="mega-menu" class="absolute left-0 right-0 z-40 hidden" style="top:100%;">
          <div id="mega-panel" style="
            background: linear-gradient(135deg, rgba(30,58,138,0.95) 0%, rgba(28,43,79,0.98) 100%);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255,255,255,0.08);
            transform: translateY(-12px);
            opacity: 0;
            transition: transform .35s cubic-bezier(0.22,1,0.36,1), opacity .3s ease;">
            <div class="container mx-auto px-4 py-10">
              <div class="grid grid-cols-1 md:grid-cols-[2fr_2fr_2fr] gap-10">

                <div class="flex flex-col gap-4">
                  <p class="text-xs uppercase tracking-widest text-white/40 mb-5" style="font-family:'Barlow Condensed',sans-serif;font-weight:800;">Domaines d'intervention</p>
                  <a href="expertise.html#penal" class="group flex items-center gap-3 py-3 transition-colors">
                    <span class="h-1 w-2 rounded-full bg-amber-300 flex-shrink-0"></span>
                    <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Défense Pénale</span>
                  </a>
                  <a href="expertise.html#famille-international" class="group flex items-center gap-3 py-3 transition-colors">
                    <span class="h-1 w-2 rounded-full bg-amber-300 flex-shrink-0"></span>
                    <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Familles & International</span>
                  </a>
                  <a href="expertise.html#corporel" class="group flex items-center gap-3 py-3 transition-colors">
                    <span class="h-1 w-2 rounded-full bg-amber-300 flex-shrink-0"></span>
                    <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Corporel & Victimes</span>
                  </a>
                  <a href="expertise.html#medical" class="group flex items-center gap-3 py-3 transition-colors">
                    <span class="h-1 w-2 rounded-full bg-amber-300 flex-shrink-0"></span>
                    <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Responsabilité Médicale</span>
                  </a>
                </div>

                <div class="flex flex-col gap-4">
                  <p class="text-xs uppercase tracking-widest text-white/40 mb-5" style="font-family:'Barlow Condensed',sans-serif;font-weight:800;">Urgences</p>
                  <a href="expertise.html?modal=penal&item=gardeavue" class="group flex items-center gap-3 py-3 transition-colors">
                    <span class="h-1 w-2 rounded-full bg-amber-300 flex-shrink-0"></span>
                    <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Garde à Vue</span>
                  </a>
                  <a href="expertise.html?modal=penal&item=assises" class="group flex items-center gap-3 py-3 transition-colors">
                    <span class="h-1 w-2 rounded-full bg-amber-300 flex-shrink-0"></span>
                    <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Comparution Immédiate</span>
                  </a>
                  <a href="expertise.html?modal=penal&item=assises" class="group flex items-center gap-3 py-3 transition-colors">
                    <span class="h-1 w-2 rounded-full bg-amber-300 flex-shrink-0"></span>
                    <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Audiences Pénales</span>
                  </a>
                  <a href="expertise.html?modal=penal&item=violences" class="group flex items-center gap-3 py-3 transition-colors">
                    <span class="h-1 w-2 rounded-full bg-amber-300 flex-shrink-0"></span>
                    <span class="text-white/80 group-hover:text-white text-sm font-medium transition-colors">Violences Conjugales</span>
                  </a>
                </div>

                <div class="flex flex-col gap-4">
                  <p class="text-xs uppercase tracking-widest text-white/40 mb-1 pl-4" style="font-family:'Barlow Condensed',sans-serif;font-weight:800;">Contact</p>
                  <a href="contact.html" class="group flex items-center gap-4 p-4 rounded-2xl transition-colors">
                    <div class="w-9 h-9 rounded-xl bg-amber-300/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-300/30 transition-colors">
                      <i data-feather="calendar" class="w-5 h-5 text-amber-200"></i>
                    </div>
                    <p class="text-white/70 text-sm">Rendez-vous</p>
                  </a>
                  <a href="contact.html" class="group flex items-center gap-4 p-4 rounded-2xl transition-colors">
                    <div class="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors">
                      <i data-feather="message-square" class="w-5 h-5 text-white/70"></i>
                    </div>
                    <p class="text-white/70 text-sm">Exposer ma situation</p>
                  </a>
                  <a href="actualites.html" class="group flex items-center gap-4 p-4 rounded-2xl transition-colors">
                    <div class="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors">
                      <i data-feather="rss" class="w-5 h-5 text-white/70"></i>
                    </div>
                    <p class="text-white/70 text-sm">Actualités</p>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    `;

    // ── Active link — fonctionne pour toutes les pages ──
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase().split('?')[0].split('#')[0];
    this.querySelectorAll('.nav-page').forEach(el => {
      const page = (el.dataset.page || '').toLowerCase();
      if (page === path) {
        el.classList.add('text-blue-900', 'font-bold');
        el.classList.remove('text-slate-700');
      }
    });

    // ── Mobile menu burger ──
    const btn        = this.querySelector('#mobile-menu-button');
    const mobileMenu = this.querySelector('#mobile-menu');
    let menuOpen = false;

    btn.addEventListener('click', () => {
      menuOpen = !menuOpen;
      if (menuOpen) {
        mobileMenu.style.display = 'grid';
        mobileMenu.offsetHeight;
        mobileMenu.style.gridTemplateRows = '1fr';
      } else {
        mobileMenu.style.gridTemplateRows = '0fr';
        setTimeout(() => { if (!menuOpen) mobileMenu.style.display = 'none'; }, 360);
      }
      btn.innerHTML = menuOpen
        ? `<i data-feather="x" class="w-6 h-6 text-slate-900"></i>`
        : `<i data-feather="menu" class="w-6 h-6 text-slate-900"></i>`;
      if (window.feather) feather.replace();
    });

    // ── Mobile expertise accordion ──
    const mobileTrigger = this.querySelector('#mobile-expertise-trigger');
    const mobilePanel   = this.querySelector('#mobile-expertise-panel');
    let mobileOpen = false;
    mobileTrigger.addEventListener('click', () => {
      mobileOpen = !mobileOpen;
      mobilePanel.style.gridTemplateRows = mobileOpen ? '1fr' : '0fr';
      const mChev = this.querySelector('#mobile-expertise-chevron');
      if (mChev) mChev.style.transform = mobileOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    // ── Desktop mega menu ──
    const trigger  = this.querySelector('#expertise-trigger');
    const megaMenu = this.querySelector('#mega-menu');
    const panel    = this.querySelector('#mega-panel');
    let isOpen = false;

    let backdrop = document.getElementById('mega-backdrop-global');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'mega-backdrop-global';
      backdrop.style.cssText = `position:fixed;inset:0;background:rgba(15,23,42,0.45);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:40;opacity:0;transition:opacity .3s ease;pointer-events:none;`;
      document.body.appendChild(backdrop);
    }

    function openMega() {
      isOpen = true;
      megaMenu.classList.remove('hidden');
      megaMenu.offsetHeight;
      panel.style.transform        = 'translateY(0)';
      panel.style.opacity          = '1';
      backdrop.style.opacity       = '1';
      backdrop.style.pointerEvents = 'auto';
      const chev = document.querySelector('#expertise-chevron');
      if (chev) chev.style.transform = 'rotate(180deg)';
    }

    function closeMega() {
      isOpen = false;
      panel.style.transform        = 'translateY(-12px)';
      panel.style.opacity          = '0';
      backdrop.style.opacity       = '0';
      backdrop.style.pointerEvents = 'none';
      const chev = document.querySelector('#expertise-chevron');
      if (chev) chev.style.transform = 'rotate(0deg)';
      setTimeout(() => { if (!isOpen) megaMenu.classList.add('hidden'); }, 350);
    }

    trigger.addEventListener('click', () => isOpen ? closeMega() : openMega());
    backdrop.addEventListener('click', closeMega);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen) closeMega(); });

    if (window.feather) feather.replace();
  }
}
customElements.define('custom-header', CustomHeader);