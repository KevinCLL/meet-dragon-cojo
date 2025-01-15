import { createI18n } from 'vue-i18n'

// Mensajes de cada idioma:
const messages = {
  es: {
    dragonCojo: 'El Dragón Cojo',
    contactTitle: 'Contáctame',
    contactDesc: 'Test esp'
  },
  en: {
    dragonCojo: 'Crippled Dragon',
    contactTitle: 'Contact me',
    contactDesc: 'Test eng'
  },
  ca: {
    dragonCojo: 'El Drac Coix',
    contactTitle: 'Contacta\'m',
    contactDesc: 'Test cat'
  }
}

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'ca', 
    messages
})

export default i18n
