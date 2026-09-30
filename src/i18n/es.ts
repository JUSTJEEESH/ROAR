import type { Copy } from './types';
import { pagesEs } from './pages.es';

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
    whyDifferent: 'Por qué este enfoque es distinto',
    exploreStrategy: 'Explora la estrategia',
    seeMobileUnit: 'Conoce la unidad móvil',
    oneTimeDonation: 'Prefiero hacer una donación única',
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
  pages: pagesEs,
  home: {
    hero: {
      eyebrow: 'ROAR Mobile',
      title: 'Un nuevo enfoque para la crisis animal de Roatán.',
      subtitle: 'Llevamos atención veterinaria directamente a las comunidades, un sector a la vez.',
      body: 'ROAR Mobile es un programa veterinario móvil diseñado para llevar esterilización de alto volumen y atención veterinaria directamente a las comunidades de Roatán.',
      photoLabel: '[FOTO: portada, foto real de ROAR (animales o comunidad)]',
    },
    problem: {
      title: 'El problema no es la compasión. Es el acceso.',
      intro: [
        'En Roatán hay personas que quieren profundamente a sus animales.',
        'Pero la atención veterinaria no es igual de accesible en toda la isla. Los servicios pueden ser limitados, la esterilización suele estar dispersa, y los animales de comunidades desatendidas pueden quedar fuera del alcance de una atención constante.',
        'ROAR Mobile está diseñado para llevar esa atención hasta ellos.',
      ],
      points: [
        { title: 'Acceso limitado', text: 'La atención veterinaria no es igual de accesible en todas las comunidades.' },
        { title: 'Servicios dispersos', text: 'Cuando la esterilización se reparte en un área grande, es posible que una comunidad nunca alcance una cobertura significativa.' },
        { title: 'El ciclo continúa', text: 'Sin prevención sostenida, las nuevas camadas siguen reemplazando a los animales que se ayudan.' },
      ],
    },
    idea: {
      titleA: 'No esperemos a que los animales lleguen a la clínica.',
      titleB: 'Llevemos la clínica a los animales.',
      lead: 'ROAR Mobile parte de una idea sencilla:',
      motto: 'Enfocar el trabajo. Llegar a la comunidad. Medir los resultados.',
      body: 'En lugar de repartir los servicios por toda la isla, el programa está diseñado para trabajar comunidad por comunidad, logrando una cobertura de esterilización significativa antes de pasar al siguiente sector.',
      mapNote: 'Ilustración: sectores numerados, no están a escala.',
      mapDescription: 'Un contorno simplificado de Roatán dividido en cinco sectores. Los sectores se cubren uno tras otro, de oeste a este.',
    },
    how: {
      title: 'Cómo funciona',
      steps: [
        { title: 'Mapear', text: 'Identificar animales, ubicaciones, patrones de población y necesidades de la comunidad.' },
        { title: 'Enfocar', text: 'Elegir un sector y concentrar allí los recursos.' },
        { title: 'Esterilizar', text: 'Ofrecer esterilización de alto volumen y la atención de campo adecuada.' },
        { title: 'Registrar', text: 'Registrar animales y ubicaciones con datos de campo y geoetiquetado.' },
        { title: 'Avanzar', text: 'Continuar al siguiente sector, regresando con el tiempo para rondas de mantenimiento.' },
      ],
    },
    unit: {
      titleA: 'Esto no es solo una camioneta.',
      titleB: 'Es una clínica veterinaria sobre ruedas.',
      body: 'ROAR Mobile se está desarrollando como una unidad quirúrgica móvil autónoma, diseñada específicamente para la realidad de Roatán.',
      features: [
        { title: 'Todo terreno', text: 'Diseñada para llegar a comunidades por caminos difíciles y zonas remotas.' },
        { title: 'Autónoma', text: 'Sistemas de generador, solar y baterías respaldan el trabajo en campo.' },
        { title: 'Climatizada', text: 'Un interior climatizado ayuda a mantener condiciones quirúrgicas adecuadas en el clima tropical de Roatán.' },
        { title: 'Basada en datos', text: 'Cada animal se registra y se geoetiqueta para poder medir la cobertura e identificar vacíos.' },
      ],
      photoLabel: '[FOTO: render de la unidad móvil]',
    },
    different: {
      title: 'La prevención cambia la ecuación.',
      body: 'El rescate y la atención médica individual son importantes. ROAR Mobile está diseñado para sumar un sistema de prevención que atiende el crecimiento de la población desde su origen.',
      cols: [
        { title: 'Reactivo', text: 'Responder después de que los animales nacen, se lesionan, son abandonados o están en crisis.' },
        { title: 'Disperso', text: 'Ofrecer servicios en muchos lugares sin concentrar suficiente cobertura en una sola zona.' },
        { title: 'Preventivo', text: 'Trabajar de forma sistemática dentro de una comunidad definida para reducir futuros nacimientos y dar seguimiento a la cobertura.' },
      ],
      note: 'ROAR Mobile no busca reemplazar los esfuerzos existentes. Busca sumar una capa más de prevención.',
    },
    founding: {
      // TODO(copy): "Un año" matches the 12-month term; CEO to confirm (OPEN_QUESTIONS I1)
      title: ['{goal} personas.', 'Un año.', 'Una unidad veterinaria móvil para Roatán.'],
      subtitle: 'Sé parte de los {goal} Fundadores.',
      body: [
        'ROAR Mobile lo está construyendo la comunidad.',
        'Los primeros {goal} Miembros Fundadores están ayudando a financiar el desarrollo y el lanzamiento de la unidad quirúrgica móvil que llevará atención veterinaria directamente a las comunidades de Roatán.',
      ],
      perMonth: '/ mes',
      forMonths: 'durante {months} meses',
      or: 'o',
      perYear: '/ año',
      benefitsHeading: 'Los Miembros Fundadores reciben actualmente:',
      count: '{count} / {goal} Miembros Fundadores',
      goalLabel: 'Miembros Fundadores',
      progressLabel: 'Miembros Fundadores hasta ahora',
    },
    transparency: {
      title: 'Debes poder ver a dónde va tu apoyo.',
      body: [
        'ROAR Mobile se está construyendo sobre trabajo medible e informes transparentes.',
        'A medida que avance el programa, quienes lo apoyan podrán ver en qué punto está el proyecto, qué se ha construido y qué está pasando en el campo.',
      ],
      funding: {
        title: 'Financiamiento',
        text: 'El monto actual de la campaña y el costo total confirmado del proyecto.',
        unconfirmed: 'Las cifras de financiamiento se publicarán aquí cuando estén confirmadas.',
        launchGoal: 'Meta para comenzar la construcción',
        totalCost: 'Costo total del proyecto',
        raised: 'Recaudado hasta ahora',
        restricted: 'Los fondos están restringidos a la construcción de ROAR Mobile.',
      },
      progress: {
        title: 'Avance',
        text: 'El avance de la construcción y los hitos del lanzamiento.',
        unconfirmed: 'Los hitos de la construcción se publicarán aquí.',
        status: { done: 'Listo', in_progress: 'En curso', planned: 'Planificado' },
      },
      impact: {
        title: 'Impacto',
        text: 'Cuando inicien las operaciones: animales atendidos, esterilizaciones realizadas y sectores cubiertos.',
        unconfirmed: 'Las cifras de impacto aparecerán aquí cuando inicien las operaciones y los números se puedan verificar.',
        animalsReached: 'Animales atendidos',
        sterilizations: 'Esterilizaciones realizadas',
        sectorsCovered: 'Sectores cubiertos',
        asOf: 'Al {date}',
      },
    },
    partners: {
      title: 'Construido con la comunidad de Roatán.',
      // TODO(copy): shown until at least one partner has approved use of their name
      empty: 'Aquí se mostrarán los negocios y aliados locales que apoyan a ROAR Mobile.',
    },
    finalCta: {
      title: 'Ayuda a hacer realidad ROAR Mobile.',
      lines: ['Una unidad móvil.', 'Una comunidad a la vez.', 'Un enfoque a largo plazo para el bienestar animal en Roatán.'],
    },
  },
};
