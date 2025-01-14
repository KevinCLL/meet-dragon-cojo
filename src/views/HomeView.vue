<template>
  <div class="main-layout">
    <HeroSection />
    <SobreNosotros />
    <Mandamientos />
    <Comunidad />
    <Contacto />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import SobreNosotros from '@/components/SobreNosotros.vue'
import Mandamientos from '@/components/Mandamientos.vue'
import Comunidad from '@/components/Comunidad.vue'
import Contacto from '@/components/Contacto.vue'
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
