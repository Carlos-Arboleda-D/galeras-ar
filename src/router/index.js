import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ComoFuncionaView from '../views/ComoFuncionaView.vue';
import PatrimonioView from '../views/PatrimonioView.vue';
import DescargarView from '../views/DescargarView.vue';
import CodigosQrView from '../views/CodigosQrView.vue';
import ContactoView from '../views/ContactoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0 };
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/como-funciona', name: 'como-funciona', component: ComoFuncionaView },
    { path: '/patrimonio', name: 'patrimonio', component: PatrimonioView },
    { path: '/descargar', name: 'descargar', component: DescargarView },
    { path: '/codigos-qr', name: 'codigos-qr', component: CodigosQrView },
    { path: '/contacto', name: 'contacto', component: ContactoView },
  ],
});

export default router;
