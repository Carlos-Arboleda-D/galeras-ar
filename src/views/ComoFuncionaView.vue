<script setup>
import pasoImg1 from '../assets/images/como-funciona-paso1.jpg';
import pasoImg2 from '../assets/images/como-funciona-paso2.jpg';
import pasoImg3 from '../assets/images/como-funciona-paso3.jpg';
import pasoImg4 from '../assets/images/como-funciona-paso4.jpg';

const pasos = [
  {
    id: '01',
    title: 'Descarga la app',
    text: 'Un archivo APK para Android. Sin registro, sin datos personales: todo se guarda en tu teléfono.',
    icon: 'download',
    img: pasoImg1,
    imgAlt: 'Sección de descarga del sitio, con flecha señalando el botón Descargar APK',
  },
  {
    id: '02',
    title: 'Visita un sitio o abre un QR',
    icon: 'qr',
    img: pasoImg2,
    imgAlt: 'Pantalla de inicio de la app con flecha señalando el botón Explore in AR',
  },
  {
    id: '03',
    title: 'Apunta tu cámara',
    text: 'La retícula te indica dónde encuadrar. Cuando reconoce el sitio, aparece el modelo 3D y puedes agregarlo a favoritos si te gusta.',
    icon: 'camera',
    img: pasoImg3,
    imgAlt: 'Captura de la pantalla de escaneo reconociendo un instrumento',
  },
  {
    id: '04',
    title: 'Ve a favoritos y observa el modelo desde todos sus ángulos',
    text: 'Desde favoritos puedes volver a cada pieza guardada y girarla en 3D cuando quieras, sin necesidad de volver a escanear.',
    icon: 'cube',
    accent: true,
    img: pasoImg4,
    imgAlt: 'Pantalla Explorar con flecha señalando la pestaña Favoritos',
  },
];
</script>

<template>
  <div>
    <section class="container hero-block" v-reveal>
      <span class="eyebrow">Cómo funciona</span>
      <h1 class="page-title">De tu celular al patrimonio, en cuatro pasos</h1>
      <p class="page-desc">No necesitas cuenta ni conexión permanente: descarga la app, busca un código en el sitio y apunta la cámara.</p>
    </section>

    <section class="container steps-section">
      <div v-for="(paso, i) in pasos" :key="paso.id" class="step-row" v-reveal="i * 90">
        <div class="step-marker">
          <span class="step-icon" :class="{ accent: paso.accent }">
            <svg v-if="paso.icon === 'download'" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>
            <svg v-else-if="paso.icon === 'qr'" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="6.5" height="6.5" rx="1.4"></rect><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4"></rect><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4"></rect><path d="M14 14h2v2h-2zM18 14h2v2M14 18h2v2h4v-2"></path></svg>
            <svg v-else-if="paso.icon === 'camera'" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.5h3.2L9 6h6l1.8 2.5H20v10H4z"></path><circle cx="12" cy="13" r="3.2"></circle></svg>
            <svg v-else width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.4l7.4 4.3v8.6L12 20.6 4.6 16.3V7.7z"></path><path d="M4.6 7.7L12 12l7.4-4.3M12 12v8.6"></path></svg>
          </span>
          <span class="step-num">{{ paso.id }}</span>
        </div>
        <div class="step-copy">
          <span class="step-title">{{ paso.title }}</span>
          <span v-if="paso.id === '02'" class="step-text">
            Los códigos están señalizados en los sitios del municipio, y también puedes descargarlos desde la página de
            <RouterLink to="/codigos-qr" class="inline-link">Códigos QR</RouterLink>.
          </span>
          <span v-else class="step-text">{{ paso.text }}</span>
        </div>
        <div class="step-image">
          <img :src="paso.img" :alt="paso.imgAlt" />
        </div>
      </div>
    </section>

    <section class="container cta-section">
      <div class="cta-card" v-reveal>
        <div class="cta-copy">
          <span class="cta-title">¿Listo para probarla en Galeras?</span>
          <span class="cta-sub">Descarga la app y llévala contigo al parque principal.</span>
        </div>
        <RouterLink to="/descargar" class="btn btn-primary cta-btn">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>
          <span>DESCARGAR APP</span>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-block {
  padding: 60px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.page-title {
  margin: 0;
  font-size: clamp(32px, 4vw, 50px);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.06;
  max-width: 760px;
  text-wrap: pretty;
}

.page-desc {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  font-weight: 500;
  color: var(--color-text-muted);
  max-width: 580px;
  text-wrap: pretty;
}

.steps-section {
  padding: 34px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.step-row {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: 26px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  box-shadow: var(--shadow-md);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.step-row:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 26px rgba(30, 20, 10, 0.12);
}

.step-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.step-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: rgba(192, 82, 43, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-icon.accent {
  background: rgba(232, 168, 56, 0.24);
}

.step-num {
  font-size: 12.5px;
  font-weight: 800;
  color: var(--color-text-muted);
  letter-spacing: 0.6px;
}

.step-copy {
  flex: 1 1 240px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.step-title {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.4px;
  line-height: 1.25;
  text-wrap: pretty;
}

.step-text {
  font-size: 14.5px;
  font-weight: 500;
  line-height: 1.6;
  color: var(--color-text-muted);
  text-wrap: pretty;
}

.inline-link {
  font-weight: 800;
}

.step-image {
  flex: 1 1 260px;
  min-width: 0;
  border-radius: 18px;
  overflow: hidden;
  background: var(--color-bg);
  height: 420px;
  box-shadow: 0 4px 12px rgba(30, 20, 10, 0.08);
}

.step-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.cta-section {
  padding: 44px 24px 76px;
}

.cta-card {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: 38px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 22px rgba(30, 20, 10, 0.10);
}

.cta-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 520px;
}

.cta-title {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.7px;
  text-wrap: pretty;
}

.cta-sub {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  color: var(--color-text-muted);
  text-wrap: pretty;
}

.cta-btn {
  height: 60px;
  padding: 0 28px;
  font-size: 15px;
}
</style>
