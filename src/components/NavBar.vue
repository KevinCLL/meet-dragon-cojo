<template>
  <el-header class="sticky top-0 z-50 w-full p-0 shadow-md bg-white">
    <nav class="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
      <!-- Logo -->
      <router-link :to="localePath('')" class="flex items-center space-x-2">
        <img class="max-w-full h-auto w-12" src="@/assets/images/logo-mini.png" alt="Logo" />
        {{ $t('dragonCojo') }}
      </router-link>
      <el-menu
        :default-active="activeIndex"
        class="text-gray-800"
        mode="horizontal"
        :ellipsis="false"
      >
        <!-- Otras opciones de menú -->
        <el-sub-menu index="1">
          <template #title>{{ $t('info') }}</template>
          <el-menu-item @click="() => switchPath('')" index="home">
            <span> {{ $t('aboutus') }} </span>
          </el-menu-item>
          <el-menu-item @click="() => switchPath('contacto')" index="contact">
            <span> {{ $t('contact') }} </span>
          </el-menu-item>
        </el-sub-menu>
        <!-- Idiomas -->
        <el-sub-menu index="2">
          <template #title>{{ $t('languages') }}</template
          ><picture>
            <source media="(min-width: )" srcset="" />
            <img src="" alt="" />
          </picture>
          <el-menu-item @click="switchLang('es')" index="es">
            <span>Español</span>
          </el-menu-item>
          <el-menu-item @click="switchLang('en')" index="en">
            <span>English</span>
          </el-menu-item>
          <el-menu-item @click="switchLang('ca')" index="ca">
            <span>Català</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </nav>
  </el-header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const activeIndex = ref('1')
// Diccionario de slugs a traducir
const slugMap = {
  '': { es: '', en: '', ca: '' },
  // ES
  contacto: { es: 'contacto', en: 'contact', ca: 'contacta' },

  // EN
  contact: { es: 'contacto', en: 'contact', ca: 'contacta' },

  // CA
  contacta: { es: 'contacto', en: 'contact', ca: 'contacta' },
}

const router = useRouter()
const route = useRoute()

// Para marcar active en el menu
const activeItem = computed(() => {
  // si la subruta es "", es home
  if (!route.params.lang) return 'home' // fallback
  const sub = route.path.split('/')[2] || ''
  if (sub.includes('contact')) return 'contact'
  return 'home'
})

const currentLang = computed(() => {
  const segments = route.path.split('/')
  const lang = segments[1]
  return lang || 'es'
})

// switchLang: cambia /es/contacto => /en/contact => /ca/contacta
function switchLang(lang) {
  const segments = route.path.split('/') // ['', 'es', 'contacto']
  if (segments.length > 1) {
    segments[1] = lang // Reemplazamos el idioma
  }
  // Miramos si hay subruta (ej: 'contacto')
  if (segments[2] && slugMap[segments[2]]) {
    const currentSlug = segments[2]
    segments[2] = slugMap[currentSlug][lang] // 'contact' o 'contacta'
  }
  const newPath = segments.join('/')
  router.replace(newPath)
}

// Para crear un link a la subruta adecuada
function localePath(slug) {
  const lang = currentLang.value
  // Convertimos slug según el diccionario
  if (slugMap[slug]) {
    return `/${lang}/${slugMap[slug][lang]}`
  }
  return `/${lang}/${slug}` // fallback
}

function switchPath(slug) {
  const path = localePath(slug)
  router.replace(path)
}
</script>
