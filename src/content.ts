/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO DEL PORTFOLIO  ·  edita este archivo
 * ─────────────────────────────────────────────────────────────
 *  Todo el texto visible del sitio vive aquí, en español (es) e
 *  inglés (en). Cambia los valores y el sitio se actualiza.
 */

export type Locale = 'es' | 'en'
export const LOCALES: Locale[] = ['es', 'en']
export const DEFAULT_LOCALE: Locale = 'es'

/* ── Datos personales ───────────────────────────────────────── */

export const profile = {
  name: 'Brayan Roa',
  handle: '@BreaktneSs',
  role: {
    es: 'Ethical Hacker · Consultor de Ciberseguridad',
    en: 'Ethical Hacker · Cybersecurity Consultant',
  },
  email: 'broaprieto09@gmail.com',
  location: { es: 'Colombia · remoto', en: 'Colombia · remote' },
  socials: [
    { label: 'GitHub', href: 'https://github.com/BreaktneSs' },
    { label: 'Email', href: 'mailto:broaprieto09@gmail.com' },
    // { label: 'LinkedIn', href: 'https://linkedin.com/in/…' },
  ],
} as const

/* ── Proyectos destacados ───────────────────────────────────── */

export type ProjectKind = 'offensive' | 'tooling' | 'research' | 'web'

export interface Project {
  slug: string
  title: string
  year: string
  kind: ProjectKind
  summary: Record<Locale, string>
  stack: string[]
  links: { label: string; href: string }[]
  /** gradiente CSS para la tarjeta */
  accent: string
}

export const projects: Project[] = [
  {
    slug: 'red-team-public-sector',
    title: 'Red Team · Sector Público',
    year: '2024',
    kind: 'offensive',
    summary: {
      es: 'Ejercicios Red Team para instituciones públicas: simulación de DDoS localizado con una botnet desplegada dentro de Colombia y defacement de una web interna para poner a prueba la respuesta a incidentes y la resiliencia de los sistemas.',
      en: 'Red Team engagements for public institutions: a localised DDoS simulation using a botnet deployed within Colombia and the defacement of an internal web page to test incident response and system resilience.',
    },
    stack: ['Apache JMeter', 'GlassFish', 'C2', 'DDoS sim'],
    links: [],
    accent: 'linear-gradient(135deg,#84cc16,#22d3ee)',
  },
  {
    slug: 'physical-social-engineering',
    title: 'Ingeniería Social Física',
    year: '2024',
    kind: 'offensive',
    summary: {
      es: 'Campañas de ingeniería social en organizaciones públicas y sus sedes: piggybacking, tailgating y skimming. Cada ejercicio se cerró con formación al personal mediante métodos de shock therapy para elevar la concienciación y mejorar la seguridad física.',
      en: 'Social-engineering campaigns across public organisations and their branches: piggybacking, tailgating and skimming. Each exercise closed with staff training using shock-therapy methods to raise awareness and improve physical security.',
    },
    stack: ['Piggybacking', 'Tailgating', 'Phishing', 'OSINT'],
    links: [],
    accent: 'linear-gradient(135deg,#22d3ee,#65a30d)',
  },
  {
    slug: 'wifi-marauder',
    title: 'Wi-Fi Marauder',
    year: '2025',
    kind: 'tooling',
    summary: {
      es: 'ESP32 con firmware personalizado (JustCallMeKoko) controlado desde un Flipper Zero para ataques Wi-Fi: packet flooding, deautenticación, captura de handshakes y despliegue de captive portal.',
      en: 'ESP32 flashed with custom firmware (JustCallMeKoko) driven from a Flipper Zero for Wi-Fi attacks: packet flooding, deauth, handshake capture and captive-portal deployment.',
    },
    stack: ['ESP32', 'Flipper Zero', 'ESP32 Marauder', 'Wi-Fi'],
    links: [
      {
        label: 'Firmware',
        href: 'https://github.com/justcallmekoko/ESP32Marauder',
      },
    ],
    accent: 'linear-gradient(135deg,#f59e0b,#84cc16)',
  },
  {
    slug: 'tls-config-auditor',
    title: 'TLS Config Auditor',
    year: '2025',
    kind: 'tooling',
    summary: {
      es: 'Herramienta en Python sobre Nmap que automatiza la detección de configuraciones TLS inseguras (protocolos y cifrados obsoletos) en hosts objetivo, con salida en consola enriquecida y flujo guiado por menú.',
      en: 'Python tool wrapping Nmap that automates detection of insecure TLS configurations (legacy protocols and weak ciphers) on target hosts, with a rich console UI and a menu-driven flow.',
    },
    stack: ['Python', 'Nmap', 'ssl-enum-ciphers', 'rich'],
    links: [{ label: 'Código', href: 'https://github.com/BreaktneSs' }],
    accent: 'linear-gradient(135deg,#84cc16,#0ea5e9)',
  },
  {
    slug: 'vm-anti-detection',
    title: 'VM Anti-Detección (Tesis)',
    year: '2024—2025',
    kind: 'research',
    summary: {
      es: 'Proyecto de tesis: refuerzo del sigilo de una VM Windows 10 para un futuro sandbox de análisis dinámico de malware. Ajuste del XML de Libvirt en Virt-Manager, integración de libvirt-stealth y qemu-anti-detection, y un script PowerShell que simula actividad de usuario (teclado y ratón) para evadir detección conductual.',
      en: 'Thesis project: hardening the stealth of a Windows 10 VM for a future dynamic malware-analysis sandbox. Libvirt XML tuning via Virt-Manager, libvirt-stealth and qemu-anti-detection integration, plus a PowerShell script that simulates user activity (keyboard and mouse) to evade behavioural detection.',
    },
    stack: ['QEMU / KVM', 'Libvirt', 'PowerShell', 'Windows 10'],
    links: [],
    accent: 'linear-gradient(135deg,#65a30d,#22d3ee)',
  },
  {
    slug: 'resa-k',
    title: 'Resa-K',
    year: '2025',
    kind: 'web',
    summary: {
      es: 'Plataforma web de reserva de eventos: búsqueda y filtrado, categorías, autenticación con Google y panel de usuario (cotizaciones, reservas, notificaciones). Diseño responsive. Capturas en la galería.',
      en: 'Event-booking web platform: search and filtering, categories, Google auth and a user dashboard (quotes, bookings, notifications). Responsive design. Screenshots in the gallery.',
    },
    stack: ['React', 'Tailwind', 'OAuth', 'REST'],
    links: [{ label: 'Galería', href: '#gallery' }],
    accent: 'linear-gradient(135deg,#22d3ee,#84cc16)',
  },
]

/* ── Skills ─────────────────────────────────────────────────── */

export interface SkillGroup {
  label: Record<Locale, string>
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: { es: 'Red Team & Ofensiva', en: 'Red Team & Offensive' },
    items: [
      'Nmap',
      'Metasploit',
      'Burp Suite',
      'OWASP ZAP',
      'Social engineering',
      'Wi-Fi (deauth · evil portal)',
      'Flipper Zero',
      'ESP32 Marauder',
    ],
  },
  {
    label: {
      es: 'Análisis de vulnerabilidades',
      en: 'Vulnerability analysis',
    },
    items: [
      'Nessus',
      'OpenVAS',
      'TLS / SSL auditing',
      'OWASP Top 10',
      'Hardening',
      'Remediation & reporting',
    ],
  },
  {
    label: { es: 'Automatización & Labs', en: 'Automation & Labs' },
    items: [
      'Python',
      'PowerShell',
      'Bash',
      'QEMU / KVM',
      'Libvirt / Virt-Manager',
      'Docker',
      'Apache JMeter',
    ],
  },
]

/* ── Áreas de especialización ───────────────────────────────── */

export interface FocusArea {
  title: Record<Locale, string>
  body: Record<Locale, string>
}

export const focusAreas: FocusArea[] = [
  {
    title: { es: 'Simulación Red Team', en: 'Red Team simulation' },
    body: {
      es: 'Simulación de ataques reales, estilo Red Team, sobre sector público e instituciones financieras.',
      en: 'Simulation of real-world attacks, Red Team style, on public-sector and financial institutions.',
    },
  },
  {
    title: { es: 'Análisis de vulnerabilidades', en: 'Vulnerability analysis' },
    body: {
      es: 'Análisis de vulnerabilidades y acompañamiento a clientes para implementar estrategias de remediación efectivas.',
      en: 'Vulnerability analysis and close work with clients to implement effective remediation strategies.',
    },
  },
  {
    title: { es: 'Ingeniería social', en: 'Social engineering' },
    body: {
      es: 'Pruebas de ingeniería social, físicas y de phishing, en organizaciones públicas.',
      en: 'Social-engineering tests, both physical and phishing-based, in public organisations.',
    },
  },
]

/* ── Galería de capturas ────────────────────────────────────── */
/*
 * Suelta tus imágenes (png / jpg / webp / avif / svg) en
 *   src/assets/gallery/
 * y añade una entrada aquí con el mismo nombre de archivo en `file`.
 * El mosaico es un grid 4:3; el visor muestra la imagen completa.
 * `href` (opcional) añade un enlace externo en el visor.
 */

export interface GalleryShot {
  file: string
  title: Record<Locale, string>
  caption: Record<Locale, string>
  href?: string
}

export const gallery: GalleryShot[] = [
  {
    file: 'resa-k-home.png',
    title: { es: 'Resa-K — inicio', en: 'Resa-K — home' },
    caption: {
      es: 'Plataforma de reserva de eventos: búsqueda, categorías y carrusel de eventos.',
      en: 'Event booking platform: search, categories and an events carousel.',
    },
  },
  {
    file: 'resa-k-auth.png',
    title: { es: 'Resa-K — acceso', en: 'Resa-K — auth' },
    caption: {
      es: 'Modal de login / registro con inicio de sesión mediante Google.',
      en: 'Login / sign-up modal with Google sign-in.',
    },
  },
  {
    file: 'resa-k-mobile.png',
    title: { es: 'Resa-K — responsive', en: 'Resa-K — responsive' },
    caption: {
      es: 'Vista móvil con el menú de usuario: cotizaciones, reservas y notificaciones.',
      en: 'Mobile view with the user menu: quotes, bookings and notifications.',
    },
  },
]

/* ── Cadenas de interfaz (i18n) ─────────────────────────────── */

export const ui: Record<
  Locale,
  {
    nav: {
      about: string
      work: string
      gallery: string
      skills: string
      contact: string
    }
    hero: {
      kicker: string
      title: string[]
      lead: string
      ctaWork: string
      ctaContact: string
      scroll: string
    }
    about: {
      heading: string
      body: string[]
      focusHeading: string
      stats: { value: string; label: string }[]
    }
    work: {
      heading: string
      lead: string
      all: string
      filters: Record<ProjectKind | 'all', string>
    }
    gallery: {
      heading: string
      lead: string
      empty: string
      close: string
      prev: string
      next: string
    }
    skills: { heading: string; lead: string }
    contact: {
      heading: string
      lead: string
      cta: string
      availability: string
    }
    footer: { built: string; rights: string }
    theme: { toLight: string; toDark: string }
    lang: { switchTo: string }
  }
> = {
  es: {
    nav: {
      about: 'Perfil',
      work: 'Proyectos',
      gallery: 'Galería',
      skills: 'Skills',
      contact: 'Contacto',
    },
    hero: {
      kicker: 'Ethical Hacker · Consultor de Ciberseguridad',
      title: ['Encuentro el fallo', 'antes de que', 'lo haga otro.'],
      lead: 'Consultor de ciberseguridad especializado en Red Team, análisis de vulnerabilidades e ingeniería social para el sector público y financiero.',
      ctaWork: 'Ver proyectos',
      ctaContact: 'Hablemos',
      scroll: 'Desplázate',
    },
    about: {
      heading: 'Perfil',
      body: [
        'Soy Brayan Roa, ethical hacker y consultor de ciberseguridad con 2 años de experiencia. Actualmente curso la certificación CEH (EC-Council).',
        'Me muevo con Nmap, Metasploit, OpenVAS, Burp Suite, Nessus y OWASP ZAP, entre otras. He trabajado sobre todo con instituciones del sector público y financiero: simulacros Red Team, análisis de vulnerabilidades y campañas de ingeniería social — físicas y de phishing.',
      ],
      focusHeading: 'En qué me especializo',
      stats: [
        { value: '2+', label: 'años en seguridad ofensiva' },
        { value: 'CEH', label: 'en progreso · EC-Council' },
        { value: '6', label: 'proyectos destacados' },
      ],
    },
    work: {
      heading: 'Proyectos',
      lead: 'Una selección de trabajo en Red Team, herramientas, investigación y web.',
      all: 'Todos',
      filters: {
        all: 'Todos',
        offensive: 'Red Team',
        tooling: 'Herramientas',
        research: 'Investigación',
        web: 'Web',
      },
    },
    gallery: {
      heading: 'Galería',
      lead: 'Capturas de mis aplicaciones en ejecución.',
      empty: 'Aún no hay capturas. Añádelas en src/content.ts.',
      close: 'Cerrar',
      prev: 'Anterior',
      next: 'Siguiente',
    },
    skills: {
      heading: 'Stack & Skills',
      lead: 'Las herramientas con las que me muevo cómodo.',
    },
    contact: {
      heading: 'Trabajemos juntos',
      lead: '¿Necesitas un Red Team, una auditoría o una prueba de ingeniería social? Escríbeme.',
      cta: 'Enviar correo',
      availability: 'Disponible para proyectos',
    },
    footer: {
      built: 'Hecho con React, Tailwind y Motion',
      rights: 'Todos los derechos reservados.',
    },
    theme: { toLight: 'Cambiar a tema claro', toDark: 'Cambiar a tema oscuro' },
    lang: { switchTo: 'Switch to English' },
  },
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      gallery: 'Gallery',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Ethical Hacker · Cybersecurity Consultant',
      title: ['I find the flaw', 'before someone', 'else does.'],
      lead: 'Cybersecurity consultant focused on red teaming, vulnerability analysis and social engineering for public-sector and financial institutions.',
      ctaWork: 'View work',
      ctaContact: "Let's talk",
      scroll: 'Scroll',
    },
    about: {
      heading: 'About',
      body: [
        "I'm Brayan Roa, an ethical hacker and cybersecurity consultant with 2 years of experience. I'm currently pursuing the CEH certification (EC-Council).",
        'I work with Nmap, Metasploit, OpenVAS, Burp Suite, Nessus and OWASP ZAP, among others. Most of my work has been with public-sector and financial institutions: Red Team exercises, vulnerability analysis and social-engineering campaigns — both physical and phishing-based.',
      ],
      focusHeading: 'What I focus on',
      stats: [
        { value: '2+', label: 'years in offensive security' },
        { value: 'CEH', label: 'in progress · EC-Council' },
        { value: '6', label: 'featured projects' },
      ],
    },
    work: {
      heading: 'Work',
      lead: 'A selection of Red Team, tooling, research and web projects.',
      all: 'All',
      filters: {
        all: 'All',
        offensive: 'Red Team',
        tooling: 'Tooling',
        research: 'Research',
        web: 'Web',
      },
    },
    gallery: {
      heading: 'Gallery',
      lead: 'Screenshots of my applications in action.',
      empty: 'No screenshots yet. Add them in src/content.ts.',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
    },
    skills: {
      heading: 'Stack & Skills',
      lead: 'The tools I move comfortably with.',
    },
    contact: {
      heading: "Let's work together",
      lead: 'Need a red team, an audit or a social-engineering test? Drop me a line.',
      cta: 'Send email',
      availability: 'Available for engagements',
    },
    footer: {
      built: 'Built with React, Tailwind and Motion',
      rights: 'All rights reserved.',
    },
    theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
    lang: { switchTo: 'Cambiar a español' },
  },
}
