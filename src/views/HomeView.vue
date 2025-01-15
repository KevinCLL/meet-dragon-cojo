<template>
  <div class="main-layout">
    <HeroSection />
    <SobreNosotros />
    <Mandamientos />
    <Comunidad />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/Landing/HeroSection.vue'
import SobreNosotros from '@/components/Landing/SobreNosotros.vue'
import Mandamientos from '@/components/Landing/Mandamientos.vue'
import Comunidad from '@/components/Landing/Comunidad.vue'
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
