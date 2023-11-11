export default defineAppConfig({
  alpine: {
    title: 'Buddhanatur',
    description: 'Blog über Zen, Buddhismus und Mehr',

    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },

    header: {
      position: 'center', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo-alternate.svg', // path of the logo
        pathDark: '/logo-alternate-white.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Buddhanatur' // alt of the logo
      }
    },

    footer: {
      credits: {
        // possible value are : true | false
        enabled: false,

        // our github repository
        repository: '',

        text: '',
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },

    socials: {
      twitter: '',
      instagram: '',
    },

    form: {
      successMessage: 'Nachricht versendet. Gasshō!'
    },

    backToTop: {
      text: 'Zurück nach oben',
    },
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
})