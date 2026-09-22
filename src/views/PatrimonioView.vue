<script setup>
import parquePrincipal from '../assets/images/parque-principal.jpg';
import cuadroVivo from '../assets/images/cuadro-vivo.png';
import festivalAlgarroba from '../assets/images/festival-algarroba.jpg';
import objTambora from '../assets/images/obj-tambora.jpg';
import objLlamador from '../assets/images/obj-llamador.jpg';
import objMaracas from '../assets/images/obj-maracas.jpg';
import objTamborAlegre from '../assets/images/obj-tambor-alegre.jpg';
import objMonumento from '../assets/images/obj-monumento-algarroba.jpg';

const objetos = [
  { id: 'pat-tambora', name: 'Tambora', tag: 'Percusión', img: objTambora },
  { id: 'pat-llamador', name: 'Llamador', tag: 'Percusión', img: objLlamador },
  { id: 'pat-maracas', name: 'Maracas', tag: 'Idiófono', img: objMaracas },
  { id: 'pat-tambor-alegre', name: 'Tambor Alegre', tag: 'Percusión', img: objTamborAlegre },
  { id: 'pat-monumento', name: 'Monumento a la Algarroba', tag: 'Sitio', img: objMonumento },
];
</script>

<template>
  <div>
    <section class="container hero-block" v-reveal>
      <span class="eyebrow">Patrimonio</span>
      <h1 class="page-title">Tierra de tambores, hamacas y fiestas de corraleja</h1>
      <p class="page-desc">El contenido que verás en la app: el municipio, los Cuadros Vivos, el festival de enero y los objetos que guardan la memoria de Galeras.</p>
    </section>

    <section class="container split-block">
      <div class="split-image" v-reveal>
        <img :src="parquePrincipal" alt="Parque principal de Galeras" />
      </div>
      <div class="split-copy" v-reveal="100">
        <span class="eyebrow">El municipio</span>
        <h2 class="section-title">Galeras, Sucre</h2>
        <p class="body-text">Subregión de Sabanas, a 50 km de Sincelejo. Un municipio de sabana donde la vida cultural gira alrededor de la música de tambores, la artesanía de hamacas y las fiestas de corraleja.</p>
        <div class="tag-row">
          <span class="tag">Subregión de Sabanas</span>
          <span class="tag">50 km de Sincelejo</span>
        </div>
      </div>
    </section>

    <section class="container declaratoria-block">
      <div class="declaratoria-card" v-reveal>
        <div class="declaratoria-image">
          <img :src="cuadroVivo" alt="Escena de Cuadro Vivo" />
          <span class="unesco-tag">
            <span class="dot"></span>
            <span>UNESCO 2024</span>
          </span>
        </div>
        <div class="declaratoria-copy">
          <span class="eyebrow">Declaratoria</span>
          <h2 class="section-title">¿Qué son los Cuadros Vivos?</h2>
          <p class="body-text">Escenas que los vecinos montan y congelan frente al público: personajes caracterizados, objetos de casa y oficios del municipio compuestos como una pintura. Las cuadrillas ensayan durante semanas antes de las fiestas.</p>
          <p class="body-text strong">En 2024 la tradición fue declarada Patrimonio Cultural Inmaterial de la Humanidad.</p>
        </div>
      </div>
    </section>

    <section class="container split-block reverse">
      <div class="split-copy" v-reveal>
        <span class="eyebrow">Cada enero</span>
        <h2 class="section-title">Festival Folclórico de la Algarroba</h2>
        <p class="body-text">Cada enero el municipio se vuelca a la calle: comparsas de danza, tamboras y gaitas que suenan hasta la madrugada, y las cuadrillas que montan los Cuadros Vivos frente al público. Los grupos ensayan durante semanas y compiten por el reconocimiento de los vecinos.</p>
      </div>
      <div class="split-image" v-reveal="100">
        <img :src="festivalAlgarroba" alt="Festival Folclórico de la Algarroba" />
      </div>
    </section>

    <section class="section-white objetos-section">
      <div class="container objetos-inner">
        <div class="section-heading" v-reveal>
          <span class="eyebrow">En la app</span>
          <h2 class="section-title">Objetos y símbolos tradicionales</h2>
          <p class="body-text small">Las cinco piezas disponibles hoy en realidad aumentada.</p>
        </div>
        <div class="objetos-grid">
          <div v-for="(obj, i) in objetos" :key="obj.id" class="objeto-card" v-reveal="i * 80">
            <div class="objeto-image">
              <img :src="obj.img" :alt="obj.name" />
            </div>
            <div class="objeto-info">
              <span class="objeto-name">{{ obj.name }}</span>
              <span class="objeto-tag">{{ obj.tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container cta-section">
      <div class="cta-card" v-reveal>
        <div class="cta-copy">
          <span class="cta-title">Míralo en 3D con tu cámara</span>
          <span class="cta-sub">Cada pieza tiene su ficha y su historia dentro de la app, y puedes guardarla en favoritos para verla en 3D cuando quieras.</span>
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
  padding: 60px 24px 24px;
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
  max-width: 780px;
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

.section-title {
  margin: 0;
  font-size: clamp(24px, 2.6vw, 32px);
  font-weight: 800;
  letter-spacing: -0.9px;
  line-height: 1.12;
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

.body-text.strong {
  font-weight: 600;
  color: var(--color-text);
}

.body-text.small {
  font-size: 15.5px;
  line-height: 1.6;
}

.split-block {
  padding: 28px 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  align-items: center;
}

.split-block.reverse .split-copy {
  order: 1;
}

.split-block.reverse .split-image {
  order: 2;
}

.split-image {
  min-width: 0;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--color-image-bg);
  box-shadow: var(--shadow-lg);
}

.split-image img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.split-image:hover img {
  transform: scale(1.04);
}

.split-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  padding-top: 2px;
}

.tag {
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(30, 20, 10, 0.06);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 1.1px;
  text-transform: uppercase;
}

.declaratoria-block {
  padding: 40px 24px;
}

.declaratoria-card {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  box-shadow: 0 8px 22px rgba(30, 20, 10, 0.10);
}

.declaratoria-image {
  min-width: 0;
  position: relative;
  background: var(--color-image-bg);
}

.declaratoria-image img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 300px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.declaratoria-card:hover .declaratoria-image img {
  transform: scale(1.04);
}

.unesco-tag {
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--color-accent);
  box-shadow: 0 3px 10px rgba(30, 20, 10, 0.22);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--color-text);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-text);
}

.declaratoria-copy {
  min-width: 0;
  padding: 38px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
}

.objetos-section {
  border-top: 1px solid rgba(30, 20, 10, 0.06);
  border-bottom: 1px solid rgba(30, 20, 10, 0.06);
  margin-top: 40px;
}

.objetos-inner {
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.section-heading {
  display: flex;
  flex-direction: column;
  gap: 9px;
  max-width: 620px;
}

.objetos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(196px, 1fr));
  gap: 18px;
}

.objeto-card {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.objeto-image {
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-image-bg);
  box-shadow: 0 5px 14px rgba(30, 20, 10, 0.10);
}

.objeto-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.objeto-card:hover .objeto-image img {
  transform: scale(1.06);
}

.objeto-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-left: 3px;
}

.objeto-name {
  font-size: 15.5px;
  font-weight: 800;
  letter-spacing: -0.2px;
}

.objeto-tag {
  font-size: 12px;
  font-weight: 700;
  color: var(--color-text-muted);
}

.cta-section {
  padding: 52px 24px 76px;
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
