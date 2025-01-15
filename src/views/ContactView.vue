<template>
  <div class="main-layout">
    <Contacto />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Contacto from '@/components/Contacto.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: t('contactTitle'),
  meta: [
    {
      name: 'description',
      content: t('contactDesc')
    }
  ]
})
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
