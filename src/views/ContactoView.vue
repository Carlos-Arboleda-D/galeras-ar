<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  nombre: '',
  correo: '',
  mensaje: '',
});

const enviado = ref(false);

function enviarMensaje() {
  if (!form.nombre || !form.correo || !form.mensaje) return;
  // No hay backend conectado todavía: esto solo confirma el envío en pantalla.
  enviado.value = true;
  form.nombre = '';
  form.correo = '';
  form.mensaje = '';
}
</script>

<template>
  <section class="container contact-grid">
    <div class="contact-info" v-reveal>
      <span class="eyebrow">Contacto</span>
      <h1 class="page-title">Escríbenos: dudas, correcciones o colaboración</h1>
      <p class="page-desc">Si notas un dato incorrecto sobre el patrimonio, quieres sumar una pieza al recorrido o representas una institución del municipio, cuéntanos.</p>

      <div class="info-card">
        <div class="info-row">
          <div class="info-icon">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 6.5h15v11h-15z"></path><path d="M4.5 7l7.5 5.5L19.5 7"></path></svg>
          </div>
          <div class="info-copy">
            <span class="info-label">Correo directo</span>
            <a href="mailto:hola@galerasar.co" class="info-value">hola@galerasar.co</a>
          </div>
        </div>
        <div class="divider"></div>
        <div class="info-row">
          <div class="info-icon accent">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5H6.5A1.5 1.5 0 0 0 5 6.5v11A1.5 1.5 0 0 0 6.5 19h11a1.5 1.5 0 0 0 1.5-1.5V13"></path><path d="M14 4h6v6"></path><path d="M20 4l-8 8"></path></svg>
          </div>
          <div class="info-copy">
            <span class="info-label">Referencias externas</span>
            <span class="info-value static">Alcaldía de Galeras · Festival de la Algarroba</span>
          </div>
        </div>
      </div>

      <div class="disclaimer-box">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C0522B" stroke-width="2.2" stroke-linecap="round" style="margin-top:2px; flex:none"><circle cx="12" cy="12" r="9"></circle><path d="M12 11v6M12 7.6v.1"></path></svg>
        <span>Galeras AR es un proyecto independiente y no es un canal oficial de la Alcaldía de Galeras. Para trámites o información municipal, consulta directamente los canales oficiales del municipio.</span>
      </div>
    </div>

    <form class="contact-form" v-reveal="120" @submit.prevent="enviarMensaje">
      <div class="form-heading">
        <span class="form-title">Envíanos un mensaje</span>
        <span class="form-sub">Respondemos en dos o tres días hábiles.</span>
      </div>

      <label class="field">
        <span class="field-label">Nombre</span>
        <input v-model="form.nombre" type="text" placeholder="Tu nombre" required />
      </label>

      <label class="field">
        <span class="field-label">Correo</span>
        <input v-model="form.correo" type="email" placeholder="tucorreo@ejemplo.com" required />
      </label>

      <label class="field">
        <span class="field-label">Mensaje</span>
        <textarea v-model="form.mensaje" rows="5" placeholder="Cuéntanos en qué podemos ayudarte" required></textarea>
      </label>

      <button type="submit" class="btn btn-primary submit-btn">
        {{ enviado ? 'MENSAJE ENVIADO' : 'ENVIAR MENSAJE' }}
      </button>
      <span v-if="enviado" class="success-note">Gracias, te responderemos pronto a tu correo.</span>
      <span v-else class="footnote">Solo usamos tu correo para responderte este mensaje.</span>
    </form>
  </section>
</template>

<style scoped>
.contact-grid {
  padding: 60px 24px 76px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 40px;
  align-items: start;
}

.contact-info {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.page-title {
  margin: 0;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;
  letter-spacing: -1.4px;
  line-height: 1.06;
  text-wrap: pretty;
}

.page-desc {
  margin: 0;
  font-size: 16.5px;
  line-height: 1.62;
  font-weight: 500;
  color: var(--color-text-muted);
  max-width: 480px;
  text-wrap: pretty;
}

.info-card {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  box-shadow: var(--shadow-md);
  margin-top: 6px;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 12px 0;
}

.info-icon {
  width: 40px;
  height: 40px;
  flex: none;
  border-radius: 13px;
  background: rgba(192, 82, 43, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-icon.accent {
  background: rgba(232, 168, 56, 0.22);
}

.info-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.info-label {
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.info-value {
  font-size: 15px;
  font-weight: 800;
  letter-spacing: -0.1px;
  color: var(--color-text);
}

.info-value.static {
  font-size: 14px;
}

.divider {
  height: 1px;
  background: rgba(30, 20, 10, 0.07);
}

.disclaimer-box {
  display: flex;
  gap: 13px;
  align-items: flex-start;
  background: rgba(232, 168, 56, 0.16);
  border-radius: var(--radius-xl);
  padding: 20px 22px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.6;
  text-wrap: pretty;
}

.contact-form {
  min-width: 0;
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 8px 22px rgba(30, 20, 10, 0.10);
}

.form-heading {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-title {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.4px;
}

.form-sub {
  font-size: 13.5px;
  font-weight: 500;
  line-height: 1.55;
  color: var(--color-text-muted);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-label {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.field input,
.field textarea {
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-surface-muted);
  padding: 0 16px;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text);
  box-shadow: inset 0 0 0 1px rgba(30, 20, 10, 0.08);
}

.field input {
  height: 54px;
}

.field textarea {
  padding: 14px 16px;
  line-height: 1.55;
  resize: vertical;
}

.submit-btn {
  height: 60px;
  width: 100%;
  font-size: 15px;
  letter-spacing: 1px;
}

.footnote {
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.55;
  color: var(--color-text-muted);
  text-align: center;
  text-wrap: pretty;
}

.success-note {
  font-size: 12.5px;
  font-weight: 700;
  line-height: 1.55;
  color: var(--color-primary);
  text-align: center;
}
</style>
