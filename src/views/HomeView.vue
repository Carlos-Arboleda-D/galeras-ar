<script setup>
import appPantallaInicio from '../assets/images/app-pantalla-inicio.jpg';
import cuadroVivo from '../assets/images/cuadro-vivo.png';
import festivalAlgarroba from '../assets/images/festival-algarroba.jpg';
import parquePrincipal from '../assets/images/parque-principal.jpg';
import qrTambora from '../assets/images/qr-tambora.jpg';
import qrLlamador from '../assets/images/qr-llamador.jpg';
import qrMaracas from '../assets/images/qr-maracas.jpg';
import qrTamborAlegre from '../assets/images/qr-tambor-alegre.jpg';
import qrMonumento from '../assets/images/qr-monumento-algarroba.jpg';

const APK_URL = 'https://github.com/Carlos-Arboleda-D/galeras-ar/releases/download/v1.0.0/GalerasAR.apk';

const pasos = [
  {
    id: '01',
    title: 'Descarga la app',
    text: 'Un archivo para Android, sin cuenta ni registro.',
    bg: 'rgba(192,82,43,0.10)',
    icon: 'download',
  },
  {
    id: '02',
    title: 'Busca un código',
    text: 'En el sitio físico, o descárgalo desde esta página.',
    bg: 'rgba(192,82,43,0.10)',
    icon: 'qr',
  },
  {
    id: '03',
    title: 'Apunta tu cámara',
    text: 'La app reconoce el sitio y puedes agregarlo a favoritos si te gusta.',
    bg: 'rgba(192,82,43,0.10)',
    icon: 'camera',
  },
  {
    id: '04',
    title: 'Ve a favoritos',
    text: 'Observa el modelo 3D desde todos sus ángulos cuando quieras.',
    bg: 'rgba(232,168,56,0.24)',
    icon: 'cube',
  },
];

const qrItems = [
  { id: 'qr-tambora', name: 'Tambora', tag: 'Instrumento', img: qrTambora },
  { id: 'qr-llamador', name: 'Llamador', tag: 'Instrumento', img: qrLlamador },
  { id: 'qr-maracas', name: 'Maracas', tag: 'Instrumento', img: qrMaracas },
  { id: 'qr-tambor-alegre', name: 'Tambor Alegre', tag: 'Instrumento', img: qrTamborAlegre },
  { id: 'qr-monumento-algarroba', name: 'Monumento a la Algarroba', tag: 'Sitio', img: qrMonumento },
];
</script>

<template>
  <div>
    <section id="top" class="hero container">
      <div class="hero-copy" v-reveal>
        <span class="badge">
          <span class="dot"></span>
          <span class="badge-text">Galeras, Sucre · Colombia</span>
        </span>
        <h1 class="hero-title">Descubre el patrimonio vivo de Galeras en Realidad Aumentada</h1>
        <p class="hero-desc">Escanea un código en el sitio y mira los instrumentos tradicionales y las esculturas del municipio en 3D, con la historia de los Cuadros Vivos declarados Patrimonio de la Humanidad por la UNESCO en 2024.</p>
        <div class="hero-actions">
          <a :href="APK_URL" download class="btn btn-primary hero-btn">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>
            <span>DESCARGAR PARA ANDROID</span>
          </a>
          <RouterLink to="/codigos-qr" class="btn btn-secondary hero-btn">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="6.5" height="6.5" rx="1.4"></rect><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4"></rect><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4"></rect><path d="M14 14h2v2h-2zM18 14h2v2M14 18h2v2h4v-2"></path></svg>
            <span>VER CÓDIGOS QR</span>
          </RouterLink>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">5</span>
            <span class="stat-label">Piezas en 3D</span>
          </div>
          <div class="stat">
            <span class="stat-num">UNESCO</span>
            <span class="stat-label">Cuadros Vivos, 2024</span>
          </div>
          <div class="stat">
            <span class="stat-num">Gratis</span>
            <span class="stat-label">Sin cuenta ni registro</span>
          </div>
        </div>
      </div>

      <div class="hero-visual-wrap" v-reveal="120">
        <div class="hero-phone">
          <div class="hero-phone-glow"></div>
          <div class="hero-phone-body">
            <div class="hero-phone-screen">
              <img :src="appPantallaInicio" alt="Pantalla de inicio de Galeras AR" class="hero-phone-img" />
              <div class="hero-phone-gradient"></div>
              <div class="hero-phone-caption">
                <span class="hero-phone-title">Galeras AR</span>
                <span class="hero-phone-sub">Turismo Cultural · Galeras, Sucre</span>
              </div>
              <span class="hero-phone-tag">
                <span class="dot dot-accent"></span>
                <span>Realidad aumentada</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="como-funciona" class="section section-white">
      <div class="container section-stack">
        <div class="section-heading" v-reveal>
          <span class="eyebrow">Cómo funciona</span>
          <h2 class="section-title">Cuatro pasos y ya estás dentro</h2>
        </div>
        <div class="steps-grid">
          <div v-for="(paso, i) in pasos" :key="paso.id" class="step-card" v-reveal="i * 90">
            <div class="step-top">
              <div class="step-icon" :style="{ background: paso.bg }">
                <svg v-if="paso.icon === 'download'" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>
                <svg v-else-if="paso.icon === 'qr'" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="6.5" height="6.5" rx="1.4"></rect><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4"></rect><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4"></rect><path d="M14 14h2v2h-2zM18 14h2v2M14 18h2v2h4v-2"></path></svg>
                <svg v-else-if="paso.icon === 'camera'" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.5h3.2L9 6h6l1.8 2.5H20v10H4z"></path><circle cx="12" cy="13" r="3.2"></circle></svg>
                <svg v-else width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.4l7.4 4.3v8.6L12 20.6 4.6 16.3V7.7z"></path><path d="M4.6 7.7L12 12l7.4-4.3M12 12v8.6"></path></svg>
              </div>
              <span class="step-num">{{ paso.id }}</span>
            </div>
            <span class="step-title">{{ paso.title }}</span>
            <span class="step-text">{{ paso.text }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="patrimonio" class="section">
      <div class="container patrimonio-grid">
        <div class="patrimonio-copy" v-reveal>
          <span class="eyebrow">Sobre el patrimonio</span>
          <h2 class="section-title">Escenas que los vecinos montan y el mundo reconoció</h2>
          <p class="body-text">Los Cuadros Vivos son composiciones que las cuadrillas de Galeras arman y congelan frente al público: personajes caracterizados, objetos de casa y oficios del municipio dispuestos como una pintura. En 2024 la tradición fue declarada Patrimonio Cultural Inmaterial de la Humanidad.</p>
          <p class="body-text">Su escenario mayor es el Festival Folclórico de la Algarroba, cada enero: comparsas, tamboras y gaitas que reúnen a varias generaciones alrededor de la música y los oficios tradicionales.</p>
          <div class="tag-row">
            <span class="tag tag-accent">
              <span class="dot"></span>
              <span>UNESCO 2024</span>
            </span>
            <span class="tag">Festival · Enero</span>
          </div>
        </div>
        <div class="patrimonio-gallery" v-reveal="120">
          <div class="gallery-main">
            <img :src="cuadroVivo" alt="Escena de Cuadro Vivo en Galeras" />
          </div>
          <div class="gallery-small">
            <img :src="festivalAlgarroba" alt="Festival Folclórico de la Algarroba" />
          </div>
          <div class="gallery-small">
            <img :src="parquePrincipal" alt="Parque principal de Galeras" />
          </div>
        </div>
      </div>
    </section>

    <section id="descargar" class="section section-white">
      <div class="container descargar-grid">
        <div class="descargar-copy" v-reveal>
          <span class="eyebrow">Descargar</span>
          <h2 class="section-title">Instálala directamente en tu Android</h2>
          <p class="body-text">Galeras AR todavía no está en Play Store, así que la descarga es directa: un archivo APK que instalas tú mismo. Es el mismo procedimiento que usan muchas apps locales e institucionales antes de publicarse en la tienda.</p>
          <a :href="APK_URL" download class="btn btn-primary descargar-btn">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>
            <span>DESCARGAR APK</span>
          </a>
          <span class="fine-print">Android 8 o superior · ~293 MB · v1.0.0</span>
        </div>

        <div class="steps-card" v-reveal="120">
          <div class="steps-card-head">
            <div class="steps-card-icon">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4l8 3.6v5.2c0 4.4-3.3 7.6-8 8.8-4.7-1.2-8-4.4-8-8.8V7.6z"></path><path d="M9.2 12.2l2 2 3.6-4"></path></svg>
            </div>
            <span class="steps-card-title">Cómo instalarla, paso a paso</span>
          </div>
          <p class="body-text small">Android mostrará un aviso porque el archivo no viene de la tienda. Es un mensaje normal: solo pide tu permiso una vez.</p>
          <ol class="mini-steps">
            <li><span class="mini-num">1</span><span>Toca <strong>Descargar APK</strong> y espera a que termine.</span></li>
            <li><span class="mini-num">2</span><span>Abre el archivo desde la notificación de descarga.</span></li>
            <li><span class="mini-num">3</span><span>Cuando aparezca el aviso, toca <strong>Ajustes</strong> y activa <strong>Permitir de esta fuente</strong>.</span></li>
            <li><span class="mini-num">4</span><span>Vuelve atrás, toca <strong>Instalar</strong> y acepta el permiso de cámara al abrirla.</span></li>
          </ol>
          <div class="steps-card-note">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8A7A6A" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 11v6M12 7.6v.1"></path></svg>
            <span>La app no pide cuenta ni datos personales: tus favoritos y tu progreso se guardan solo en tu teléfono.</span>
          </div>
        </div>
      </div>
    </section>

    <section id="qr" class="section container qr-section">
      <div class="qr-head" v-reveal>
        <div class="qr-heading-copy">
          <span class="eyebrow">Códigos QR</span>
          <h2 class="section-title">El set completo, listo para imprimir</h2>
          <p class="body-text">Escanéalos desde la pantalla con la app abierta, o descárgalos en alta resolución para señalizar los sitios del municipio.</p>
        </div>
        <RouterLink to="/codigos-qr" class="btn btn-secondary qr-all-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>
          <span>VER TODOS LOS QR</span>
        </RouterLink>
      </div>

      <div class="qr-grid">
        <div v-for="(item, i) in qrItems" :key="item.id" class="qr-card" v-reveal="i * 70">
          <div class="qr-image">
            <img :src="item.img" :alt="`Código QR de ${item.name}`" />
          </div>
          <div class="qr-card-foot">
            <div class="qr-card-info">
              <span class="qr-card-name">{{ item.name }}</span>
              <span class="qr-card-tag">{{ item.tag }}</span>
            </div>
            <a :href="item.img" :download="`QR-${item.name}.jpg`" class="qr-download" title="Descargar QR">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section {
  border-top: 1px solid transparent;
}

.section-white {
  background: var(--color-surface);
  border-top: 1px solid rgba(30, 20, 10, 0.06);
  border-bottom: 1px solid rgba(30, 20, 10, 0.06);
}

.section-stack {
  padding: 68px 0;
  display: flex;
  flex-direction: column;
  gap: 34px;
}

.section-heading {
  display: flex;
  flex-direction: column;
  gap: 9px;
  max-width: 620px;
}

.section-title {
  margin: 0;
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.1;
  text-wrap: pretty;
}

.body-text {
  margin: 0;
  font-size: 16px;
  line-height: 1.65;
  font-weight: 500;
  color: var(--color-text-muted);
  text-wrap: pretty;
}

.body-text.small {
  font-size: 14px;
  line-height: 1.6;
}

/* Hero */
.hero {
  padding: 64px 24px 72px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 56px;
  align-items: center;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-width: 0;
}

.badge {
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(232, 168, 56, 0.22);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-primary);
}

.dot-accent {
  background: var(--color-accent);
}

.badge-text {
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 1.3px;
  text-transform: uppercase;
}

.hero-title {
  margin: 0;
  font-size: clamp(34px, 4.4vw, 56px);
  font-weight: 800;
  letter-spacing: -1.6px;
  line-height: 1.04;
  text-wrap: pretty;
}

.hero-desc {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  font-weight: 500;
  color: var(--color-text-muted);
  max-width: 520px;
  text-wrap: pretty;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 4px;
}

.hero-btn {
  height: 60px;
  padding: 0 26px;
  font-size: 15px;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  padding-top: 12px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-num {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.6px;
}

.stat-label {
  font-size: 12.5px;
  font-weight: 700;
  color: var(--color-text-muted);
}

.hero-visual-wrap {
  display: flex;
  justify-content: center;
  min-width: 0;
}

.hero-phone {
  position: relative;
  width: 100%;
  max-width: 330px;
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (prefers-reduced-motion: reduce) {
  .hero-phone {
    animation: none;
  }
}

.hero-phone-glow {
  position: absolute;
  inset: -26px -18px;
  border-radius: 44px;
  background: radial-gradient(80% 60% at 50% 30%, rgba(232, 168, 56, 0.34) 0%, rgba(245, 243, 240, 0) 70%);
}

.hero-phone-body {
  position: relative;
  aspect-ratio: 390 / 760;
  border-radius: 34px;
  background: var(--color-text);
  padding: 9px;
  box-shadow: 0 26px 54px rgba(30, 20, 10, 0.28);
}

.hero-phone-screen {
  width: 100%;
  height: 100%;
  border-radius: 26px;
  overflow: hidden;
  background: var(--color-image-bg);
  position: relative;
}

.hero-phone-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-phone-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(20, 12, 4, 0.86) 0%, rgba(20, 12, 4, 0.30) 34%, rgba(20, 12, 4, 0) 66%);
}

.hero-phone-caption {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 22px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.hero-phone-title {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.6px;
  color: #FFFFFF;
  line-height: 1.05;
}

.hero-phone-sub {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.84);
}

.hero-phone-tag {
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  color: var(--color-text);
}

/* Cómo funciona */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
}

.step-card {
  background: var(--color-surface-muted);
  border-radius: var(--radius-xl);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.step-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.step-icon {
  width: 46px;
  height: 46px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-num {
  font-size: 13px;
  font-weight: 800;
  color: var(--color-text-muted);
  letter-spacing: 0.5px;
}

.step-title {
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.3px;
}

.step-text {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.55;
  color: var(--color-text-muted);
  text-wrap: pretty;
}

/* Patrimonio preview */
.patrimonio-grid {
  padding: 72px 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 44px;
  align-items: center;
}

.patrimonio-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  padding-top: 4px;
}

.tag {
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(30, 20, 10, 0.06);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  color: var(--color-text);
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.tag-accent {
  background: var(--color-accent);
}

.patrimonio-gallery {
  min-width: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.gallery-main {
  grid-column: 1 / -1;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--color-image-bg);
  box-shadow: var(--shadow-lg);
}

.gallery-main img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-main:hover img,
.gallery-small:hover img {
  transform: scale(1.05);
}

.gallery-small {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-image-bg);
  box-shadow: 0 6px 18px rgba(30, 20, 10, 0.10);
}

.gallery-small img {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* Descargar preview */
.descargar-grid {
  padding: 68px 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 34px;
  align-items: start;
}

.descargar-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.descargar-btn {
  align-self: flex-start;
  height: 64px;
  padding: 0 30px;
  font-size: 16px;
  box-shadow: 0 8px 18px rgba(192, 82, 43, 0.32);
}

.fine-print {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-muted);
}

.steps-card {
  min-width: 0;
  background: var(--color-surface-muted);
  border-radius: var(--radius-xl);
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 6px 18px rgba(30, 20, 10, 0.06);
}

.steps-card-head {
  display: flex;
  align-items: center;
  gap: 11px;
}

.steps-card-icon {
  width: 40px;
  height: 40px;
  flex: none;
  border-radius: 13px;
  background: rgba(232, 168, 56, 0.26);
  display: flex;
  align-items: center;
  justify-content: center;
}

.steps-card-title {
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.3px;
}

.mini-steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.mini-steps li {
  display: flex;
  gap: 13px;
  align-items: flex-start;
  font-size: 14.5px;
  font-weight: 600;
  line-height: 1.5;
  text-wrap: pretty;
}

.mini-num {
  width: 26px;
  height: 26px;
  flex: none;
  border-radius: 999px;
  background: var(--color-primary);
  color: #FFFFFF;
  font-size: 12.5px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.steps-card-note {
  display: flex;
  gap: 11px;
  align-items: flex-start;
  padding-top: 14px;
  border-top: 1px solid rgba(30, 20, 10, 0.08);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.55;
  color: var(--color-text-muted);
  text-wrap: pretty;
}

.steps-card-note svg {
  flex: none;
  margin-top: 2px;
}

/* QR preview */
.qr-section {
  padding: 72px 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.qr-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.qr-heading-copy {
  display: flex;
  flex-direction: column;
  gap: 9px;
  max-width: 600px;
}

.qr-all-btn {
  height: 54px;
  padding: 0 22px;
  font-size: 14px;
  letter-spacing: 0.6px;
}

.qr-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 18px;
}

.qr-card {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: var(--shadow-md);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.qr-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 26px rgba(30, 20, 10, 0.14);
}

.qr-image {
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: #FFFFFF;
  box-shadow: inset 0 0 0 1px rgba(30, 20, 10, 0.08);
}

.qr-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
}

.qr-card-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.qr-card-info {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.qr-card-name {
  font-size: 15.5px;
  font-weight: 800;
  letter-spacing: -0.2px;
}

.qr-card-tag {
  font-size: 11.5px;
  font-weight: 700;
  color: var(--color-text-muted);
}

.qr-download {
  width: 40px;
  height: 40px;
  flex: none;
  border-radius: 13px;
  background: rgba(192, 82, 43, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.qr-download:hover {
  background: rgba(192, 82, 43, 0.18);
}
</style>
