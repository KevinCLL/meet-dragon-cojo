// src/main.js
import { createApp } from 'vue'
import App from './App.vue'

// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// CSS global
import './assets/css/styles.css'

// Pinia
import pinia from './stores'

// Router
import router from './router'

// Crear la app
const app = createApp(App)

// Usar Element Plus
app.use(ElementPlus)

// Usar Pinia
app.use(pinia)

// Usar Router
app.use(router)

// Montar la app
app.mount('#app')
