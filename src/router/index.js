// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import i18n from '@/i18n'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  // Redirige "/" a "/es"
  {
    path: '/',
    redirect: '/es'
  },

  // Grupo para español
  {
    path: '/es',
    meta: { layout: 'MainLayout' },
    children: [
      {
        path: '',
        name: 'home-es',
        component: HomeView
      },
      {
        path: 'contacto',
        name: 'contact-es',
        component: ContactView
      },
      {
        path: ':pathMatch(.*)*', // cualquier otra subruta en /es/...
        name: 'NotFoundEs',
        component: NotFoundView
      }
    ]
  },

  // Grupo para inglés
  {
    path: '/en',
    meta: { layout: 'MainLayout' },
    children: [
      {
        path: '',
        name: 'home-en',
        component: HomeView
      },
      {
        path: 'contact',
        name: 'contact-en',
        component: ContactView
      },
      {
        path: ':pathMatch(.*)*',
        name: 'NotFoundEn',
        component: NotFoundView
      }
    ]
  },

  // Grupo para catalán
  {
    path: '/ca',
    meta: { layout: 'MainLayout' },
    children: [
      {
        path: '',
        name: 'home-ca',
        component: HomeView
      },
      {
        path: 'contacta',
        name: 'contact-ca',
        component: ContactView
      },
      {
        path: ':pathMatch(.*)*',
        name: 'NotFoundCa',
        component: NotFoundView
      }
    ]
  },

  // Redirección final si intenta algo raro sin /es, /en, /ca
  {
    path: '/:pathMatch(.*)*',
    redirect: '/es'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Soporte para anchors
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Cambiar i18n.global.locale según el idioma
router.beforeEach((to, from, next) => {
  // /es/contacto => segments = ['', 'es', 'contacto']
  const segments = to.path.split('/')
  const maybeLang = segments[1] // 'es', 'en', 'ca', ...
  if (['es', 'en', 'ca'].includes(maybeLang)) {
    i18n.global.locale.value = maybeLang
  } else {
    i18n.global.locale.value = 'es'
  }
  next()
})

export default router
