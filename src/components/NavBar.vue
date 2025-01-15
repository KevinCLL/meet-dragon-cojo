<template>
  <el-header height="auto">
    <nav style="display: flex; justify-content: space-between; align-items:center; padding: 1rem;">
      <!-- Logo o título -->
      <router-link :to="localePath('')">
        <strong style="font-size: 1.2rem;">{{ $t('dragonCojo') }}</strong>
      </router-link>

      <!-- Menú de opciones -->
      <el-menu mode="horizontal" :default-active="activeItem" background-color="transparent">
        <el-menu-item index="home">
          <router-link :to="localePath('')">
            {{ currentLang.toUpperCase() }} Home
          </router-link>
        </el-menu-item>

        <el-menu-item index="contact">
          <router-link :to="localePath('contacto')">
            Contact
          </router-link>
        </el-menu-item>
      </el-menu>

      <!-- Dropdown de idiomas -->
      <div>
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link">Idiomas</span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="switchLang('es')">Español</el-dropdown-item>
              <el-dropdown-item @click="switchLang('en')">English</el-dropdown-item>
              <el-dropdown-item @click="switchLang('ca')">Català</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </nav>
  </el-header>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

// Diccionario de slugs a traducir
// (Home route está en '' para todos)
const slugMap = {
  '':       { es: '',         en: '',       ca: '' },
  // La clave "contacto" (ES) mapea a "contact" (EN) y "contacta" (CA)
  'contacto': { es: 'contacto', en: 'contact', ca: 'contacta' },

  // La clave "contact" (EN) mapea a "contacto" (ES) y "contacta" (CA)
  'contact': { es: 'contacto', en: 'contact', ca: 'contacta' },

  // La clave "contacta" (CA) mapea a "contact" (EN) y "contacto" (ES)
  'contacta': { es: 'contacto', en: 'contact', ca: 'contacta' }
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

const currentLang = computed(() => route.params.lang || 'es')

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

</script>
