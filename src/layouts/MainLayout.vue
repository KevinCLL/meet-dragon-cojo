<template>
  <div class="main-layout">
    <NavBar />

    <main>
      <!-- Aquí las vistas inyectadas por el router -->
      <router-view />
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
