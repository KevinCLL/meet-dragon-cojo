// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Importa tus vistas o componentes
import HomeView from '@/views/HomeView.vue'
import SobreNosotros from '@/components/SobreNosotros.vue'
import Mandamientos from '@/components/Mandamientos.vue'
import Comunidad from '@/components/Comunidad.vue'
import Contacto from '@/components/Contacto.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre-nosotros',
    name: 'sobreNosotros',
    component: SobreNosotros
  },
  {
    path: '/mandamientos',
    name: 'mandamientos',
    component: Mandamientos
  },
  {
    path: '/comunidad',
    name: 'comunidad',
    component: Comunidad
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
