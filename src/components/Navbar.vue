<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const menuOpen = ref(false);
const scrolled = ref(false);

const links = [
  { path: '/', label: 'Inicio' },
  { path: '/como-funciona', label: 'Cómo funciona' },
  { path: '/patrimonio', label: 'Patrimonio' },
  { path: '/descargar', label: 'Descargar' },
  { path: '/codigos-qr', label: 'Códigos QR' },
  { path: '/contacto', label: 'Contacto' },
];

function isActive(path) {
  return route.path === path;
}

function closeMenu() {
  menuOpen.value = false;
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function onKeydown(e) {
  if (e.key === 'Escape') closeMenu();
}

function onScroll() {
  scrolled.value = window.scrollY > 6;
}

window.addEventListener('keydown', onKeydown);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
  window.removeEventListener('scroll', onScroll);
  document.body.classList.remove('no-scroll');
});

watch(() => route.path, closeMenu);

watch(menuOpen, (open) => {
  document.body.classList.toggle('no-scroll', open);
});
</script>

<template>
  <header class="navbar" :class="{ scrolled }">
    <div class="container navbar-inner">
      <RouterLink to="/" class="brand">
        <span class="brand-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 9V6.5A2.5 2.5 0 0 1 6.5 4H9"></path>
            <path d="M20 9V6.5A2.5 2.5 0 0 0 17.5 4H15"></path>
            <path d="M4 15v2.5A2.5 2.5 0 0 0 6.5 20H9"></path>
            <path d="M20 15v2.5A2.5 2.5 0 0 1 17.5 20H15"></path>
            <circle cx="12" cy="12" r="2.6" stroke="#E8A838"></circle>
          </svg>
        </span>
        <span class="brand-name">Galeras AR</span>
      </RouterLink>

      <nav class="nav-links">
        <RouterLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          :class="{ active: isActive(link.path) }"
        >
          {{ link.label }}
        </RouterLink>

        <RouterLink v-if="route.path !== '/descargar'" to="/descargar" class="btn btn-primary nav-cta">
          Descargar app
        </RouterLink>
      </nav>

      <button
        type="button"
        class="menu-toggle"
        :class="{ active: menuOpen }"
        :aria-expanded="menuOpen"
        aria-controls="mobile-drawer"
        aria-label="Abrir menú de navegación"
        @click="toggleMenu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="menuOpen" class="backdrop" @click="closeMenu"></div>
      </Transition>

      <Transition name="slide">
        <aside v-if="menuOpen" id="mobile-drawer" class="drawer" role="dialog" aria-modal="true" aria-label="Menú de navegación">
          <div class="drawer-head">
            <span class="brand">
              <span class="brand-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 9V6.5A2.5 2.5 0 0 1 6.5 4H9"></path>
                  <path d="M20 9V6.5A2.5 2.5 0 0 0 17.5 4H15"></path>
                  <path d="M4 15v2.5A2.5 2.5 0 0 0 6.5 20H9"></path>
                  <path d="M20 15v2.5A2.5 2.5 0 0 1 17.5 20H15"></path>
                  <circle cx="12" cy="12" r="2.6" stroke="#E8A838"></circle>
                </svg>
              </span>
              <span class="brand-name">Galeras AR</span>
            </span>
            <button type="button" class="drawer-close" aria-label="Cerrar menú" @click="closeMenu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 5l14 14M19 5L5 19"></path>
              </svg>
            </button>
          </div>

          <nav class="drawer-links">
            <RouterLink
              v-for="link in links"
              :key="link.path"
              :to="link.path"
              class="drawer-link"
              :class="{ active: isActive(link.path) }"
            >
              {{ link.label }}
            </RouterLink>
          </nav>

          <RouterLink v-if="route.path !== '/descargar'" to="/descargar" class="btn btn-primary drawer-cta">
            Descargar app
          </RouterLink>
        </aside>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(245, 243, 240, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(30, 20, 10, 0.07);
  transition: box-shadow 0.25s ease;
}

.navbar.scrolled {
  box-shadow: 0 6px 20px rgba(30, 20, 10, 0.08);
}

.navbar-inner {
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
  color: var(--color-text);
}

.brand-icon {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  box-shadow: 0 3px 10px rgba(192, 82, 43, 0.28);
}

.brand-name {
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.3px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: nowrap;
}

.nav-link {
  position: relative;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-text-muted);
  padding: 9px 13px;
  border-radius: 999px;
  white-space: nowrap;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link.active {
  font-weight: 800;
  color: var(--color-primary);
  background: rgba(192, 82, 43, 0.10);
}

.nav-cta {
  margin-left: 6px;
  height: auto;
  padding: 12px 20px;
  font-size: 14px;
  letter-spacing: 0.3px;
  white-space: nowrap;
}

/* Hamburger */
.menu-toggle {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  flex: none;
  border: none;
  border-radius: 12px;
  background: rgba(30, 20, 10, 0.06);
  cursor: pointer;
}

.menu-toggle .bar {
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background: var(--color-text);
  transition: transform 0.25s ease, opacity 0.2s ease;
}

.menu-toggle.active .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.active .bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Backdrop + drawer */
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(20, 12, 4, 0.45);
  z-index: 35;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 84vw);
  background: var(--color-surface);
  z-index: 40;
  display: flex;
  flex-direction: column;
  padding: 18px 20px calc(20px + env(safe-area-inset-bottom, 0px));
  box-shadow: -12px 0 32px rgba(30, 20, 10, 0.18);
}

.drawer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 18px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(30, 20, 10, 0.08);
}

.drawer-close {
  width: 38px;
  height: 38px;
  flex: none;
  border: none;
  border-radius: 12px;
  background: rgba(30, 20, 10, 0.06);
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.drawer-links {
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
}

.drawer-link {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text);
  padding: 14px 12px;
  border-radius: 14px;
  transition: color 0.2s ease, background 0.2s ease;
}

.drawer-link.active {
  color: var(--color-primary);
  background: rgba(192, 82, 43, 0.10);
  font-weight: 800;
}

.drawer-cta {
  margin-top: 16px;
  width: 100%;
  height: 56px;
  font-size: 15px;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.22s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active,
  .slide-enter-active,
  .slide-leave-active,
  .menu-toggle .bar,
  .nav-link,
  .drawer-link {
    transition: none !important;
  }
}

/* Breakpoint: switch to hamburger + drawer before the inline nav would
   ever get cramped (it starts crowding the CTA around ~990px). */
@media (max-width: 1040px) {
  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }
}
</style>
