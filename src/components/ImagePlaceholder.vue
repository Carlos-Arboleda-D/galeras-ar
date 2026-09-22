<script setup>
defineProps({
  label: { type: String, required: true },
});
</script>

<template>
  <div class="image-placeholder" role="img" :aria-label="label">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B3A899" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="15" rx="2.5"></rect>
      <circle cx="8.5" cy="9.5" r="1.6"></circle>
      <path d="M21 15.5l-5.5-5-9 8"></path>
    </svg>
    <span>{{ label }}</span>
  </div>
</template>

<style scoped>
.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  text-align: center;
  background: var(--color-image-bg);
}

.image-placeholder span {
  font-size: 11px;
  font-weight: 600;
  color: var(--color-text-muted);
  line-height: 1.4;
}
</style>
