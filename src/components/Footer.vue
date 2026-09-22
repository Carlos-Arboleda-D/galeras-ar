<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand">
            <span class="brand-icon">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 9V6.5A2.5 2.5 0 0 1 6.5 4H9"></path>
                <path d="M20 9V6.5A2.5 2.5 0 0 0 17.5 4H15"></path>
                <path d="M4 15v2.5A2.5 2.5 0 0 0 6.5 20H9"></path>
                <path d="M20 15v2.5A2.5 2.5 0 0 1 17.5 20H15"></path>
                <circle cx="12" cy="12" r="2.6" stroke="#E8A838"></circle>
              </svg>
            </span>
            <span class="footer-brand-name">Galeras AR</span>
          </div>
          <span class="footer-text">Turismo cultural en realidad aumentada para Galeras, Sucre.</span>
        </div>

        <div class="footer-col">
          <span class="footer-heading">Navegación</span>
          <RouterLink to="/como-funciona" class="footer-link">Cómo funciona</RouterLink>
          <RouterLink to="/patrimonio" class="footer-link">Patrimonio</RouterLink>
          <RouterLink to="/descargar" class="footer-link">Descargar la app</RouterLink>
          <RouterLink to="/codigos-qr" class="footer-link">Códigos QR</RouterLink>
        </div>

        <div class="footer-col">
          <span class="footer-heading">Contacto</span>
          <a href="mailto:hola@galerasar.co" class="footer-link">hola@galerasar.co</a>
          <RouterLink to="/contacto" class="footer-link">Formulario de contacto</RouterLink>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="footer-legal">Proyecto independiente de divulgación cultural. No está desarrollado ni avalado por la Alcaldía de Galeras. Los Cuadros Vivos y el Festival de la Algarroba pertenecen a la comunidad del municipio.</span>
        <span class="footer-copy">© {{ year }} Galeras AR</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--color-footer-bg);
  color: #FFFFFF;
}

.footer-inner {
  padding: 56px 24px 34px;
  display: flex;
  flex-direction: column;
  gap: 34px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 11px;
  min-width: 0;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 11px;
}

.brand-icon {
  width: 36px;
  height: 36px;
  border-radius: 11px;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
}

.footer-brand-name {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.2px;
}

.footer-text {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
  max-width: 300px;
  text-wrap: pretty;
}

.footer-heading {
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: var(--color-accent);
}

.footer-link {
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.80);
}

.footer-link:hover {
  color: var(--color-accent);
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}

.footer-legal {
  font-size: 12.5px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.58);
  max-width: 640px;
  text-wrap: pretty;
}

.footer-copy {
  font-size: 12.5px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.58);
  white-space: nowrap;
}
</style>
