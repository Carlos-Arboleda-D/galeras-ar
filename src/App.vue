<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="page">
    <Navbar />
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <Footer />
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: 'Manrope', Helvetica, sans-serif;
  overflow-x: hidden;
}
</style>
