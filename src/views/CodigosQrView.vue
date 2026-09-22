<script setup>
import qrTambora from '../assets/images/qr-tambora.jpg';
import qrLlamador from '../assets/images/qr-llamador.jpg';
import qrMaracas from '../assets/images/qr-maracas.jpg';
import qrTamborAlegre from '../assets/images/qr-tambor-alegre.jpg';
import qrMonumento from '../assets/images/qr-monumento-algarroba.jpg';

const qrItems = [
  { id: 'qrp-tambora', name: 'Tambora', tag: 'Instrumento · Percusión', img: qrTambora },
  { id: 'qrp-llamador', name: 'Llamador', tag: 'Instrumento · Percusión', img: qrLlamador },
  { id: 'qrp-maracas', name: 'Maracas', tag: 'Instrumento · Idiófono', img: qrMaracas },
  { id: 'qrp-tambor-alegre', name: 'Tambor Alegre', tag: 'Instrumento · Percusión', img: qrTamborAlegre },
  { id: 'qrp-monumento', name: 'Monumento a la Algarroba', tag: 'Sitio · Parque principal', img: qrMonumento },
];

function descargarTodos() {
  qrItems.forEach((item, i) => {
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = item.img;
      link.download = `QR-${item.name}.jpg`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }, i * 300);
  });
}
</script>

<template>
  <div>
    <section class="container hero-block" v-reveal>
      <span class="eyebrow">Códigos QR</span>
      <h1 class="page-title">El set completo, listo para imprimir</h1>
      <p class="page-desc">Escanéalos desde esta pantalla con la app abierta, o descárgalos en alta resolución para señalizar los sitios del municipio.</p>
    </section>

    <section class="container notice-section">
      <div class="notice-box" v-reveal>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 11v6M12 7.6v.1"></path></svg>
        <span>
          Estos códigos se escanean con la app Galeras AR, no con la cámara normal: no son enlaces web. Si aún no la
          tienes, <RouterLink to="/descargar" class="inline-link">descárgala primero</RouterLink>.
        </span>
      </div>
    </section>

    <section class="container qr-section">
      <div class="qr-toolbar">
        <span class="qr-count">5 piezas disponibles</span>
        <button type="button" class="btn btn-primary qr-all-btn" @click="descargarTodos">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>
          <span>DESCARGAR TODOS</span>
        </button>
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
            <a :href="item.img" :download="`QR-${item.name}.jpg`" title="Descargar QR" class="qr-download">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-block {
  padding: 60px 24px 28px;
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
  max-width: 740px;
  text-wrap: pretty;
}

.page-desc {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  font-weight: 500;
  color: var(--color-text-muted);
  max-width: 600px;
  text-wrap: pretty;
}

.notice-section {
  padding: 0 24px 20px;
}

.notice-box {
  display: flex;
  gap: 13px;
  align-items: flex-start;
  background: rgba(232, 168, 56, 0.16);
  border-radius: var(--radius-xl);
  padding: 20px 22px;
  font-size: 14.5px;
  font-weight: 600;
  line-height: 1.6;
  max-width: 760px;
  text-wrap: pretty;
}

.notice-box svg {
  flex: none;
  margin-top: 2px;
}

.inline-link {
  font-weight: 800;
}

.qr-section {
  padding: 26px 24px 76px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.qr-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

.qr-count {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.2px;
}

.qr-all-btn {
  height: 54px;
  padding: 0 24px;
  font-size: 14px;
  letter-spacing: 0.6px;
}

.qr-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(214px, 1fr));
  gap: 18px;
}

.qr-card {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  width: 42px;
  height: 42px;
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
