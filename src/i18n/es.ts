import type { Copy } from './types';

/**
 * Central American Spanish. reviewed: false until a native speaker signs off
 * (see docs/OPEN_QUESTIONS.md G1). Full pass happens in Phase 4.
 */
export const es: Copy = {
  reviewed: false,
  meta: {
    siteName: 'ROAR Mobile',
    homeTitle: 'ROAR Mobile | Un nuevo enfoque para el bienestar animal en Roatán',
    // TODO(copy): Josh to review meta description
    homeDescription:
      'ROAR Mobile es un programa veterinario móvil diseñado para llevar esterilización de alto volumen y atención animal preventiva directamente a las comunidades de Roatán.',
  },
  a11y: {
    skipToContent: 'Saltar al contenido principal',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mainNav: 'Principal',
    menuLabel: 'Menú del sitio',
    footerNav: 'Pie de página',
    language: 'Idioma',
    switchTo: 'Cambiar a English',
  },
  nav: {
    whyRoar: 'Por qué ROAR',
    strategy: 'La Estrategia',
    mobileUnit: 'La Unidad Móvil',
    founding250: 'Fundadores 250',
    faq: 'Preguntas',
    donate: 'Donar',
    contact: 'Contacto',
  },
  cta: {
    founding: 'Hazte Miembro Fundador',
    foundingShort: 'Hazte Miembro',
    donate: 'Donar',
    contactRoar: 'Contacta a ROAR',
    seeHowItWorks: 'Mira cómo funciona',
    unconfirmedLink: 'Enlace aún sin confirmar',
  },
  footer: {
    description:
      'Un programa veterinario móvil que lleva atención animal preventiva directamente a las comunidades de Roatán.',
    navHeading: 'Explorar',
    socialHeading: 'Síguenos',
    contactHeading: 'Contacto',
    legalHeading: 'Legal',
    facebook: 'Facebook',
    instagram: 'Instagram',
    privacy: 'Privacidad',
    terms: 'Términos',
    // TODO(copy): confirm parent-org line with CEO
    parentOrg: 'ROAR Mobile es un programa de Roatan Operation Animal Rescue.',
  },
  benefits: {
    shirt: 'Camiseta o camisilla de ROAR Mobile',
    card: 'Tarjeta de Miembro Fundador',
    monthlyPerk: 'Beneficio mensual de un negocio local',
    monthlyUpdates: 'Informes mensuales de avance',
  },
  home: {
    hero: {
      eyebrow: 'ROAR Mobile',
      title: 'Un nuevo enfoque para la crisis animal de Roatán.',
      subtitle: 'Llevamos atención veterinaria directamente a las comunidades, un sector a la vez.',
      body: 'ROAR Mobile es un programa veterinario móvil diseñado para llevar esterilización de alto volumen y atención veterinaria directamente a las comunidades de Roatán.',
      photoLabel: '[FOTO: portada, foto real de ROAR (animales o comunidad)]',
    },
  },
};
