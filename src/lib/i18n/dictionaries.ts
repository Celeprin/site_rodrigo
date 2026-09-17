import type { Locale } from "./locales";

export const dictionaries = {
  pt: {
    nav: { home: "Home", portfolio: "Portfólio", about: "Sobre", contact: "Contato" },
    hero: {
      eyebrow: "Rodrigo Vielmo Studio — Arquitetura & Interiores",
      headlineLead: "Espaços desenhados com precisão, do primeiro traço ao",
      headlineEmphasis: "último detalhe.",
      lead: "Transformamos necessidades reais em espaços personalizados, funcionais e tecnicamente bem resolvidos.",
      locations: "São Francisco de Assis · Santa Maria · Goiânia — atendimento presencial e remoto",
      ctaPortfolio: "Ver portfólio",
      ctaContact: "Falar com o estúdio",
    },
    process: {
      title: "Como trabalhamos",
      steps: [
        { title: "Briefing", body: "Reunião inicial para entender rotina, referências e prioridades." },
        { title: "Layout", body: "Estudo de distribuição, circulação e aproveitamento dos ambientes." },
        { title: "Projeto", body: "Conceito, materiais, iluminação e visualização em 3D." },
        { title: "Execução", body: "Projeto executivo, acompanhamento e contato com fornecedores." },
      ],
    },
    portfolioTeaser: {
      title: "Projetos selecionados",
      cta: "Ver todos os projetos",
    },
    aboutTeaser: {
      title: "Quem assina o projeto",
      body: "Rodrigo Vielmo Moura é arquiteto e urbanista, com passagens pela Universidade do Porto, Politecnico di Milano e Organização das Nações Unidas — oito anos dedicados a projetos arquitetônicos, interiores e planejamento urbano.",
      credentials: ["Universidade do Porto", "Politecnico di Milano", "Organização das Nações Unidas"],
      cta: "Conheça o estúdio",
    },
    portfolio: {
      title: "Portfólio",
      lead: "Projetos residenciais e comerciais entregues pelo estúdio.",
      filters: { all: "Todos", residential: "Residencial", commercial: "Comercial" },
    },
    about: {
      title: "Sobre",
      roleLabel: "Diretor e Responsável Técnico",
      bio: [
        "Rodrigo Vielmo Moura é arquiteto e urbanista, mestre em Planejamento e Projeto Urbano pela Faculdade de Arquitetura da Universidade do Porto, e PhD student em Urban Planning, Design and Policy pelo Politecnico di Milano, Itália.",
        "Sua trajetória reúne experiências acadêmicas e profissionais no Brasil e no exterior, incluindo atuação na Câmara Municipal do Porto e na Organização das Nações Unidas, em Nova York, além de uma bolsa de estudos ligada à União Europeia e à Agenzia per la Coesione Territoriale (Governo Italiano). Essa vivência ampliou sua forma de compreender a arquitetura, conectando diferentes escalas — do desenho dos interiores ao planejamento das cidades.",
        "Reúne oito anos de atuação no mercado, com passagens por renomados escritórios de arquitetura da região e experiência em projetos arquitetônicos, interiores, urbanismo e planejamento territorial.",
      ],
      missionTitle: "Missão",
      mission: "Transformar necessidades reais em espaços personalizados, funcionais e tecnicamente bem resolvidos.",
      visionTitle: "Visão",
      vision: "Ser reconhecido pelo desenvolvimento de projetos completos e consistentes, conduzidos com proximidade, precisão e cuidado em todas as escalas.",
      valuesTitle: "Valores",
      values: "Personalização, escuta, rigor técnico, presença, responsabilidade, clareza e atenção aos detalhes.",
    },
    contact: {
      title: "Contato",
      lead: "Conte um pouco sobre o seu projeto — respondemos por e-mail, WhatsApp ou Instagram.",
      emailLabel: "E-mail",
      phoneLabel: "Telefone / WhatsApp",
      instagramLabel: "Instagram",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      tagline: "Where Style Meets Substance",
    },
  },
  en: {
    nav: { home: "Home", portfolio: "Portfolio", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "Rodrigo Vielmo Studio — Architecture & Interiors",
      headlineLead: "Spaces designed with precision, from the first line to the",
      headlineEmphasis: "last detail.",
      lead: "We turn real needs into personalized spaces — functional and technically well resolved.",
      locations: "São Francisco de Assis · Santa Maria · Goiânia — on-site and remote",
      ctaPortfolio: "View portfolio",
      ctaContact: "Talk to the studio",
    },
    process: {
      title: "How we work",
      steps: [
        { title: "Briefing", body: "An initial conversation to understand routine, references and priorities." },
        { title: "Layout", body: "Studying distribution, circulation and how each space will be used." },
        { title: "Design", body: "Concept, materials, lighting and 3D visualization." },
        { title: "Execution", body: "Executive drawings, follow-up and supplier coordination." },
      ],
    },
    portfolioTeaser: {
      title: "Selected projects",
      cta: "View all projects",
    },
    aboutTeaser: {
      title: "Behind the studio",
      body: "Rodrigo Vielmo Moura is an architect and urban planner who has worked with the University of Porto, Politecnico di Milano and the United Nations — eight years dedicated to architectural, interior and urban planning projects.",
      credentials: ["University of Porto", "Politecnico di Milano", "United Nations"],
      cta: "Meet the studio",
    },
    portfolio: {
      title: "Portfolio",
      lead: "Residential and commercial projects delivered by the studio.",
      filters: { all: "All", residential: "Residential", commercial: "Commercial" },
    },
    about: {
      title: "About",
      roleLabel: "Director & Technical Lead",
      bio: [
        "Rodrigo Vielmo Moura is an architect and urban planner, with a Master's in Urban Planning and Design from the Faculty of Architecture of the University of Porto, and a PhD student in Urban Planning, Design and Policy at Politecnico di Milano, Italy.",
        "His path brings together academic and professional experience in Brazil and abroad, including work at the Porto City Council and at the United Nations in New York, as well as a scholarship linked to the European Union and Italy's Agenzia per la Coesione Territoriale. That experience broadened the way he understands architecture, connecting different scales — from interior design to city planning.",
        "He brings eight years of practice in the field, having worked with well-known architecture firms in the region, with experience spanning architectural and interior projects, urbanism and territorial planning.",
      ],
      missionTitle: "Mission",
      mission: "Turning real needs into personalized spaces — functional and technically well resolved.",
      visionTitle: "Vision",
      vision: "To be recognized for developing complete, consistent projects, carried out with closeness, precision and care at every scale.",
      valuesTitle: "Values",
      values: "Personalization, listening, technical rigor, presence, responsibility, clarity and attention to detail.",
    },
    contact: {
      title: "Contact",
      lead: "Tell us a bit about your project — we reply by email, WhatsApp or Instagram.",
      emailLabel: "Email",
      phoneLabel: "Phone / WhatsApp",
      instagramLabel: "Instagram",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Where Style Meets Substance",
    },
  },
  it: {
    nav: { home: "Home", portfolio: "Portfolio", about: "Chi siamo", contact: "Contatti" },
    hero: {
      eyebrow: "Rodrigo Vielmo Studio — Architettura & Interni",
      headlineLead: "Spazi disegnati con precisione, dal primo tratto",
      headlineEmphasis: "all'ultimo dettaglio.",
      lead: "Trasformiamo esigenze reali in spazi personalizzati, funzionali e tecnicamente ben risolti.",
      locations: "São Francisco de Assis · Santa Maria · Goiânia — in loco e da remoto",
      ctaPortfolio: "Vedi il portfolio",
      ctaContact: "Parla con lo studio",
    },
    process: {
      title: "Come lavoriamo",
      steps: [
        { title: "Briefing", body: "Un primo incontro per capire routine, riferimenti e priorità." },
        { title: "Layout", body: "Studio della distribuzione, della circolazione e degli spazi." },
        { title: "Progetto", body: "Concetto, materiali, illuminazione e visualizzazione 3D." },
        { title: "Esecuzione", body: "Progetto esecutivo, supervisione e contatto con i fornitori." },
      ],
    },
    portfolioTeaser: {
      title: "Progetti selezionati",
      cta: "Vedi tutti i progetti",
    },
    aboutTeaser: {
      title: "Chi firma il progetto",
      body: "Rodrigo Vielmo Moura è architetto e urbanista, con esperienze all'Università di Porto, al Politecnico di Milano e alle Nazioni Unite — otto anni dedicati a progetti di architettura, interni e pianificazione urbana.",
      credentials: ["Università di Porto", "Politecnico di Milano", "Nazioni Unite"],
      cta: "Scopri lo studio",
    },
    portfolio: {
      title: "Portfolio",
      lead: "Progetti residenziali e commerciali realizzati dallo studio.",
      filters: { all: "Tutti", residential: "Residenziale", commercial: "Commerciale" },
    },
    about: {
      title: "Chi siamo",
      roleLabel: "Direttore e Responsabile Tecnico",
      bio: [
        "Rodrigo Vielmo Moura è architetto e urbanista, con un master in Pianificazione e Progettazione Urbana della Facoltà di Architettura dell'Università di Porto, e PhD student in Urban Planning, Design and Policy al Politecnico di Milano.",
        "Il suo percorso unisce esperienze accademiche e professionali in Brasile e all'estero, tra cui la Câmara Municipal do Porto e le Nazioni Unite a New York, oltre a una borsa di studio legata all'Unione Europea e all'Agenzia per la Coesione Territoriale. Questo percorso ha ampliato il suo modo di intendere l'architettura, collegando scale diverse — dal disegno degli interni alla pianificazione delle città.",
        "Porta con sé otto anni di attività nel settore, con esperienze in rinomati studi di architettura della regione e progetti di architettura, interni, urbanistica e pianificazione territoriale.",
      ],
      missionTitle: "Missione",
      mission: "Trasformare esigenze reali in spazi personalizzati, funzionali e tecnicamente ben risolti.",
      visionTitle: "Visione",
      vision: "Essere riconosciuti per lo sviluppo di progetti completi e coerenti, condotti con vicinanza, precisione e cura in ogni scala.",
      valuesTitle: "Valori",
      values: "Personalizzazione, ascolto, rigore tecnico, presenza, responsabilità, chiarezza e attenzione ai dettagli.",
    },
    contact: {
      title: "Contatti",
      lead: "Raccontaci del tuo progetto — rispondiamo via email, WhatsApp o Instagram.",
      emailLabel: "Email",
      phoneLabel: "Telefono / WhatsApp",
      instagramLabel: "Instagram",
    },
    footer: {
      rights: "Tutti i diritti riservati.",
      tagline: "Where Style Meets Substance",
    },
  },
} as const satisfies Record<Locale, unknown>;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
