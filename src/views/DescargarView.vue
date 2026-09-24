<script setup>
const APK_URL = 'https://github.com/Carlos-Arboleda-D/galeras-ar/releases/download/v1.0.0/GalerasAR.apk';

const requisitos = [
  {
    title: 'Android 8 o superior',
    text: 'Compatible con Vuforia Engine',
    icon: 'phone',
  },
  {
    title: 'Cámara trasera',
    text: 'Necesaria para la realidad aumentada',
    icon: 'camera',
  },
  {
    title: '250 MB libres',
    text: 'Incluye los modelos 3D descargados',
    icon: 'storage',
  },
];

const pasos = [
  {
    num: '1',
    title: 'Descarga el archivo',
    text: 'Toca el botón de descarga y espera a que termine. Aparecerá en tus notificaciones.',
    accent: false,
  },
  {
    num: '2',
    title: 'Permite la fuente',
    accent: false,
  },
  {
    num: '3',
    title: 'Confirma la instalación',
    text: 'Vuelve atrás y toca Instalar. Tarda unos segundos.',
    accent: false,
  },
  {
    num: '4',
    title: 'Abre y acepta la cámara',
    text: 'La app pide permiso de cámara la primera vez: es lo único que necesita para funcionar.',
    accent: true,
  },
];
</script>

<template>
  <div>
    <section class="container hero-grid">
      <div class="hero-copy" v-reveal>
        <span class="eyebrow">Descargar</span>
        <h1 class="page-title">Instálala directamente en tu Android</h1>
        <p class="body-text">Galeras AR todavía no está en Play Store, así que la descarga es directa: un archivo APK que instalas tú mismo. Es el mismo procedimiento que usan muchas apps locales e institucionales antes de publicarse en la tienda.</p>
        <a :href="APK_URL" download class="btn btn-primary download-btn">
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>
          <span>DESCARGAR APK · 293 MB</span>
        </a>
        <span class="fine-print">Versión 1.0.0 · Publicada en septiembre de 2026</span>
      </div>

      <div class="requisitos-card" v-reveal="100">
        <span class="eyebrow">Requisitos</span>
        <div class="requisitos-list">
          <template v-for="(req, i) in requisitos" :key="req.title">
            <div class="requisito-row">
              <div class="requisito-icon">
                <svg v-if="req.icon === 'phone'" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="6.5" y="3" width="11" height="18" rx="2.4"></rect><path d="M10.5 18h3"></path></svg>
                <svg v-else-if="req.icon === 'camera'" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.5h3.2L9 6h6l1.8 2.5H20v10H4z"></path><circle cx="12" cy="13" r="3.2"></circle></svg>
                <svg v-else width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7.5h16v9H4z"></path><path d="M7.5 12h2M12 12h4.5"></path></svg>
              </div>
              <div class="requisito-copy">
                <span class="requisito-title">{{ req.title }}</span>
                <span class="requisito-text">{{ req.text }}</span>
              </div>
            </div>
            <div v-if="i < requisitos.length - 1" class="divider"></div>
          </template>
        </div>
      </div>
    </section>

    <section class="section-white install-section">
      <div class="container install-inner">
        <div class="install-heading" v-reveal>
          <span class="eyebrow">Instalación</span>
          <h2 class="section-title">Cómo instalarla paso a paso</h2>
          <p class="body-text">Android mostrará un aviso porque el archivo no viene de la tienda. Es un mensaje normal: solo pide tu permiso una vez y puedes desactivarlo después.</p>
        </div>

        <div class="pasos-grid">
          <div v-for="(paso, i) in pasos" :key="paso.num" class="paso-card" v-reveal="i * 90">
            <span class="paso-num" :class="{ accent: paso.accent }">{{ paso.num }}</span>
            <span class="paso-title">{{ paso.title }}</span>
            <span v-if="paso.num !== '2'" class="paso-text">{{ paso.text }}</span>
            <span v-else class="paso-text">Al abrirlo, toca <strong>Ajustes</strong> en el aviso y activa <strong>Permitir de esta fuente</strong>.</span>
          </div>
        </div>

        <div class="note-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4l8 3.6v5.2c0 4.4-3.3 7.6-8 8.8-4.7-1.2-8-4.4-8-8.8V7.6z"></path><path d="M9.2 12.2l2 2 3.6-4"></path></svg>
          <span>La app no pide cuenta ni datos personales: tus favoritos y tu progreso se guardan solo en tu teléfono. Puedes desinstalarla en cualquier momento sin dejar nada atrás.</span>
        </div>
      </div>
    </section>

    <section class="container disclaimer-section">
      <div class="disclaimer-box" v-reveal>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 11v6M12 7.6v.1"></path></svg>
        <span>Galeras AR es un proyecto independiente de divulgación cultural. No está desarrollado ni avalado por la Alcaldía de Galeras, y los contenidos sobre los Cuadros Vivos y el Festival de la Algarroba pertenecen a la comunidad del municipio.</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-grid {
  padding: 60px 24px 36px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  align-items: center;
}

.hero-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.page-title {
  margin: 0;
  font-size: clamp(32px, 4vw, 50px);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.06;
  text-wrap: pretty;
}

.body-text {
  margin: 0;
  font-size: 17px;
  line-height: 1.62;
  font-weight: 500;
  color: var(--color-text-muted);
  max-width: 520px;
  text-wrap: pretty;
}

.download-btn {
  align-self: flex-start;
  height: 66px;
  padding: 0 32px;
  font-size: 16px;
  box-shadow: 0 8px 18px rgba(192, 82, 43, 0.32);
}

.fine-print {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-muted);
}

.requisitos-card {
  min-width: 0;
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 8px 22px rgba(30, 20, 10, 0.10);
}

.requisitos-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.requisito-row {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 12px 0;
}

.requisito-icon {
  width: 40px;
  height: 40px;
  flex: none;
  border-radius: 13px;
  background: rgba(192, 82, 43, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
}

.requisito-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.requisito-title {
  font-size: 14.5px;
  font-weight: 800;
  letter-spacing: -0.1px;
}

.requisito-text {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--color-text-muted);
}

.divider {
  height: 1px;
  background: rgba(30, 20, 10, 0.07);
}

.install-section {
  border-top: 1px solid rgba(30, 20, 10, 0.06);
  border-bottom: 1px solid rgba(30, 20, 10, 0.06);
  margin-top: 24px;
}

.install-inner {
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.install-heading {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 640px;
}

.section-title {
  margin: 0;
  font-size: clamp(24px, 2.8vw, 34px);
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.12;
}

.pasos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
}

.paso-card {
  background: var(--color-surface-muted);
  border-radius: var(--radius-xl);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.paso-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.paso-num {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: var(--color-primary);
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.paso-num.accent {
  background: var(--color-accent);
  color: var(--color-text);
}

.paso-title {
  font-size: 16.5px;
  font-weight: 800;
  letter-spacing: -0.3px;
}

.paso-text {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.55;
  color: var(--color-text-muted);
  text-wrap: pretty;
}

.note-box {
  display: flex;
  gap: 13px;
  align-items: flex-start;
  background: var(--color-surface-muted);
  border-radius: var(--radius-xl);
  padding: 22px 24px;
  font-size: 14.5px;
  font-weight: 500;
  line-height: 1.6;
  color: var(--color-text-muted);
  text-wrap: pretty;
}

.note-box svg {
  flex: none;
  margin-top: 2px;
}

.disclaimer-section {
  padding: 52px 24px 76px;
}

.disclaimer-box {
  background: rgba(232, 168, 56, 0.16);
  border-radius: var(--radius-xl);
  padding: 30px;
  display: flex;
  gap: 15px;
  align-items: flex-start;
  font-size: 14.5px;
  font-weight: 600;
  line-height: 1.6;
  max-width: 760px;
  text-wrap: pretty;
}

.disclaimer-box svg {
  flex: none;
  margin-top: 2px;
}
</style>
