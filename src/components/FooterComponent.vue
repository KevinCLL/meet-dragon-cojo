<template>
  <footer>
    <div class="container footer-compact">
      <p>El Dragón Cojo / Mallorca / 2017 - {{ currentYear }}</p>
      <p>
        Creado por
        <a
          href="https://malkevnia.com"
          target="_blank"
          rel="noopener"
          style="color:var(--color-dorado);"
        >
          Malkev
        </a>
        con 💜
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const currentYear = ref(new Date().getFullYear())

onMounted(() => {
  // Para un landing no hace falta refrescar el año, pero si quisieras...
})
</script>

<style scoped></style>
