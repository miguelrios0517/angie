import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Angie',
          href: getPermalink('/homes/angie'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const angieHeader = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Sobre Mí',
      href: getPermalink('/sobre-angie'),
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'Sesión Individual (50 min)',
          href: getPermalink('/sesion-individual'),
        },
        {
          text: 'Programa de 12 Semanas',
          href: getPermalink('/programa-12-semanas'),
        },
        {
          text: 'Talleres y Grupos',
          href: getPermalink('/talleres-grupos'),
        },
      ],
    },
    {
      text: 'Testimonios',
      href: getPermalink('/testimonios'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [
    {
      text: 'Reservar Sesión',
      target: '_blank',
      href: 'https://wa.me/51987717886?text=Hola%20Psic.%20Angie%2C%20me%20gustar%C3%ADa%20solicitar%20la%20consulta%20gratuita%20de%2010%20minutos%20para%20conocer%20m%C3%A1s%20sobre%20las%20sesiones.',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Navegación',
      links: [
        { text: 'Inicio', href: '/' },
        { text: 'Sobre mí', href: '/sobre-mi' },
        { text: 'Testimonios', href: '/testimonios' },
        { text: 'Contacto', href: '/contacto' },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { text: 'Sesion Individual (50 minutos)', href: '/sesion-individual.astro' },
        { text: 'Programas de 12 Semananas', href: '/programa-12-semanas.astros' },
        { text: 'Talleres y Grupos', href: '/talleres-grupos.astro' },
      ],
    },
    {
      title: 'Artículos',
      links: [
        { text: 'Sesiones vs. Programa', href: '/blog/sesiones-sueltas-vs-programa-transformacion' },
        { text: '¿Cómo Sanamos? (Técnicas)', href: '/blog/como-sanamos-tecnicas-neuro-alquimia' },
        { text: 'Acompañamiento Remoto', href: '/blog/beneficios-acompanamiento-remoto' },
        { text: '¿Qué es la Hipnosis?', href: '/blog/que-es-la-hipnosis-clinica' },
        { text: '¿Qué es el EFT Tapping?', href: '/blog/que-es-eft-tapping-clinico' },
        { text: 'Psicología Transpersonal', href: '/blog/que-es-psicologia-transpersonal' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('') },
    { text: 'Privacy Policy', href: getPermalink('') },
  ],
  socialLinks: [
    {
      ariaLabel: 'WhatsApp',
      icon: 'tabler:brand-whatsapp',
      href: 'https://wa.me/51987717886?text=Hola%20Psic.%20Angie%2C%20me%20gustar%C3%ADa%20solicitar%20la%20consulta%20gratuita%20de%2010%20minutos%20para%20conocer%20m%C3%A1s%20sobre%20las%20sesiones.',
    },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/psic.angiewong?igsh=cmNtcDV4d3Buc3Fz',
    },
    {
      ariaLabel: 'TikTok',
      icon: 'tabler:brand-tiktok',
      href: 'https://www.tiktok.com/@psico.angiewong?_r=1&_t=ZT-977uMlhAWhZ',
    },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:angiewong.psicologa@gmail.com' },
  ],
  footNote: ` All rights reserved.`,
};
