import type { Pages } from './types';

/**
 * Internal-page copy (Spanish, Central American). Structurally identical to pages.en.ts.
 * NOT yet reviewed by a native speaker (OPEN_QUESTIONS G1).
 */
export const pagesEs: Pages = {
  meta: {
    strategy: {
      title: 'La Estrategia de ROAR Mobile | Bienestar animal comunitario en Roatán',
      description:
        'ROAR Mobile trabaja un sector a la vez: mapear, esterilizar, registrar y regresar. Conoce cómo busca reducir la población animal en Roatán.',
    },
    unit: {
      title: 'Unidad Veterinaria ROAR Mobile | Atención para las comunidades de Roatán',
      description:
        'Una unidad quirúrgica móvil autónoma, diseñada para los caminos, el calor y las comunidades de Roatán. Conoce cómo se construye.',
    },
    member: {
      title: 'Únete a los {goal} Fundadores | ROAR Mobile',
      description:
        'Hazte Miembro Fundador de ROAR Mobile y ayuda a financiar una unidad veterinaria móvil para Roatán. Conoce las opciones y los beneficios.',
    },
    donate: {
      title: 'Dona a ROAR Mobile | Ayuda a construir la unidad veterinaria móvil de Roatán',
      description:
        'Ayuda a construir ROAR Mobile. Hazte Miembro Fundador, haz una donación única o patrocina la construcción.',
    },
    faq: {
      title: 'Preguntas frecuentes | ROAR Mobile',
      description:
        'Respuestas sobre la estrategia de ROAR Mobile, la unidad veterinaria móvil, el equipo y el financiamiento.',
    },
    contact: {
      title: 'Contacto | ROAR Mobile',
      description: '¿Tienes una pregunta o quieres ayudar? Comunícate con ROAR Mobile en Roatán, Honduras.',
    },
    privacy: {
      title: 'Privacidad | ROAR Mobile',
      description: 'Cómo el sitio web de ROAR Mobile maneja tu información.',
    },
    terms: {
      title: 'Términos | ROAR Mobile',
      description: 'Términos para el uso del sitio web de ROAR Mobile.',
    },
    notFound: {
      title: 'Página no encontrada | ROAR Mobile',
      description: 'No se encontró esta página.',
    },
  },

  next: {
    strategy: {
      title: 'Conoce la clínica que lo hace posible.',
      text: 'La estrategia necesita una unidad diseñada a propósito para llevarla a cabo.',
    },
    unit: {
      title: 'Ayuda a construirla.',
      text: 'Los primeros Miembros Fundadores están financiando el desarrollo y el lanzamiento de la unidad.',
    },
    faq: {
      title: '¿Aún tienes una pregunta?',
      text: 'Pregunta directamente a ROAR, o ayuda a construir la unidad.',
    },
    member: {
      title: '¿Todavía no estás seguro?',
      text: 'Haz una pregunta, o lee primero cómo funciona la estrategia.',
    },
    donate: {
      title: '¿Prefieres dar cada mes?',
      text: 'Los Miembros Fundadores apoyan la construcción mensualmente y reciben informes durante el proceso.',
    },
    contact: {
      title: '¿Quieres hacer más que escribir?',
      text: 'Los Miembros Fundadores están ayudando a financiar la unidad móvil.',
    },
    legal: {
      title: 'De vuelta al trabajo.',
      text: 'Mira cómo ROAR Mobile lleva atención veterinaria a las comunidades.',
    },
  },

  cta: {
    unavailable: 'La inscripción en línea aún no está disponible.',
    unavailableContact: 'Contacta a ROAR para comenzar.',
    home: 'Volver al inicio',
  },

  member: {
    title: 'Únete a los {goal} Fundadores.',
    subtitle: 'Ayuda a construir algo que Roatán podrá usar durante muchos años.',
    priceHeading: 'Dos formas de unirte',
    // TODO(copy): confirm allocation wording with the CEO (OPEN_QUESTIONS B5)
    fundsHeading: 'Tu membresía ayuda a financiar',
    funds: [
      'La construcción de la unidad móvil',
      'Equipo médico',
      'El lanzamiento del programa',
      'Las operaciones de campo',
      'El trabajo con las comunidades',
    ],
    benefitsHeading: 'Beneficios de los Miembros Fundadores',
    updatesHeading: 'Transparencia',
    updates:
      'Los Miembros Fundadores reciben informes mensuales de avance para ver en qué punto está el proyecto y qué se ha construido.',
    faqHeading: 'Preguntas sobre la membresía',
    faqIds: ['payAnnually', 'cancel', 'whatFunds', 'perks', 'shirt', 'card', 'businesses', 'taxDeductible'],
  },

  donate: {
    title: 'Ayuda a construir ROAR Mobile.',
    subtitle: 'Elige cómo quieres ayudar.',
    member: {
      title: 'Hazte Miembro Fundador',
      text: '{monthly} al mes durante {months} meses, o {annual} al año.',
    },
    gift: {
      title: 'Haz una donación única',
      text: 'Da una sola vez para la construcción de la unidad móvil.',
    },
    sponsor: {
      title: 'Patrocina la construcción',
      text: 'Apoya un equipo específico a través del registro de equipos.',
    },
    taxNote:
      'ROAR Mobile es parte de Roatan Operation Animal Rescue. Las donaciones son deducibles de impuestos según las reglas aplicables.',
  },

  strategy: {
    title: 'Una estrategia de prevención construida alrededor de la comunidad.',
    subtitle: 'Enfocar el trabajo. Lograr una cobertura significativa. Medir los resultados.',
    challenge: {
      title: 'El desafío',
      body: [
        // TODO(copy): Josh to review
        'Cuando la esterilización se reparte en un área grande, cuesta cambiar la población en general. Cada comunidad puede recibir algo de atención, pero ninguna llega al nivel de cobertura necesario para sostener el cambio.',
        'ROAR Mobile está diseñado para trabajar distinto: concentrarse en una comunidad, lograr una cobertura significativa y luego avanzar.',
      ],
    },
    coverage: {
      title: 'Alta cobertura',
      body: 'La estrategia busca alcanzar alrededor de {percent}% de cobertura de esterilización dentro de un área definida, según las fuentes que respaldan el programa.',
      caveat: 'Esta es la meta en torno a la cual se diseñó el programa. No es una garantía de resultados.',
    },
    vacuum: {
      title: 'El efecto vacío',
      // TODO(copy): confirm this explanation against ROAR's own source material
      body: [
        'Cuando solo se esteriliza una parte de los animales de un área, la comida y el refugio siguen disponibles. Animales de zonas cercanas pueden llegar y la población se recupera.',
        'Lograr una cobertura alta en un sector definido a la vez busca reducir este efecto.',
      ],
      before: 'Cobertura baja',
      after: 'Cobertura alta',
      note: 'Solo una ilustración.',
      description:
        'Dos diagramas simplificados. En el primero, solo unos pocos animales de un sector están esterilizados y llegan animales nuevos de afuera. En el segundo, la mayoría de los animales del sector están esterilizados y llegan menos animales nuevos.',
    },
    sweep: {
      title: 'El Barrido por Sectores',
      intro: 'Los mismos siete pasos, sector tras sector.',
      steps: [
        { title: 'Mapear', text: 'Definir el sector y dónde están los animales.' },
        { title: 'Entrar', text: 'Llevar la unidad móvil al sector.' },
        { title: 'Evaluar', text: 'Encontrar a los animales y estimar la población.' },
        { title: 'Esterilizar', text: 'Ofrecer esterilización de alto volumen y la atención de campo adecuada.' },
        { title: 'Registrar', text: 'Anotar cada animal y su ubicación.' },
        { title: 'Regresar', text: 'Volver para llegar a los animales que faltaron y mantener la cobertura.' },
        { title: 'Avanzar', text: 'Continuar al siguiente sector.' },
      ],
    },
    data: {
      title: 'Recolección de datos',
      intro: 'Medir el trabajo es parte del trabajo.',
      items: [
        { title: 'GPS y geoetiquetado', text: 'Las ubicaciones se registran en el campo.' },
        { title: 'Identificación de animales', text: 'Cada animal se registra para contarlo una sola vez.' },
        { title: 'Mapeo de sectores', text: 'Los sectores se definen y se mapean antes de empezar.' },
        { title: 'Estimaciones de población', text: 'Las estimaciones muestran cuántos animales podría tener un sector.' },
        { title: 'Medición de cobertura', text: 'Los registros muestran cuánto de un sector se ha atendido.' },
        { title: 'Informes de avance', text: 'Los resultados se compartirán con quienes apoyan el programa a medida que se verifiquen.' },
      ],
    },
    maintenance: {
      title: 'Mantenimiento a largo plazo',
      body: 'El programa busca regresar a los sectores con el tiempo y mantener la cobertura una vez lograda.',
    },
    partnerships: {
      title: 'Alianzas',
      intro: 'ROAR Mobile se está desarrollando con la orientación de estas organizaciones.',
    },
  },

  unit: {
    title: 'Una clínica veterinaria hecha para Roatán.',
    subtitle: 'Una unidad quirúrgica móvil autónoma, diseñada para la isla a la que va a servir.',
    photoLabel: '[FOTO: render de la unidad móvil]',
    island: {
      title: 'Diseñada para la isla',
      items: ['Caminos sin pavimentar', 'Comunidades remotas', 'Calor y humedad tropicales', 'Infraestructura limitada'],
    },
    field: {
      title: 'Hecha para la medicina de campo',
      // TODO(copy): planned features; confirm against final specs (OPEN_QUESTIONS E2)
      intro: 'La unidad se está diseñando para incluir:',
      items: [
        'Un espacio quirúrgico',
        'Un área de recuperación y monitoreo',
        'Climatización',
        'Sistemas de energía',
        'Equipo médico',
        'Almacenamiento',
      ],
    },
    offGrid: {
      title: 'Capacidad autónoma',
      body: 'Se planea que sistemas de generador, solar y baterías respalden el trabajo en campo.',
    },
    team: {
      title: 'El equipo',
      intro: 'El plan de personal previsto para el lanzamiento:',
      roles: {
        fullTimeBilingualVet: { one: 'veterinario o veterinaria hondureña bilingüe de tiempo completo', other: 'veterinarios o veterinarias hondureños bilingües de tiempo completo' },
        fullTimeVetTech: { one: 'técnico o técnica veterinaria de tiempo completo', other: 'técnicos o técnicas veterinarias de tiempo completo' },
        partTimeAssistant: { one: 'asistente de medio tiempo', other: 'asistentes de medio tiempo' },
      },
      note: 'Este es el plan actual y puede cambiar antes del lanzamiento.',
    },
    data: {
      title: 'Datos en el campo',
      body: 'Cada animal se puede registrar y ubicar en un mapa, para que ROAR vea qué partes de un sector ya se atendieron y dónde quedan vacíos.',
    },
    budget: {
      title: 'Presupuesto de construcción',
      total: 'Costo total del proyecto',
      unconfirmed: 'El presupuesto del proyecto se publicará aquí cuando esté confirmado.',
      disclaimer:
        'El presupuesto del proyecto puede cambiar a medida que se definan los requisitos de equipo, construcción y operación.',
    },
  },

  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Respuestas breves sobre la estrategia, la unidad y cómo ayudar.',
    pendingNote: 'Solo desarrollo: respuesta aún sin confirmar por ROAR. Oculta en producción.',
    groups: [
      { title: 'Estrategia e impacto', ids: ['whyNotRescue', 'oneCommunity', 'sectorSweep', 'whyCoverage', 'vacuum', 'progress'] },
      { title: 'Atención médica', ids: ['afterSurgery', 'recovery', 'critical', 'sickAnimal', 'bringRescue', 'services'] },
      { title: 'Equipo y voluntarios', ids: ['whoOperates', 'honduranStaff', 'volunteer', 'volunteersInUnit'] },
      { title: 'Financiamiento', ids: ['moneyTracked', 'whatFunds', 'taxDeductible', 'cancel', 'afterYear'] },
    ],
    items: {
      whyNotRescue: {
        q: '¿Por qué el rescate por sí solo no es suficiente?',
        a: 'El rescate y la atención médica individual son importantes, y ROAR Mobile no busca reemplazarlos. Ellos responden a animales que ya necesitan ayuda. ROAR Mobile suma un sistema de prevención que atiende el crecimiento de la población desde su origen.',
      },
      oneCommunity: {
        q: '¿Por qué enfocarse en una comunidad a la vez?',
        a: 'Repartir los servicios por toda la isla puede dejar a cada comunidad con una cobertura parcial. Trabajar sector por sector concentra los recursos para que una comunidad logre una cobertura de esterilización significativa antes de que el programa avance.',
      },
      sectorSweep: {
        q: '¿Qué es el Barrido por Sectores?',
        a: 'Es el método de trabajo en cada sector: mapear, entrar, evaluar, esterilizar, registrar, regresar y avanzar. La página de la Estrategia explica cada paso.',
      },
      whyCoverage: {
        q: '¿Por qué importa la cobertura?',
        a: 'La estrategia busca lograr una alta cobertura de esterilización en un área definida, alrededor de {percent}% según las fuentes que respaldan el programa. Una cobertura parcial puede permitir que la población se recupere; una cobertura alta en un área es lo que el programa está diseñado para lograr.',
      },
      vacuum: {
        q: '¿Qué es el efecto vacío?',
        a: 'Cuando se esteriliza a algunos animales de un área pero la cobertura sigue baja, la comida y el refugio siguen disponibles y llegan animales de zonas cercanas. Concentrarse en un sector a la vez busca reducir este efecto.',
      },
      progress: {
        q: '¿Cómo se mide el avance?',
        a: 'Los animales se registran y se geoetiquetan en el campo, de modo que se puede medir la cobertura de cada sector e identificar los vacíos. El avance se compartirá mediante informes periódicos.',
      },
      services: {
        q: '¿Qué servicios ofrece la unidad móvil?',
        a: 'La unidad se está diseñando para esterilización de alto volumen y atención de campo adecuada, además de apoyo veterinario en las comunidades de Roatán.',
      },
      afterSurgery: { q: '¿Qué pasa después de la cirugía?', a: '', pending: true },
      recovery: { q: '¿Dónde se recuperan los animales?', a: '', pending: true },
      critical: { q: '¿Qué pasa con los animales en estado crítico?', a: '', pending: true },
      sickAnimal: { q: '¿Puedo llevar un animal enfermo?', a: '', pending: true },
      bringRescue: { q: '¿Puedo llevar un animal rescatado?', a: '', pending: true },
      whoOperates: {
        q: '¿Quién operará la unidad?',
        a: 'El equipo previsto para el lanzamiento es un veterinario o veterinaria de tiempo completo, un técnico o técnica veterinaria de tiempo completo y asistentes de medio tiempo. La página de la Unidad Móvil tiene el plan de personal actual.',
      },
      honduranStaff: {
        q: '¿El personal será hondureño?',
        a: 'El plan de personal para el lanzamiento da prioridad a profesionales veterinarios hondureños, e incluye un veterinario o veterinaria hondureña bilingüe de tiempo completo.',
      },
      volunteer: {
        q: '¿Cómo puedo ser voluntario?',
        a: 'Envía un mensaje desde la página de contacto y elige «Voluntariado» como tema.',
      },
      volunteersInUnit: { q: '¿Los voluntarios pueden trabajar dentro de la unidad móvil?', a: '', pending: true },
      moneyTracked: { q: '¿Cómo se le da seguimiento al dinero?', a: '', pending: true },
      whatFunds: { q: '¿Qué financia la membresía?', a: '', pending: true },
      taxDeductible: {
        q: '¿Mi donación es deducible de impuestos?',
        a: 'ROAR Mobile es parte de Roatan Operation Animal Rescue. Las donaciones son deducibles de impuestos según las reglas aplicables.',
      },
      cancel: { q: '¿Puedo cancelar mi contribución mensual?', a: '', pending: true },
      afterYear: { q: '¿Qué pasa después del primer año?', a: '', pending: true },
      payAnnually: {
        q: '¿Puedo pagar por año?',
        a: 'Sí. La membresía cuesta {monthly} al mes durante {months} meses, o {annual} al año.',
      },
      perks: {
        q: '¿Qué beneficios incluye?',
        a: 'Los Miembros Fundadores reciben actualmente: {benefits}.',
      },
      shirt: { q: '¿Cómo recibiré mi camiseta?', a: '', pending: true },
      card: { q: '¿Cómo funciona la tarjeta de membresía?', a: '', pending: true },
      businesses: { q: '¿Cómo participan los negocios?', a: '', pending: true },
    },
  },

  contact: {
    title: '¿Tienes una pregunta o quieres ayudar?',
    emailLabel: 'Correo',
    locationLabel: 'Ubicación',
    disconnected: 'El formulario de contacto aún no está conectado. Escríbenos directamente por correo.',
    form: {
      name: 'Nombre',
      email: 'Correo electrónico',
      topic: 'Tema',
      subject: 'Asunto',
      message: 'Mensaje',
      submit: 'Enviar mensaje',
      sending: 'Enviando…',
      success: 'Gracias. Tu mensaje fue enviado.',
      error: 'Algo salió mal. Inténtalo de nuevo, o escríbenos directamente por correo.',
      required: 'obligatorio',
      topics: {
        general: 'Pregunta general',
        founding: 'Miembro Fundador',
        donation: 'Donación',
        business: 'Alianza con negocios',
        volunteer: 'Voluntariado',
        media: 'Prensa',
        other: 'Otro',
      },
    },
  },

  legal: {
    // TODO(legal): borradores en lenguaje sencillo para revisión del CEO o asesoría legal (OPEN_QUESTIONS H4)
    privacy: {
      title: 'Privacidad',
      sections: [
        {
          title: 'Qué información recopila este sitio',
          body: ['Este es un sitio web estático, sin cuentas de usuario. Si envías un mensaje por el formulario de contacto, recibimos tu nombre, tu correo electrónico y tu mensaje para poder responderte.'],
        },
        {
          title: 'Formulario de contacto',
          body: ['Los mensajes son procesados por Formspree, un servicio externo de formularios. Por favor no incluyas información sensible en tu mensaje.'],
        },
        {
          title: 'Donaciones y membresías',
          body: ['Las donaciones y membresías se procesan mediante Zeffy, un servicio externo. Este sitio no recopila ni guarda tus datos de pago.'],
        },
        {
          title: 'Analítica',
          body: ['Si se activa la analítica, se usa una herramienta enfocada en la privacidad que cuenta visitas y clics en botones sin cookies ni perfiles personales.'],
        },
        {
          title: 'Preguntas',
          body: ['Para preguntas sobre privacidad, escribe a {email}.'],
        },
      ],
    },
    terms: {
      title: 'Términos',
      sections: [
        {
          title: 'Sobre este sitio',
          body: ['Este sitio ofrece información sobre ROAR Mobile, un programa de Roatan Operation Animal Rescue.'],
        },
        {
          title: 'Exactitud',
          body: ['Procuramos mantener la información al día. Los planes, costos y plazos pueden cambiar a medida que avanza el proyecto.'],
        },
        {
          title: 'Donaciones y membresías',
          body: ['Las donaciones y membresías se manejan mediante servicios externos y están sujetas a sus términos. El tratamiento fiscal depende de las reglas aplicables.'],
        },
        {
          title: 'Enlaces externos',
          body: ['Este sitio enlaza a otros sitios web. ROAR Mobile no es responsable de su contenido.'],
        },
        {
          title: 'Contacto',
          body: ['Preguntas sobre estos términos: {email}.'],
        },
      ],
    },
  },

  notFound: {
    title: 'Página no encontrada',
    text: 'Esa página no existe o se movió.',
  },
};
