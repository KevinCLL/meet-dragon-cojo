import { createI18n } from 'vue-i18n'

// Mensajes de cada idioma:
const messages = {
  es: {
    dragonCojo: 'El Dragón Cojo',
    contact: 'Contáctame',
    info: 'Información',
    aboutus: 'Sobre Nosotros',
    languages: 'Idiomas',
    contactFormDescription:
      'Si deseas más información o tienes alguna duda, por favor rellena el siguiente formulario.',
    name: 'Nombre',
    nameRules: 'Por favor ingresa tu nombre',
    email: 'Tu email',
    emailRules: 'Por favor ingresa tu email',
    emailFail: 'Formato de email inválido',
    message: 'Mensaje',
    messageRules: 'Por favor escribe un mensaje',
    send: 'Enviar',

    tagline: 'El mejor lugar para disfrutar de juegos de mesa, rol en Mallorca.',
    tagline2:
      'Comparte con nosotros épicas aventuras con dados, miniaturas, meeples, cartas y sobre todo mucha camaradería.',
    joinus: 'Únete a la aventura',

    aboutusTitle: '¿Quiénes somos?',
    aboutusDescription:
      '“El Dragón Cojo” es una comunidad de entusiastas de los juegos de mesa y el rol en la isla de Mallorca. Aquí encontrarás un ambiente seguro, respetuoso y muy divertido para compartir tardes inolvidables, organizar tus propias partidas y conocer nuevos amigos con la misma pasión por todo lo relacionado con este maravilloso mundo lúdico.',
    aboutusInvitation:
      'Tanto si eres un veterano con experiencia en múltiples campañas, como si eres un curioso que empieza a explorar distintos tableros y manuales, este es tu lugar. ¡Te esperamos con los brazos abiertos y las fichas preparadas!',

    rulesTitle: 'Mandamientos del Club',
    ruleI: 'Creación de Eventos y Asistencia',
    ruleI1: 'Si tienes un juego en mente, házselo saber a un organizador ...',
    ruleI2: 'Cualquier regla puede tener una excepción si el anfitrión ...',
    ruleII: 'Participantes, Invitados y Privacidad',
    ruleII1: 'Si tienes un juego en mente, házselo saber a un organizador ...',
    ruleII2: 'Cualquier regla puede tener una excepción si el anfitrión ...',
    ruleIII: 'Resolución de Conflictos',
    ruleIII1: 'Si tienes un juego en mente, házselo saber a un organizador ...',
    ruleIII2: 'Cualquier regla puede tener una excepción si el anfitrión ...',

    joinUs: 'Únete a Nuestra Comunidad',
    joinUsDescription:
      'Comparte tus aventuras, organiza partidas y disfruta de la mejor compañía jugona.',
    socialTitle: 'Redes Sociales',
    socialDescription: 'Síguenos para no perderte nuestras últimas partidas y eventos',
    footer: 'El Dragón Cojo / Mallorca / 2017 - {currentYear}',
    footerCreated: 'Creado por ',
    footerWith: ' con 💜',
  },

  ca: {
    dragonCojo: 'El Drac Coix',
    contact: 'Contacta’m',
    info: 'Informació',
    aboutus: 'Sobre Nosaltres',
    languages: 'Idiomes',
    contactFormDescription:
      'Si vols més informació o tens algun dubte, si us plau omple el següent formulari.',
    name: 'Nom',
    nameRules: 'Si us plau, introdueix el teu nom',
    email: 'El teu correu electrònic',
    emailRules: 'Si us plau, introdueix el teu correu electrònic',
    emailFail: 'Format de correu electrònic invàlid',
    message: 'Missatge',
    messageRules: 'Si us plau, escriu un missatge',
    send: 'Enviar',

    tagline:
      'El millor lloc per gaudir de jocs de taula, rol i molta imaginació. Viu aventures èpiques amb daus, històries i companyia.',
    joinus: 'Uneix-te a l’aventura',

    aboutusTitle: 'Qui som?',
    aboutusDescription:
      '“El Drac Coix” és una comunitat d’entusiastes dels jocs de taula i rol a l’illa de Mallorca. Aquí trobaràs un ambient segur, respectuós i molt divertit per compartir tardes inoblidables, organitzar les teves pròpies partides i conèixer nous amics amb la mateixa passió pels daus, la imaginació i tot allò relacionat amb aquest meravellós món lúdic.',
    aboutusInvitation:
      'Tant si ets un veterà amb experiència en múltiples campanyes, com si ets un curiós que comença a explorar diferents taulers i manuals, aquest és el teu lloc. T’esperem amb els braços oberts i les fitxes preparades!',

    rulesTitle: 'Manaments del Club',
    ruleI: 'Creació d’Esdeveniments i Assistència',
    ruleI1: 'Si tens un joc en ment, fes-ho saber a un organitzador ...',
    ruleI2: 'Qualsevol regla pot tenir una excepció si l’amfitrió ...',
    ruleII: 'Participants, Convidats i Privacitat',
    ruleII1: 'No s’admeten menors, llevat que ...',
    ruleII2: 'És preferible que els teus convidats es registrin ...',
    ruleIII: 'Resolució de Conflictes',
    ruleIII1: 'Qualsevol problema o dubte, consulta amb un organitzador.',
    ruleIII2: 'Alea Iacta Est!',

    joinUs: 'Uneix-te a la Comunitat',
    joinUsDescription:
      'Comparteix les teves aventures, organitza partides i gaudeix de la millor companyia jugadora.',
    socialTitle: 'Xarxes Socials',
    socialDescription: 'Segueix-nos per no perdre’t les nostres últimes partides i esdeveniments',
    footer: 'El Drac Coix / Mallorca / 2017 - {currentYear}',
    footerCreated: 'Creat per ',
    footerWith: ' amb 💜',
  },

  en: {
    dragonCojo: 'The Crippled Dragon',
    contact: 'Contact Me',
    info: 'Information',
    aboutus: 'About Us',
    languages: 'Languages',
    contactFormDescription:
      'If you want more information or have any questions, please fill out the form below.',
    name: 'Name',
    nameRules: 'Please enter your name',
    email: 'Your email',
    emailRules: 'Please enter your email',
    emailFail: 'Invalid email format',
    message: 'Message',
    messageRules: 'Please write a message',
    send: 'Send',

    tagline:
      'The best place to enjoy board games, role-playing, and lots of imagination. Live epic adventures with dice, stories, and camaraderie.',
    joinus: 'Join the Adventure',

    aboutusTitle: 'Who Are We?',
    aboutusDescription:
      '“The Crippled Dragon” is a community of board game and role-playing enthusiasts on the island of Mallorca. Here you will find a safe, respectful, and fun environment to share unforgettable afternoons, organize your own games, and meet new friends with the same passion for dice, imagination, and everything related to this wonderful gaming world.',
    aboutusInvitation:
      'Whether you are a veteran with experience in multiple campaigns or a curious newcomer exploring different boards and manuals, this is your place. We are waiting for you with open arms and ready-to-play tokens!',

    rulesTitle: 'Club Rules',
    ruleI: 'Event Creation and Attendance',
    ruleI1: 'If you have a game in mind, let an organizer know ...',
    ruleI2: 'Any rule can have an exception if the host ...',
    ruleII: 'Participants, Guests, and Privacy',
    ruleII1: 'Minors are not allowed unless ...',
    ruleII2: 'It is preferable that your guests register ...',
    ruleIII: 'Conflict Resolution',
    ruleIII1: 'Any problem or question, consult an organizer.',
    ruleIII2: 'Alea Iacta Est!',

    joinUs: 'Join Our Community',
    joinUsDescription:
      'Share your adventures, organize games, and enjoy the best company of gamers.',
    socialTitle: 'Social Media',
    socialDescription: 'Follow us to stay updated on our latest games and events',
    footer: 'The Crippled Dragon / Mallorca / 2017 - {currentYear}',
    footerCreated: 'Created by ',
    footerWith: ' with 💜',
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'ca',
  messages,
})

export default i18n
