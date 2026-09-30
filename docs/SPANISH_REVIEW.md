# Spanish review sheet

Generated from `src/i18n/en.ts`, `src/i18n/es.ts`, `src/i18n/pages.en.ts`, `src/i18n/pages.es.ts`.
Status: **not yet reviewed by a native speaker** (`reviewed: false`, OPEN_QUESTIONS G1).

## How to review

1. Read the **Spanish** column. Where it should change, write the replacement in the **Fix** column (or edit the `.ts` files directly).
2. Target: Central American Spanish (Honduras), not Spain Spanish. Warm, direct, plain.
3. `{goal}`, `{months}`, `{monthly}`, `{annual}`, `{percent}`, `{email}`, `{benefits}`, `{count}`, `{date}` are filled in from the site config. Keep them exactly as written.
4. When done, tell Josh to set `reviewed: true` in `src/i18n/es.ts`.

## Terminology decisions to confirm

| Term | Used | Alternatives / question |
|---|---|---|
| Register | Informal-neutral **tú** imperatives in CTAs ("Hazte Miembro Fundador", "Únete", "Ayuda a…", "Dona") | Does ROAR prefer **vos** (common in spoken Honduran Spanish) or a more formal **usted** on the site? |
| Founding Member | Miembro Fundador / Miembros Fundadores | "Socio fundador"? |
| Founding 250 (nav) | Fundadores 250 | "Los 250 Fundadores"? |
| Shirt or tank | Camiseta o camisilla | Which is the local word for a tank top: "camisilla", "camiseta sin mangas", "playera"? |
| Mobile unit | Unidad Móvil | OK locally? |
| Van | camioneta ("Esto no es solo una camioneta") | Best word locally for a van? |
| Sterilization | esterilización | "Castración" is more colloquial for animals. Which do local readers expect? |
| Litters | camadas | OK? |
| Geotagging | geoetiquetado | Common in Honduras or should it be "georreferenciación"? |
| Sector Sweep | Barrido por Sectores | Better name? |
| Vacuum effect | efecto vacío | OK? |
| Off-grid | Autónoma / capacidad autónoma | Better phrase for "off-grid"? |
| Volunteer | voluntario / Voluntariado | OK? |
| Perk | beneficio (mensual de un negocio local) | "Descuento"/"ventaja"? |
| Donation | donación / Donar | OK? |
| Veterinarian (team) | veterinario o veterinaria | Prefer a gender-neutral form? |


## meta

| Key | English | Spanish | Fix |
|---|---|---|---|
| `siteName` | ROAR Mobile | ROAR Mobile | |
| `homeTitle` | ROAR Mobile \| A New Approach to Animal Welfare in Roatán | ROAR Mobile \| Un nuevo enfoque para el bienestar animal en Roatán | |
| `homeDescription` | ROAR Mobile is a purpose-built mobile veterinary program bringing high-volume sterilization and preventive animal care directly into communities across Roatán. | ROAR Mobile es un programa veterinario móvil diseñado para llevar esterilización de alto volumen y atención animal preventiva directamente a las comunidades de Roatán. | |

## a11y

| Key | English | Spanish | Fix |
|---|---|---|---|
| `skipToContent` | Skip to main content | Saltar al contenido principal | |
| `openMenu` | Open menu | Abrir menú | |
| `closeMenu` | Close menu | Cerrar menú | |
| `mainNav` | Main | Principal | |
| `menuLabel` | Site menu | Menú del sitio | |
| `footerNav` | Footer | Pie de página | |
| `language` | Language | Idioma | |
| `switchTo` | Switch to Español | Cambiar a English | |

## nav

| Key | English | Spanish | Fix |
|---|---|---|---|
| `whyRoar` | Why ROAR | Por qué ROAR | |
| `strategy` | The Strategy | La Estrategia | |
| `mobileUnit` | The Mobile Unit | La Unidad Móvil | |
| `founding250` | Founding 250 | Fundadores 250 | |
| `faq` | FAQ | Preguntas | |
| `donate` | Donate | Donar | |
| `contact` | Contact | Contacto | |

## cta

| Key | English | Spanish | Fix |
|---|---|---|---|
| `founding` | Become a Founding Member | Hazte Miembro Fundador | |
| `foundingShort` | Become a Member | Hazte Miembro | |
| `donate` | Donate | Donar | |
| `contactRoar` | Contact ROAR | Contacta a ROAR | |
| `seeHowItWorks` | See how it works | Mira cómo funciona | |
| `whyDifferent` | Why this approach is different | Por qué este enfoque es distinto | |
| `exploreStrategy` | Explore the strategy | Explora la estrategia | |
| `seeMobileUnit` | See the mobile unit | Conoce la unidad móvil | |
| `oneTimeDonation` | I’d rather make a one-time donation | Prefiero hacer una donación única | |
| `unconfirmedLink` | Link not confirmed yet | Enlace aún sin confirmar | |

## footer

| Key | English | Spanish | Fix |
|---|---|---|---|
| `description` | A mobile veterinary program bringing preventive animal care directly into communities across Roatán. | Un programa veterinario móvil que lleva atención animal preventiva directamente a las comunidades de Roatán. | |
| `navHeading` | Explore | Explorar | |
| `socialHeading` | Follow | Síguenos | |
| `contactHeading` | Contact | Contacto | |
| `legalHeading` | Legal | Legal | |
| `facebook` | Facebook | Facebook | |
| `instagram` | Instagram | Instagram | |
| `privacy` | Privacy | Privacidad | |
| `terms` | Terms | Términos | |
| `parentOrg` | ROAR Mobile is a program of Roatan Operation Animal Rescue. | ROAR Mobile es un programa de Roatan Operation Animal Rescue. | |

## benefits

| Key | English | Spanish | Fix |
|---|---|---|---|
| `shirt` | ROAR Mobile shirt or tank | Camiseta o camisilla de ROAR Mobile | |
| `card` | Founding Member card | Tarjeta de Miembro Fundador | |
| `monthlyPerk` | Monthly local business perk | Beneficio mensual de un negocio local | |
| `monthlyUpdates` | Monthly progress updates | Informes mensuales de avance | |

## pages.meta

| Key | English | Spanish | Fix |
|---|---|---|---|
| `strategy.title` | The ROAR Mobile Strategy \| Community-Based Animal Welfare in Roatán | La Estrategia de ROAR Mobile \| Bienestar animal comunitario en Roatán | |
| `strategy.description` | ROAR Mobile works one sector at a time: map, sterilize, track, and return. See how the strategy is designed to reduce animal population growth in Roatán. | ROAR Mobile trabaja un sector a la vez: mapear, esterilizar, registrar y regresar. Conoce cómo la estrategia busca reducir el crecimiento de la población animal en Roatán. | |
| `unit.title` | ROAR Mobile Veterinary Unit \| Bringing Care to Roatán Communities | Unidad Veterinaria ROAR Mobile \| Atención para las comunidades de Roatán | |
| `unit.description` | A self-contained mobile surgical unit designed for Roatán’s roads, heat, and communities. See how the ROAR Mobile veterinary unit is being built. | Una unidad quirúrgica móvil autónoma, diseñada para los caminos, el calor y las comunidades de Roatán. Conoce cómo se está construyendo la unidad veterinaria de ROAR Mobile. | |
| `member.title` | Join the Founding {goal} \| ROAR Mobile | Únete a los {goal} Fundadores \| ROAR Mobile | |
| `member.description` | Become a Founding Member of ROAR Mobile and help fund a mobile veterinary unit for Roatán. See the membership options, benefits, and answers to common questions. | Hazte Miembro Fundador de ROAR Mobile y ayuda a financiar una unidad veterinaria móvil para Roatán. Conoce las opciones de membresía, los beneficios y las respuestas a preguntas frecuentes. | |
| `donate.title` | Donate to ROAR Mobile \| Help Build Roatán’s Mobile Veterinary Unit | Dona a ROAR Mobile \| Ayuda a construir la unidad veterinaria móvil de Roatán | |
| `donate.description` | Help build ROAR Mobile. Become a Founding Member, make a one-time gift, or sponsor the build. | Ayuda a construir ROAR Mobile. Hazte Miembro Fundador, haz una donación única o patrocina la construcción. | |
| `faq.title` | FAQ \| ROAR Mobile | Preguntas frecuentes \| ROAR Mobile | |
| `faq.description` | Answers about the ROAR Mobile strategy, the mobile veterinary unit, the team, and how funding works. | Respuestas sobre la estrategia de ROAR Mobile, la unidad veterinaria móvil, el equipo y el financiamiento. | |
| `contact.title` | Contact \| ROAR Mobile | Contacto \| ROAR Mobile | |
| `contact.description` | Have a question or want to help? Get in touch with ROAR Mobile in Roatán, Honduras. | ¿Tienes una pregunta o quieres ayudar? Comunícate con ROAR Mobile en Roatán, Honduras. | |
| `privacy.title` | Privacy \| ROAR Mobile | Privacidad \| ROAR Mobile | |
| `privacy.description` | How the ROAR Mobile website handles your information. | Cómo el sitio web de ROAR Mobile maneja tu información. | |
| `terms.title` | Terms \| ROAR Mobile | Términos \| ROAR Mobile | |
| `terms.description` | Terms for using the ROAR Mobile website. | Términos para el uso del sitio web de ROAR Mobile. | |
| `notFound.title` | Page not found \| ROAR Mobile | Página no encontrada \| ROAR Mobile | |
| `notFound.description` | This page could not be found. | No se encontró esta página. | |

## pages.next

| Key | English | Spanish | Fix |
|---|---|---|---|
| `strategy.title` | See the clinic that makes it possible. | Conoce la clínica que lo hace posible. | |
| `strategy.text` | The strategy needs a purpose-built unit to carry it out. | La estrategia necesita una unidad diseñada a propósito para llevarla a cabo. | |
| `unit.title` | Help build it. | Ayuda a construirla. | |
| `unit.text` | The first Founding Members are funding the development and launch of the unit. | Los primeros Miembros Fundadores están financiando el desarrollo y el lanzamiento de la unidad. | |
| `faq.title` | Still have a question? | ¿Aún tienes una pregunta? | |
| `faq.text` | Ask ROAR directly, or help build the unit. | Pregunta directamente a ROAR, o ayuda a construir la unidad. | |
| `member.title` | Not sure yet? | ¿Todavía no estás seguro? | |
| `member.text` | Ask a question, or read how the strategy works first. | Haz una pregunta, o lee primero cómo funciona la estrategia. | |
| `donate.title` | Prefer to give every month? | ¿Prefieres dar cada mes? | |
| `donate.text` | Founding Members support the build monthly and receive updates along the way. | Los Miembros Fundadores apoyan la construcción mensualmente y reciben informes durante el proceso. | |
| `contact.title` | Want to do more than write? | ¿Quieres hacer más que escribir? | |
| `contact.text` | Founding Members are helping fund the mobile unit. | Los Miembros Fundadores están ayudando a financiar la unidad móvil. | |
| `legal.title` | Back to the work. | De vuelta al trabajo. | |
| `legal.text` | See how ROAR Mobile is bringing veterinary care into communities. | Mira cómo ROAR Mobile lleva atención veterinaria a las comunidades. | |

## pages.cta

| Key | English | Spanish | Fix |
|---|---|---|---|
| `unavailable` | Online sign-up isn’t available yet. | La inscripción en línea aún no está disponible. | |
| `unavailableContact` | Contact ROAR to get started. | Contacta a ROAR para comenzar. | |
| `home` | Back to the homepage | Volver al inicio | |

## pages.member

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title` | Join the Founding {goal}. | Únete a los {goal} Fundadores. | |
| `subtitle` | Help build something Roatán can use for years to come. | Ayuda a construir algo que Roatán podrá usar durante muchos años. | |
| `priceHeading` | Two ways to join | Dos formas de unirte | |
| `fundsHeading` | Your membership helps fund | Tu membresía ayuda a financiar | |
| `funds.0` | Mobile unit construction | La construcción de la unidad móvil | |
| `funds.1` | Medical equipment | Equipo médico | |
| `funds.2` | Program launch | El lanzamiento del programa | |
| `funds.3` | Field operations | Las operaciones de campo | |
| `funds.4` | Community outreach | El trabajo con las comunidades | |
| `benefitsHeading` | Founding Member benefits | Beneficios de los Miembros Fundadores | |
| `updatesHeading` | Transparency | Transparencia | |
| `updates` | Founding Members receive monthly progress updates, so you can see where the project stands and what has been built. | Los Miembros Fundadores reciben informes mensuales de avance para ver en qué punto está el proyecto y qué se ha construido. | |
| `faqHeading` | Questions about membership | Preguntas sobre la membresía | |

## pages.donate

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title` | Help build ROAR Mobile. | Ayuda a construir ROAR Mobile. | |
| `subtitle` | Choose how you want to help. | Elige cómo quieres ayudar. | |
| `member.title` | Become a Founding Member | Hazte Miembro Fundador | |
| `member.text` | {monthly} a month for {months} months, or {annual} a year. | {monthly} al mes durante {months} meses, o {annual} al año. | |
| `gift.title` | Make a one-time gift | Haz una donación única | |
| `gift.text` | Give once toward building the mobile unit. | Da una sola vez para la construcción de la unidad móvil. | |
| `sponsor.title` | Sponsor the build | Patrocina la construcción | |
| `sponsor.text` | Support a specific piece of equipment through the equipment registry. | Apoya un equipo específico a través del registro de equipos. | |
| `taxNote` | ROAR Mobile is part of Roatan Operation Animal Rescue. Donations are tax deductible subject to applicable rules. | ROAR Mobile es parte de Roatan Operation Animal Rescue. Las donaciones son deducibles de impuestos según las reglas aplicables. | |

## pages.strategy

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title` | A prevention strategy built around the community. | Una estrategia de prevención construida alrededor de la comunidad. | |
| `subtitle` | Focus the work. Reach meaningful coverage. Measure the results. | Enfocar el trabajo. Lograr una cobertura significativa. Medir los resultados. | |
| `challenge.title` | The challenge | El desafío | |
| `challenge.body.0` | Sterilization spread thinly across a large area can struggle to change the overall population. Each community may get some attention, but none may reach the level of coverage needed to hold the change. | Cuando la esterilización se reparte en un área grande, cuesta cambiar la población en general. Cada comunidad puede recibir algo de atención, pero ninguna llega al nivel de cobertura necesario para sostener el cambio. | |
| `challenge.body.1` | ROAR Mobile is designed to work differently: concentrate on one community, reach meaningful coverage, then move on. | ROAR Mobile está diseñado para trabajar distinto: concentrarse en una comunidad, lograr una cobertura significativa y luego avanzar. | |
| `coverage.title` | High coverage | Alta cobertura | |
| `coverage.body` | The strategy is built around reaching around {percent}% sterilization coverage within a defined area, based on the program’s supporting sources. | La estrategia busca alcanzar alrededor de {percent}% de cobertura de esterilización dentro de un área definida, según las fuentes que respaldan el programa. | |
| `coverage.caveat` | This is the target the program is designed around. It is not a guarantee of results. | Esta es la meta en torno a la cual se diseñó el programa. No es una garantía de resultados. | |
| `vacuum.title` | The vacuum effect | El efecto vacío | |
| `vacuum.body.0` | When only some of the animals in an area are sterilized, food and shelter stay available. Animals from nearby areas can move in, and the population rebuilds. | Cuando solo se esteriliza una parte de los animales de un área, la comida y el refugio siguen disponibles. Animales de zonas cercanas pueden llegar y la población se recupera. | |
| `vacuum.body.1` | Reaching high coverage in one defined sector at a time is designed to reduce this effect. | Lograr una cobertura alta en un sector definido a la vez busca reducir este efecto. | |
| `vacuum.before` | Low coverage | Cobertura baja | |
| `vacuum.after` | High coverage | Cobertura alta | |
| `vacuum.note` | Illustration only. | Solo una ilustración. | |
| `vacuum.description` | Two simplified diagrams. In the first, only a few animals in a sector are sterilized and new animals move in from outside. In the second, most animals in the sector are sterilized and fewer new animals move in. | Dos diagramas simplificados. En el primero, solo unos pocos animales de un sector están esterilizados y llegan animales nuevos de afuera. En el segundo, la mayoría de los animales del sector están esterilizados y llegan menos animales nuevos. | |
| `sweep.title` | The Sector Sweep | El Barrido por Sectores | |
| `sweep.intro` | The same seven steps, sector after sector. | Los mismos siete pasos, sector tras sector. | |
| `sweep.steps.0.title` | Map | Mapear | |
| `sweep.steps.0.text` | Define the sector and where animals are. | Definir el sector y dónde están los animales. | |
| `sweep.steps.1.title` | Enter | Entrar | |
| `sweep.steps.1.text` | Bring the mobile unit into the sector. | Llevar la unidad móvil al sector. | |
| `sweep.steps.2.title` | Survey | Evaluar | |
| `sweep.steps.2.text` | Find the animals and estimate the population. | Encontrar a los animales y estimar la población. | |
| `sweep.steps.3.title` | Sterilize | Esterilizar | |
| `sweep.steps.3.text` | Provide high-volume sterilization and appropriate field care. | Ofrecer esterilización de alto volumen y la atención de campo adecuada. | |
| `sweep.steps.4.title` | Track | Registrar | |
| `sweep.steps.4.text` | Record each animal and its location. | Anotar cada animal y su ubicación. | |
| `sweep.steps.5.title` | Return | Regresar | |
| `sweep.steps.5.text` | Come back to reach animals that were missed and to maintain coverage. | Volver para llegar a los animales que faltaron y mantener la cobertura. | |
| `sweep.steps.6.title` | Move forward | Avanzar | |
| `sweep.steps.6.text` | Continue to the next sector. | Continuar al siguiente sector. | |
| `data.title` | Data collection | Recolección de datos | |
| `data.intro` | Measuring the work is part of the work. | Medir el trabajo es parte del trabajo. | |
| `data.items.0.title` | GPS and geotagging | GPS y geoetiquetado | |
| `data.items.0.text` | Locations are recorded in the field. | Las ubicaciones se registran en el campo. | |
| `data.items.1.title` | Animal identification | Identificación de animales | |
| `data.items.1.text` | Each animal is recorded so it is counted once. | Cada animal se registra para contarlo una sola vez. | |
| `data.items.2.title` | Sector mapping | Mapeo de sectores | |
| `data.items.2.text` | Sectors are defined and mapped before work begins. | Los sectores se definen y se mapean antes de empezar. | |
| `data.items.3.title` | Population estimates | Estimaciones de población | |
| `data.items.3.text` | Estimates show how many animals a sector may have. | Las estimaciones muestran cuántos animales podría tener un sector. | |
| `data.items.4.title` | Coverage measurement | Medición de cobertura | |
| `data.items.4.text` | Records show how much of a sector has been reached. | Los registros muestran cuánto de un sector se ha atendido. | |
| `data.items.5.title` | Progress reporting | Informes de avance | |
| `data.items.5.text` | Results are meant to be shared with supporters as they are verified. | Los resultados se compartirán con quienes apoyan el programa a medida que se verifiquen. | |
| `maintenance.title` | Long-term maintenance | Mantenimiento a largo plazo | |
| `maintenance.body` | The program is intended to return to sectors over time and maintain coverage once it has been reached. | El programa busca regresar a los sectores con el tiempo y mantener la cobertura una vez lograda. | |
| `partnerships.title` | Partnerships | Alianzas | |
| `partnerships.intro` | ROAR Mobile is being developed with input from these organizations. | ROAR Mobile se está desarrollando con la orientación de estas organizaciones. | |

## pages.unit

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title` | A veterinary clinic built for Roatán. | Una clínica veterinaria hecha para Roatán. | |
| `subtitle` | A self-contained mobile surgical unit, designed for the island it will serve. | Una unidad quirúrgica móvil autónoma, diseñada para la isla a la que va a servir. | |
| `photoLabel` | [PHOTO: mobile unit rendering] | [FOTO: render de la unidad móvil] | |
| `island.title` | Designed for the island | Diseñada para la isla | |
| `island.items.0` | Unpaved roads | Caminos sin pavimentar | |
| `island.items.1` | Remote communities | Comunidades remotas | |
| `island.items.2` | Tropical heat and humidity | Calor y humedad tropicales | |
| `island.items.3` | Limited infrastructure | Infraestructura limitada | |
| `field.title` | Built for field medicine | Hecha para la medicina de campo | |
| `field.intro` | The unit is being designed to include: | La unidad se está diseñando para incluir: | |
| `field.items.0` | A surgical workspace | Un espacio quirúrgico | |
| `field.items.1` | A recovery and monitoring area | Un área de recuperación y monitoreo | |
| `field.items.2` | Climate control | Climatización | |
| `field.items.3` | Power systems | Sistemas de energía | |
| `field.items.4` | Medical equipment | Equipo médico | |
| `field.items.5` | Storage | Almacenamiento | |
| `offGrid.title` | Off-grid capability | Capacidad autónoma | |
| `offGrid.body` | Generator, solar, and battery systems are planned to support field operations. | Se planea que sistemas de generador, solar y baterías respalden el trabajo en campo. | |
| `team.title` | The team | El equipo | |
| `team.intro` | The intended launch staffing plan: | El plan de personal previsto para el lanzamiento: | |
| `team.roles.fullTimeBilingualVet.one` | full-time bilingual Honduran veterinarian | veterinario o veterinaria hondureña bilingüe de tiempo completo | |
| `team.roles.fullTimeBilingualVet.other` | full-time bilingual Honduran veterinarians | veterinarios o veterinarias hondureños bilingües de tiempo completo | |
| `team.roles.fullTimeVetTech.one` | full-time veterinary technician | técnico o técnica veterinaria de tiempo completo | |
| `team.roles.fullTimeVetTech.other` | full-time veterinary technicians | técnicos o técnicas veterinarias de tiempo completo | |
| `team.roles.partTimeAssistant.one` | part-time assistant | asistente de medio tiempo | |
| `team.roles.partTimeAssistant.other` | part-time assistants | asistentes de medio tiempo | |
| `team.note` | This is the current plan and may change before launch. | Este es el plan actual y puede cambiar antes del lanzamiento. | |
| `data.title` | Data in the field | Datos en el campo | |
| `data.body` | Each animal can be recorded and mapped, so ROAR can see which parts of a sector have been reached and where gaps remain. | Cada animal se puede registrar y ubicar en un mapa, para que ROAR vea qué partes de un sector ya se atendieron y dónde quedan vacíos. | |
| `budget.title` | Build budget | Presupuesto de construcción | |
| `budget.total` | Total project cost | Costo total del proyecto | |
| `budget.unconfirmed` | The project budget will be published here once it is confirmed. | El presupuesto del proyecto se publicará aquí cuando esté confirmado. | |
| `budget.disclaimer` | The project budget is subject to change as equipment, construction, and operating requirements are finalized. | El presupuesto del proyecto puede cambiar a medida que se definan los requisitos de equipo, construcción y operación. | |

## pages.faq

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title` | Frequently asked questions | Preguntas frecuentes | |
| `subtitle` | Short answers about the strategy, the unit, and how to help. | Respuestas breves sobre la estrategia, la unidad y cómo ayudar. | |
| `pendingNote` | Dev only: answer not yet confirmed by ROAR. Hidden in production. | Solo desarrollo: respuesta aún sin confirmar por ROAR. Oculta en producción. | |
| `groups.0.title` | Strategy & impact | Estrategia e impacto | |
| `groups.1.title` | Medical care | Atención médica | |
| `groups.2.title` | Team & volunteers | Equipo y voluntarios | |
| `groups.3.title` | Funding | Financiamiento | |
| `items.whyNotRescue.q` | Why isn’t rescue alone enough? | ¿Por qué el rescate por sí solo no es suficiente? | |
| `items.whyNotRescue.a` | Rescue and individual medical care matter, and ROAR Mobile is not meant to replace them. They respond to animals already in need. ROAR Mobile adds a prevention system that addresses population growth at its source. | El rescate y la atención médica individual son importantes, y ROAR Mobile no busca reemplazarlos. Ellos responden a animales que ya necesitan ayuda. ROAR Mobile suma un sistema de prevención que atiende el crecimiento de la población desde su origen. | |
| `items.oneCommunity.q` | Why focus on one community at a time? | ¿Por qué enfocarse en una comunidad a la vez? | |
| `items.oneCommunity.a` | Spreading services across the whole island can leave every community with only partial coverage. Working sector by sector concentrates resources, so a community can reach meaningful sterilization coverage before the program moves on. | Repartir los servicios por toda la isla puede dejar a cada comunidad con una cobertura parcial. Trabajar sector por sector concentra los recursos para que una comunidad logre una cobertura de esterilización significativa antes de que el programa avance. | |
| `items.sectorSweep.q` | What is the Sector Sweep? | ¿Qué es el Barrido por Sectores? | |
| `items.sectorSweep.a` | It is the working method for each sector: map, enter, survey, sterilize, track, return, and move forward. The Strategy page walks through each step. | Es el método de trabajo en cada sector: mapear, entrar, evaluar, esterilizar, registrar, regresar y avanzar. La página de la Estrategia explica cada paso. | |
| `items.whyCoverage.q` | Why does coverage matter? | ¿Por qué importa la cobertura? | |
| `items.whyCoverage.a` | The strategy is built around reaching high sterilization coverage in a defined area, around {percent}% according to the program’s supporting sources. Partial coverage can let a population rebuild; high coverage in one area is what the program is designed to achieve. | La estrategia busca lograr una alta cobertura de esterilización en un área definida, alrededor de {percent}% según las fuentes que respaldan el programa. Una cobertura parcial puede permitir que la población se recupere; una cobertura alta en un área es lo que el programa está diseñado para lograr. | |
| `items.vacuum.q` | What is the vacuum effect? | ¿Qué es el efecto vacío? | |
| `items.vacuum.a` | When some animals in an area are sterilized but coverage stays low, food and shelter remain available and animals from nearby areas can move in. Concentrating on one sector at a time is designed to reduce this. | Cuando se esteriliza a algunos animales de un área pero la cobertura sigue baja, la comida y el refugio siguen disponibles y llegan animales de zonas cercanas. Concentrarse en un sector a la vez busca reducir este efecto. | |
| `items.progress.q` | How is progress measured? | ¿Cómo se mide el avance? | |
| `items.progress.a` | Animals are recorded and geotagged in the field, so coverage in each sector can be measured and gaps identified. Progress is intended to be shared through regular updates. | Los animales se registran y se geoetiquetan en el campo, de modo que se puede medir la cobertura de cada sector e identificar los vacíos. El avance se compartirá mediante informes periódicos. | |
| `items.services.q` | What services does the mobile unit provide? | ¿Qué servicios ofrece la unidad móvil? | |
| `items.services.a` | The unit is being designed for high-volume sterilization and appropriate field care, along with veterinary outreach in communities across Roatán. | La unidad se está diseñando para esterilización de alto volumen y atención de campo adecuada, además de apoyo veterinario en las comunidades de Roatán. | |
| `items.afterSurgery.q` | What happens after surgery? | ¿Qué pasa después de la cirugía? | |
| `items.recovery.q` | Where do animals recover? | ¿Dónde se recuperan los animales? | |
| `items.critical.q` | What happens with critically ill animals? | ¿Qué pasa con los animales en estado crítico? | |
| `items.sickAnimal.q` | Can I bring a sick animal? | ¿Puedo llevar un animal enfermo? | |
| `items.bringRescue.q` | Can I bring a rescue? | ¿Puedo llevar un animal rescatado? | |
| `items.whoOperates.q` | Who will operate the unit? | ¿Quién operará la unidad? | |
| `items.whoOperates.a` | The intended launch team is a full-time veterinarian, a full-time veterinary technician, and part-time assistants. The Mobile Unit page has the current staffing plan. | El equipo previsto para el lanzamiento es un veterinario o veterinaria de tiempo completo, un técnico o técnica veterinaria de tiempo completo y asistentes de medio tiempo. La página de la Unidad Móvil tiene el plan de personal actual. | |
| `items.honduranStaff.q` | Will staff be Honduran? | ¿El personal será hondureño? | |
| `items.honduranStaff.a` | The launch staffing plan emphasizes Honduran veterinary professionals, including a full-time bilingual Honduran veterinarian. | El plan de personal para el lanzamiento da prioridad a profesionales veterinarios hondureños, e incluye un veterinario o veterinaria hondureña bilingüe de tiempo completo. | |
| `items.volunteer.q` | How can I volunteer? | ¿Cómo puedo ser voluntario? | |
| `items.volunteer.a` | Send a message through the contact page and choose “Volunteer” as the topic. | Envía un mensaje desde la página de contacto y elige «Voluntariado» como tema. | |
| `items.volunteersInUnit.q` | Can volunteers work inside the mobile unit? | ¿Los voluntarios pueden trabajar dentro de la unidad móvil? | |
| `items.moneyTracked.q` | How is money tracked? | ¿Cómo se le da seguimiento al dinero? | |
| `items.whatFunds.q` | What does membership fund? | ¿Qué financia la membresía? | |
| `items.taxDeductible.q` | Is my donation tax deductible? | ¿Mi donación es deducible de impuestos? | |
| `items.taxDeductible.a` | ROAR Mobile is part of Roatan Operation Animal Rescue. Donations are tax deductible subject to applicable rules. | ROAR Mobile es parte de Roatan Operation Animal Rescue. Las donaciones son deducibles de impuestos según las reglas aplicables. | |
| `items.cancel.q` | Can I cancel my monthly contribution? | ¿Puedo cancelar mi contribución mensual? | |
| `items.afterYear.q` | What happens after the first year? | ¿Qué pasa después del primer año? | |
| `items.payAnnually.q` | Can I pay annually? | ¿Puedo pagar por año? | |
| `items.payAnnually.a` | Yes. Membership is {monthly} a month for {months} months, or {annual} a year. | Sí. La membresía cuesta {monthly} al mes durante {months} meses, o {annual} al año. | |
| `items.perks.q` | What perks are included? | ¿Qué beneficios incluye? | |
| `items.perks.a` | Founding Members currently receive: {benefits}. | Los Miembros Fundadores reciben actualmente: {benefits}. | |
| `items.shirt.q` | How will I receive my shirt? | ¿Cómo recibiré mi camiseta? | |
| `items.card.q` | How will the membership card work? | ¿Cómo funciona la tarjeta de membresía? | |
| `items.businesses.q` | How are businesses participating? | ¿Cómo participan los negocios? | |

## pages.contact

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title` | Have a question or want to help? | ¿Tienes una pregunta o quieres ayudar? | |
| `emailLabel` | Email | Correo | |
| `locationLabel` | Location | Ubicación | |
| `disconnected` | The contact form isn’t connected yet. Please email us directly. | El formulario de contacto aún no está conectado. Escríbenos directamente por correo. | |
| `form.name` | Name | Nombre | |
| `form.email` | Email | Correo electrónico | |
| `form.topic` | Topic | Tema | |
| `form.subject` | Subject | Asunto | |
| `form.message` | Message | Mensaje | |
| `form.submit` | Send message | Enviar mensaje | |
| `form.sending` | Sending… | Enviando… | |
| `form.success` | Thank you. Your message was sent. | Gracias. Tu mensaje fue enviado. | |
| `form.error` | Something went wrong. Please try again, or email us directly. | Algo salió mal. Inténtalo de nuevo, o escríbenos directamente por correo. | |
| `form.required` | required | obligatorio | |
| `form.topics.general` | General question | Pregunta general | |
| `form.topics.founding` | Founding Member | Miembro Fundador | |
| `form.topics.donation` | Donation | Donación | |
| `form.topics.business` | Business partnership | Alianza con negocios | |
| `form.topics.volunteer` | Volunteer | Voluntariado | |
| `form.topics.media` | Media | Prensa | |
| `form.topics.other` | Other | Otro | |

## pages.legal

| Key | English | Spanish | Fix |
|---|---|---|---|
| `privacy.title` | Privacy | Privacidad | |
| `privacy.sections.0.title` | What this site collects | Qué información recopila este sitio | |
| `privacy.sections.0.body.0` | This is a static website with no user accounts. If you send a message through the contact form, we receive your name, email address, and message so we can reply. | Este es un sitio web estático, sin cuentas de usuario. Si envías un mensaje por el formulario de contacto, recibimos tu nombre, tu correo electrónico y tu mensaje para poder responderte. | |
| `privacy.sections.1.title` | Contact form | Formulario de contacto | |
| `privacy.sections.1.body.0` | Messages are handled by Formspree, a third-party form service. Please don’t include sensitive information in your message. | Los mensajes son procesados por Formspree, un servicio externo de formularios. Por favor no incluyas información sensible en tu mensaje. | |
| `privacy.sections.2.title` | Donations and memberships | Donaciones y membresías | |
| `privacy.sections.2.body.0` | Donations and memberships are handled by Zeffy, a third-party service. This site does not collect or store your payment details. | Las donaciones y membresías se procesan mediante Zeffy, un servicio externo. Este sitio no recopila ni guarda tus datos de pago. | |
| `privacy.sections.3.title` | Analytics | Analítica | |
| `privacy.sections.3.body.0` | If analytics are turned on, they use a privacy-focused tool that counts visits and button clicks without cookies or personal profiles. | Si se activa la analítica, se usa una herramienta enfocada en la privacidad que cuenta visitas y clics en botones sin cookies ni perfiles personales. | |
| `privacy.sections.4.title` | Questions | Preguntas | |
| `privacy.sections.4.body.0` | For privacy questions, write to {email}. | Para preguntas sobre privacidad, escribe a {email}. | |
| `terms.title` | Terms | Términos | |
| `terms.sections.0.title` | About this site | Sobre este sitio | |
| `terms.sections.0.body.0` | This site provides information about ROAR Mobile, a program of Roatan Operation Animal Rescue. | Este sitio ofrece información sobre ROAR Mobile, un programa de Roatan Operation Animal Rescue. | |
| `terms.sections.1.title` | Accuracy | Exactitud | |
| `terms.sections.1.body.0` | We work to keep information accurate. Plans, costs, and timelines may change as the project develops. | Procuramos mantener la información al día. Los planes, costos y plazos pueden cambiar a medida que avanza el proyecto. | |
| `terms.sections.2.title` | Donations and memberships | Donaciones y membresías | |
| `terms.sections.2.body.0` | Donations and memberships are handled through third-party services and are subject to their terms. Tax treatment depends on applicable rules. | Las donaciones y membresías se manejan mediante servicios externos y están sujetas a sus términos. El tratamiento fiscal depende de las reglas aplicables. | |
| `terms.sections.3.title` | External links | Enlaces externos | |
| `terms.sections.3.body.0` | This site links to other websites. ROAR Mobile is not responsible for their content. | Este sitio enlaza a otros sitios web. ROAR Mobile no es responsable de su contenido. | |
| `terms.sections.4.title` | Contact | Contacto | |
| `terms.sections.4.body.0` | Questions about these terms: {email}. | Preguntas sobre estos términos: {email}. | |

## pages.notFound

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title` | Page not found | Página no encontrada | |
| `text` | That page doesn’t exist or has moved. | Esa página no existe o se movió. | |

## home.hero

| Key | English | Spanish | Fix |
|---|---|---|---|
| `eyebrow` | ROAR Mobile | ROAR Mobile | |
| `title` | A new approach to Roatán’s animal crisis. | Un nuevo enfoque para la crisis animal de Roatán. | |
| `subtitle` | Bringing veterinary care directly into communities, one sector at a time. | Llevamos atención veterinaria directamente a las comunidades, un sector a la vez. | |
| `body` | ROAR Mobile is a purpose-built mobile veterinary program designed to bring high-volume sterilization and veterinary outreach directly to communities across Roatán. | ROAR Mobile es un programa veterinario móvil diseñado para llevar esterilización de alto volumen y atención veterinaria directamente a las comunidades de Roatán. | |
| `photoLabel` | [PHOTO: hero, real ROAR animal or community photo] | [FOTO: portada, foto real de ROAR (animales o comunidad)] | |

## home.problem

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title` | The problem isn’t compassion. It’s access. | El problema no es la compasión. Es el acceso. | |
| `intro.0` | Roatán has people who care deeply about its animals. | En Roatán hay personas que quieren profundamente a sus animales. | |
| `intro.1` | But veterinary care is not equally accessible across the island. Services can be limited, sterilization efforts can be scattered, and animals in underserved communities can remain outside the reach of consistent care. | Pero la atención veterinaria no es igual de accesible en toda la isla. Los servicios pueden ser limitados, la esterilización suele estar dispersa, y los animales de comunidades desatendidas pueden quedar fuera del alcance de una atención constante. | |
| `intro.2` | ROAR Mobile is designed to bring that care to them. | ROAR Mobile está diseñado para llevar esa atención hasta ellos. | |
| `points.0.title` | Limited access | Acceso limitado | |
| `points.0.text` | Veterinary care is not equally accessible in every community. | La atención veterinaria no es igual de accesible en todas las comunidades. | |
| `points.1.title` | Scattered services | Servicios dispersos | |
| `points.1.text` | When sterilization is spread across a large area, individual communities may never reach meaningful coverage. | Cuando la esterilización se reparte en un área grande, es posible que una comunidad nunca alcance una cobertura significativa. | |
| `points.2.title` | The cycle continues | El ciclo continúa | |
| `points.2.text` | Without sustained prevention, new litters continue to replace the animals being helped. | Sin prevención sostenida, las nuevas camadas siguen reemplazando a los animales que se ayudan. | |

## home.idea

| Key | English | Spanish | Fix |
|---|---|---|---|
| `titleA` | Don’t wait for the animals to reach the clinic. | No esperemos a que los animales lleguen a la clínica. | |
| `titleB` | Bring the clinic to the animals. | Llevemos la clínica a los animales. | |
| `lead` | ROAR Mobile is designed around a simple idea: | ROAR Mobile parte de una idea sencilla: | |
| `motto` | Focus the work. Reach the community. Measure the results. | Enfocar el trabajo. Llegar a la comunidad. Medir los resultados. | |
| `body` | Rather than spreading services across the island, the program is designed to work community by community, reaching meaningful sterilization coverage before moving to the next area. | En lugar de repartir los servicios por toda la isla, el programa está diseñado para trabajar comunidad por comunidad, logrando una cobertura de esterilización significativa antes de pasar al siguiente sector. | |
| `mapNote` | Illustration: numbered sectors, not to scale. | Ilustración: sectores numerados, no están a escala. | |
| `mapDescription` | A simplified outline of Roatán divided into five sectors. The sectors are covered one after another, from west to east. | Un contorno simplificado de Roatán dividido en cinco sectores. Los sectores se cubren uno tras otro, de oeste a este. | |

## home.how

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title` | How it works | Cómo funciona | |
| `steps.0.title` | Map | Mapear | |
| `steps.0.text` | Identify animals, locations, population patterns, and community needs. | Identificar animales, ubicaciones, patrones de población y necesidades de la comunidad. | |
| `steps.1.title` | Focus | Enfocar | |
| `steps.1.text` | Select a sector and concentrate resources there. | Elegir un sector y concentrar allí los recursos. | |
| `steps.2.title` | Sterilize | Esterilizar | |
| `steps.2.text` | Provide high-volume sterilization and appropriate field care. | Ofrecer esterilización de alto volumen y la atención de campo adecuada. | |
| `steps.3.title` | Track | Registrar | |
| `steps.3.text` | Record animals and locations using field data and geotagging. | Registrar animales y ubicaciones con datos de campo y geoetiquetado. | |
| `steps.4.title` | Move forward | Avanzar | |
| `steps.4.text` | Continue to the next sector while returning for maintenance sweeps over time. | Continuar al siguiente sector, regresando con el tiempo para rondas de mantenimiento. | |

## home.unit

| Key | English | Spanish | Fix |
|---|---|---|---|
| `titleA` | This isn’t just a van. | Esto no es solo una camioneta. | |
| `titleB` | It’s a veterinary clinic on wheels. | Es una clínica veterinaria sobre ruedas. | |
| `body` | ROAR Mobile is being developed as a self-contained mobile surgical unit designed specifically for the realities of Roatán. | ROAR Mobile se está desarrollando como una unidad quirúrgica móvil autónoma, diseñada específicamente para la realidad de Roatán. | |
| `features.0.title` | All-terrain | Todo terreno | |
| `features.0.text` | Designed to reach communities across difficult roads and remote areas. | Diseñada para llegar a comunidades por caminos difíciles y zonas remotas. | |
| `features.1.title` | Off-grid | Autónoma | |
| `features.1.text` | Generator, solar, and battery systems support field operations. | Sistemas de generador, solar y baterías respaldan el trabajo en campo. | |
| `features.2.title` | Climate controlled | Climatizada | |
| `features.2.text` | A controlled interior helps maintain appropriate surgical conditions in Roatán’s tropical environment. | Un interior climatizado ayuda a mantener condiciones quirúrgicas adecuadas en el clima tropical de Roatán. | |
| `features.3.title` | Data driven | Basada en datos | |
| `features.3.text` | Animals are recorded and geotagged so coverage can be measured and gaps identified. | Cada animal se registra y se geoetiqueta para poder medir la cobertura e identificar vacíos. | |
| `photoLabel` | [PHOTO: mobile unit rendering] | [FOTO: render de la unidad móvil] | |

## home.different

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title` | Prevention changes the equation. | La prevención cambia la ecuación. | |
| `body` | Rescue and individual medical care matter. ROAR Mobile is designed to add a prevention system that addresses population growth at its source. | El rescate y la atención médica individual son importantes. ROAR Mobile está diseñado para sumar un sistema de prevención que atiende el crecimiento de la población desde su origen. | |
| `cols.0.title` | Reactive | Reactivo | |
| `cols.0.text` | Respond after animals are born, injured, abandoned, or in crisis. | Responder después de que los animales nacen, se lesionan, son abandonados o están en crisis. | |
| `cols.1.title` | Scattered | Disperso | |
| `cols.1.text` | Provide services across many locations without concentrating enough coverage in one area. | Ofrecer servicios en muchos lugares sin concentrar suficiente cobertura en una sola zona. | |
| `cols.2.title` | Preventive | Preventivo | |
| `cols.2.text` | Work systematically within a defined community to reduce future births and track coverage. | Trabajar de forma sistemática dentro de una comunidad definida para reducir futuros nacimientos y dar seguimiento a la cobertura. | |
| `note` | ROAR Mobile is not about replacing existing efforts. It is about adding another layer of prevention. | ROAR Mobile no busca reemplazar los esfuerzos existentes. Busca sumar una capa más de prevención. | |

## home.founding

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title.0` | {goal} people. | {goal} personas. | |
| `title.1` | One year. | Un año. | |
| `title.2` | A mobile veterinary unit for Roatán. | Una unidad veterinaria móvil para Roatán. | |
| `subtitle` | Become one of the Founding {goal}. | Sé parte de los {goal} Fundadores. | |
| `body.0` | ROAR Mobile is being built by the community. | ROAR Mobile lo está construyendo la comunidad. | |
| `body.1` | The first {goal} Founding Members are helping fund the development and launch of the mobile surgical unit that will bring veterinary care directly into communities across Roatán. | Los primeros {goal} Miembros Fundadores están ayudando a financiar el desarrollo y el lanzamiento de la unidad quirúrgica móvil que llevará atención veterinaria directamente a las comunidades de Roatán. | |
| `perMonth` | / month | / mes | |
| `forMonths` | for {months} months | durante {months} meses | |
| `or` | or | o | |
| `perYear` | / year | / año | |
| `benefitsHeading` | Founding Members currently receive: | Los Miembros Fundadores reciben actualmente: | |
| `count` | {count} / {goal} Founding Members | {count} / {goal} Miembros Fundadores | |
| `goalLabel` | Founding Members | Miembros Fundadores | |
| `progressLabel` | Founding Members so far | Miembros Fundadores hasta ahora | |

## home.transparency

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title` | You should be able to see where your support goes. | Debes poder ver a dónde va tu apoyo. | |
| `body.0` | ROAR Mobile is being built around measurable work and transparent reporting. | ROAR Mobile se está construyendo sobre trabajo medible e informes transparentes. | |
| `body.1` | As the program develops, supporters should be able to see where the project stands, what has been built, and what is happening in the field. | A medida que avance el programa, quienes lo apoyan podrán ver en qué punto está el proyecto, qué se ha construido y qué está pasando en el campo. | |
| `funding.title` | Funding | Financiamiento | |
| `funding.text` | The current campaign amount and the confirmed total project cost. | El monto actual de la campaña y el costo total confirmado del proyecto. | |
| `funding.unconfirmed` | Funding figures will be published here once they are confirmed. | Las cifras de financiamiento se publicarán aquí cuando estén confirmadas. | |
| `funding.launchGoal` | Goal to begin construction | Meta para comenzar la construcción | |
| `funding.totalCost` | Total project cost | Costo total del proyecto | |
| `funding.raised` | Raised so far | Recaudado hasta ahora | |
| `funding.restricted` | Funds are restricted to building ROAR Mobile. | Los fondos están restringidos a la construcción de ROAR Mobile. | |
| `progress.title` | Progress | Avance | |
| `progress.text` | Build progress and launch milestones. | El avance de la construcción y los hitos del lanzamiento. | |
| `progress.unconfirmed` | Build milestones will be published here. | Los hitos de la construcción se publicarán aquí. | |
| `progress.status.done` | Done | Listo | |
| `progress.status.in_progress` | In progress | En curso | |
| `progress.status.planned` | Planned | Planificado | |
| `impact.title` | Impact | Impacto | |
| `impact.text` | Once operations begin: animals reached, sterilizations completed, and sectors covered. | Cuando inicien las operaciones: animales atendidos, esterilizaciones realizadas y sectores cubiertos. | |
| `impact.unconfirmed` | Impact figures will appear here once operations begin and the numbers can be verified. | Las cifras de impacto aparecerán aquí cuando inicien las operaciones y los números se puedan verificar. | |
| `impact.animalsReached` | Animals reached | Animales atendidos | |
| `impact.sterilizations` | Sterilizations completed | Esterilizaciones realizadas | |
| `impact.sectorsCovered` | Sectors covered | Sectores cubiertos | |
| `impact.asOf` | As of {date} | Al {date} | |

## home.partners

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title` | Built with the Roatán community. | Construido con la comunidad de Roatán. | |
| `empty` | Local businesses and partners supporting ROAR Mobile will be listed here. | Aquí se mostrarán los negocios y aliados locales que apoyan a ROAR Mobile. | |

## home.finalCta

| Key | English | Spanish | Fix |
|---|---|---|---|
| `title` | Help bring ROAR Mobile to life. | Ayuda a hacer realidad ROAR Mobile. | |
| `lines.0` | One mobile unit. | Una unidad móvil. | |
| `lines.1` | One community at a time. | Una comunidad a la vez. | |
| `lines.2` | A long-term approach to animal welfare on Roatán. | Un enfoque a largo plazo para el bienestar animal en Roatán. | |
