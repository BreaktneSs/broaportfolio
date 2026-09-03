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
    es: 'Ethical Hacker & Desarrollador Full-Stack',
    en: 'Ethical Hacker & Full-Stack Developer',
  },
  email: 'broaprieto09@gmail.com',
  location: { es: 'Colombia · remoto', en: 'Colombia · remote' },
  socials: [
    { label: 'GitHub', href: 'https://github.com/BreaktneSs' },
    { label: 'Email', href: 'mailto:broaprieto09@gmail.com' },
    // { label: 'LinkedIn', href: 'https://linkedin.com/in/…' },
  ],
} as const

/* ── Experiencia profesional ────────────────────────────────── */

export interface ExperienceEntry {
  role: Record<Locale, string>
  company: string
  companyUrl?: string
  period: Record<Locale, string>
  summary: Record<Locale, string>
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: {
      es: 'Analista de Seguridad · Revisión de código',
      en: 'Security Analyst · Code Review',
    },
    company: 'Fluid Attacks',
    companyUrl: 'https://fluidattacks.com',
    period: { es: 'Actual', en: 'Current' },
    summary: {
      es: 'Revisión manual de código fuente para encontrar vulnerabilidades en aplicaciones de clientes de múltiples sectores en Colombia. Catalogo y priorizo cada hallazgo bajo el estándar CVSS v4.0 y acompaño su remediación junto a los equipos de desarrollo.',
      en: 'Manual source-code review to find vulnerabilities in applications for clients across multiple sectors in Colombia. I catalogue and prioritise every finding under the CVSS v4.0 standard and support remediation alongside development teams.',
    },
    tags: [
      'Code Review',
      'SAST manual',
      'CVSS v4.0',
      'Vulnerability Management',
    ],
  },
  {
    role: {
      es: 'Consultor de Ciberseguridad Junior',
      en: 'Junior Cybersecurity Consultant',
    },
    company: 'Cross Border Technology',
    period: { es: '2024 — 2025', en: '2024 — 2025' },
    summary: {
      es: 'Pruebas de Red Team, ingeniería social y escaneo de vulnerabilidades para clientes, acompañando la remediación de los hallazgos. Investigación y desarrollo de herramientas internas, además de búsqueda de información sensible de clientes expuesta en la deep web.',
      en: 'Red Team testing, social engineering and vulnerability scanning for clients, supporting remediation of findings. R&D of internal tooling, plus searching the deep web for clients’ exposed sensitive information.',
    },
    tags: [
      'Red Team',
      'Social Engineering',
      'Vulnerability Scanning',
      'Remediation',
      'Deep Web OSINT',
      'R&D',
    ],
  },
  {
    role: { es: 'Desarrollador Freelance', en: 'Freelance Developer' },
    company: 'Freelance',
    period: { es: '2023 — 2024', en: '2023 — 2024' },
    summary: {
      es: 'Desarrollo full-stack de Aukani (POS) y ResakApp como freelance independiente, incluyendo clientes de escritorio con Electron además de la versión web.',
      en: 'Full-stack freelance development of Aukani (POS) and ResakApp, including Electron desktop clients alongside the web version.',
    },
    tags: ['Electron', 'React', 'TypeScript', 'Freelance'],
  },
]

/* ── Proyectos destacados ───────────────────────────────────── */

export type ProjectKind = 'offensive' | 'devsecops' | 'dev' | 'research'

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
  /** abre el explorador de archivos (descripción / stack / galería) en vez de solo enlaces */
  explorer?: boolean
}

export const projects: Project[] = [
  {
    slug: 'aukani-pos',
    title: 'Aukani POS',
    year: '2024',
    kind: 'dev',
    summary: {
      es: 'Sistema de punto de venta full-stack: gestión de productos, ventas, inventario y reportes, con control de acceso por roles. Cliente de escritorio con Electron además de la API y el frontend, diseñados de principio a fin.',
      en: 'Full-stack point-of-sale system: product management, sales, inventory and reports, with role-based access control. Electron desktop client alongside the API and frontend, designed end to end.',
    },
    stack: [
      'React',
      'TypeScript',
      'Electron',
      'REST API',
      'PostgreSQL',
      'RBAC',
    ],
    links: [],
    accent: 'linear-gradient(135deg,#22d3ee,#84cc16)',
    explorer: true,
  },
  {
    slug: 'insecure-backend-devsecops',
    title: 'Backend Inseguro · DevSecOps',
    year: '2025',
    kind: 'devsecops',
    summary: {
      es: 'API backend deliberadamente vulnerable como banco de pruebas para montar pipelines de seguridad en CI/CD (SAST, DAST y análisis de dependencias) y practicar el ciclo completo de detección y remediación de vulnerabilidades.',
      en: 'A deliberately vulnerable backend API used as a testbed to build security pipelines in CI/CD (SAST, DAST and dependency scanning) and practise the full detect-and-remediate vulnerability loop.',
    },
    stack: ['GitHub Actions', 'SAST / DAST', 'Semgrep', 'OWASP ZAP', 'Docker'],
    links: [],
    accent: 'linear-gradient(135deg,#84cc16,#0ea5e9)',
  },
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
    kind: 'offensive',
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
    kind: 'devsecops',
    summary: {
      es: 'Herramienta en Python sobre Nmap que automatiza la detección de configuraciones TLS inseguras (protocolos y cifrados obsoletos) en hosts objetivo, con salida en consola enriquecida y flujo guiado por menú. Pensada para integrarse en un pipeline.',
      en: 'Python tool wrapping Nmap that automates detection of insecure TLS configurations (legacy protocols and weak ciphers) on target hosts, with a rich console UI and a menu-driven flow. Built to slot into a pipeline.',
    },
    stack: ['Python', 'Nmap', 'ssl-enum-ciphers', 'rich'],
    links: [{ label: 'Código', href: 'https://github.com/BreaktneSs' }],
    accent: 'linear-gradient(135deg,#84cc16,#0ea5e9)',
  },
  {
    slug: 'resa-k',
    title: 'Resa-K',
    year: '2025',
    kind: 'dev',
    summary: {
      es: 'Plataforma web de reserva de eventos: búsqueda y filtrado, categorías, autenticación con Google y panel de usuario (cotizaciones, reservas, notificaciones). Diseño responsive. Capturas en la galería.',
      en: 'Event-booking web platform: search and filtering, categories, Google auth and a user dashboard (quotes, bookings, notifications). Responsive design. Screenshots in the gallery.',
    },
    stack: ['React', 'Tailwind', 'OAuth', 'REST'],
    links: [],
    accent: 'linear-gradient(135deg,#22d3ee,#84cc16)',
    explorer: true,
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
]

/* ── Skills ─────────────────────────────────────────────────── */

export interface SkillGroup {
  label: Record<Locale, string>
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: { es: 'Desarrollo', en: 'Development' },
    items: [
      'React',
      'TypeScript',
      'Node.js',
      'REST APIs',
      'Tailwind CSS',
      'PostgreSQL',
      'Git',
    ],
  },
  {
    label: { es: 'DevSecOps & remediación', en: 'DevSecOps & remediation' },
    items: [
      'CI/CD · GitHub Actions',
      'SAST / DAST',
      'Dependency scanning',
      'Docker',
      'TLS / SSL auditing',
      'Hardening',
    ],
  },
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
    label: { es: 'Análisis & Labs', en: 'Analysis & Labs' },
    items: [
      'Nessus',
      'OpenVAS',
      'OWASP Top 10',
      'Python',
      'PowerShell',
      'QEMU / KVM',
      'Libvirt',
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
    title: { es: 'Desarrollo full-stack', en: 'Full-stack development' },
    body: {
      es: 'Productos web de principio a fin: React y TypeScript en el front, APIs REST y base de datos en el back, con control de acceso por roles.',
      en: 'Web products end to end: React and TypeScript on the front, REST APIs and a database on the back, with role-based access control.',
    },
  },
  {
    title: { es: 'DevSecOps & remediación', en: 'DevSecOps & remediation' },
    body: {
      es: 'Pipelines de seguridad en CI/CD (SAST, DAST y dependencias) y el ciclo completo de detección, priorización y remediación de vulnerabilidades.',
      en: 'Security pipelines in CI/CD (SAST, DAST and dependencies) and the full detect, triage and remediate vulnerability loop.',
    },
  },
  {
    title: { es: 'Simulación Red Team', en: 'Red Team simulation' },
    body: {
      es: 'Simulación de ataques reales, estilo Red Team, sobre sector público e instituciones financieras.',
      en: 'Simulation of real-world attacks, Red Team style, on public-sector and financial institutions.',
    },
  },
  {
    title: { es: 'Ingeniería social', en: 'Social engineering' },
    body: {
      es: 'Pruebas de ingeniería social, físicas y de phishing, en organizaciones públicas, con formación posterior al personal.',
      en: 'Social-engineering tests, both physical and phishing-based, in public organisations, with follow-up staff training.',
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
 * `project` (opcional) — el slug de un Project — hace que la captura
 * aparezca también en la carpeta "Galería" de su explorador de proyecto.
 */

export interface GalleryShot {
  file: string
  title: Record<Locale, string>
  caption: Record<Locale, string>
  href?: string
  project?: string
}

export const gallery: GalleryShot[] = [
  {
    file: 'aukani-login.png',
    title: { es: 'Aukani POS — inicio de sesión', en: 'Aukani POS — sign in' },
    caption: {
      es: 'Ventana de acceso de la app de escritorio (Electron): usuario con dominio fijo @aukani.com, contraseña y acceso remoto por túnel SSH desde la barra superior.',
      en: 'Desktop app (Electron) sign-in window: domain-scoped username (@aukani.com), password field, and SSH-tunnel remote access from the top bar.',
    },
    project: 'aukani-pos',
  },
  {
    file: 'aukani-2fa.png',
    title: { es: 'Verificación en dos pasos', en: 'Two-factor authentication' },
    caption: {
      es: 'TOTP compatible con Google Authenticator / Authy tras el login. También muestra el tema claro de la aplicación.',
      en: 'TOTP 2FA compatible with Google Authenticator / Authy after login. Also shows the app’s light theme.',
    },
    project: 'aukani-pos',
  },
  {
    file: 'aukani-nav.png',
    title: { es: 'Navegación principal', en: 'Main navigation' },
    caption: {
      es: 'Módulos del sistema: Caja, Caja remota, Despachos, Reservas, Inventario, Compras, Ventas/Devoluciones, Control de caja, Dashboard, Configuración y Auditoría.',
      en: 'System modules: register, remote register, dispatch, bookings, inventory, purchasing, sales/returns, cash-drawer control, dashboard, settings and audit log.',
    },
    project: 'aukani-pos',
  },
  {
    file: 'aukani-checkout.jpg',
    title: { es: 'Punto de venta (Caja)', en: 'Point of sale (register)' },
    caption: {
      es: 'Ventas simultáneas en pestañas, búsqueda o escaneo de código de barras, catálogo filtrado por categoría con existencias en vivo, carrito editable y cobro o división de cuenta.',
      en: 'Multiple sales in tabs, barcode search/scan, category-filtered catalogue with live stock, an editable cart, and checkout or split-bill.',
    },
    project: 'aukani-pos',
  },
  {
    file: 'aukani-remote-access.png',
    title: {
      es: 'Acceso remoto por túnel SSH',
      en: 'Remote access via SSH tunnel',
    },
    caption: {
      es: 'Conexión al servidor mediante túnel SSH (host, puerto, usuario y contraseña) para operar la caja fuera de la red local.',
      en: 'Connects to the server over an SSH tunnel (host, port, user, password) so the register can run outside the local network.',
    },
    project: 'aukani-pos',
  },
  {
    file: 'aukani-dashboard.png',
    title: { es: 'Dashboard de contabilidad', en: 'Accounting dashboard' },
    caption: {
      es: 'Ingresos, ticket promedio, transacciones y cancelaciones por periodo; tendencia de ventas con tooltip por día y desglose por método de pago (efectivo / Nequi).',
      en: 'Revenue, average ticket, transactions and cancellations by period; a sales trend with per-day tooltip, and a payment-method breakdown (cash / Nequi).',
    },
    project: 'aukani-pos',
  },
  {
    file: 'resa-k-home.png',
    title: { es: 'Resa-K — inicio', en: 'Resa-K — home' },
    caption: {
      es: 'Plataforma de reserva de eventos: búsqueda, categorías y carrusel de eventos.',
      en: 'Event booking platform: search, categories and an events carousel.',
    },
    project: 'resa-k',
  },
  {
    file: 'resa-k-auth.png',
    title: { es: 'Resa-K — acceso', en: 'Resa-K — auth' },
    caption: {
      es: 'Modal de login / registro con inicio de sesión mediante Google.',
      en: 'Login / sign-up modal with Google sign-in.',
    },
    project: 'resa-k',
  },
  {
    file: 'resa-k-mobile.png',
    title: { es: 'Resa-K — responsive', en: 'Resa-K — responsive' },
    caption: {
      es: 'Vista móvil con el menú de usuario: cotizaciones, reservas y notificaciones.',
      en: 'Mobile view with the user menu: quotes, bookings and notifications.',
    },
    project: 'resa-k',
  },
]

/* ── Cadenas de interfaz (i18n) ─────────────────────────────── */

export const ui: Record<
  Locale,
  {
    nav: {
      about: string
      experience: string
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
    experience: { heading: string; lead: string }
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
    explorer: {
      cta: string
      back: string
      folders: { description: string; stack: string; gallery: string }
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
      experience: 'Experiencia',
      work: 'Proyectos',
      gallery: 'Galería',
      skills: 'Skills',
      contact: 'Contacto',
    },
    hero: {
      kicker: 'Ethical Hacker & Desarrollador Full-Stack',
      title: ['Construyo software.', 'Y sé exactamente', 'cómo romperlo.'],
      lead: 'Desarrollo full-stack y seguridad ofensiva. Construyo productos web y los pipelines que los mantienen seguros — y hago Red Team cuando toca romperlos.',
      ctaWork: 'Ver proyectos',
      ctaContact: 'Hablemos',
      scroll: 'Desplázate',
    },
    about: {
      heading: 'Perfil',
      body: [
        'Soy Brayan Roa, desarrollador y ethical hacker con 3 años de experiencia. Actualmente curso la certificación CEH (EC-Council).',
        'En desarrollo trabajo full-stack con React, TypeScript y APIs REST (Aukani POS, Resa-K). En seguridad me muevo con Nmap, Metasploit, Burp Suite, Nessus y OWASP ZAP: Red Team para sector público y financiero, análisis de vulnerabilidades, pipelines DevSecOps e ingeniería social.',
      ],
      focusHeading: 'En qué me especializo',
      stats: [
        { value: '3+', label: 'años entre dev y seguridad' },
        { value: 'CEH', label: 'en progreso · EC-Council' },
        { value: '8', label: 'proyectos destacados' },
      ],
    },
    experience: {
      heading: 'Experiencia',
      lead: 'Dónde aplico esto en el día a día, de forma profesional.',
    },
    work: {
      heading: 'Proyectos',
      lead: 'Una selección de desarrollo, DevSecOps, Red Team e investigación.',
      all: 'Todos',
      filters: {
        all: 'Todos',
        dev: 'Desarrollo',
        devsecops: 'DevSecOps',
        offensive: 'Red Team',
        research: 'Investigación',
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
    explorer: {
      cta: 'Explorar',
      back: 'Atrás',
      folders: {
        description: 'Descripción',
        stack: 'Stack y tecnologías',
        gallery: 'Galería',
      },
    },
    skills: {
      heading: 'Stack & Skills',
      lead: 'Las herramientas con las que me muevo cómodo, del código al exploit.',
    },
    contact: {
      heading: 'Trabajemos juntos',
      lead: '¿Un producto que construir, un pipeline que asegurar o un Red Team? Escríbeme.',
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
      experience: 'Experience',
      work: 'Work',
      gallery: 'Gallery',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Ethical Hacker & Full-Stack Developer',
      title: ['I build software.', 'And I know exactly', 'how to break it.'],
      lead: 'Full-stack development and offensive security. I build web products and the pipelines that keep them secure — and I red-team them when it’s time to break them.',
      ctaWork: 'View work',
      ctaContact: "Let's talk",
      scroll: 'Scroll',
    },
    about: {
      heading: 'About',
      body: [
        "I'm Brayan Roa, a developer and ethical hacker with 3 years of experience. I'm currently pursuing the CEH certification (EC-Council).",
        'On the build side I work full-stack with React, TypeScript and REST APIs (Aukani POS, Resa-K). On the security side I use Nmap, Metasploit, Burp Suite, Nessus and OWASP ZAP: Red Team for public-sector and financial institutions, vulnerability analysis, DevSecOps pipelines and social engineering.',
      ],
      focusHeading: 'What I focus on',
      stats: [
        { value: '3+', label: 'years across dev & security' },
        { value: 'CEH', label: 'in progress · EC-Council' },
        { value: '8', label: 'featured projects' },
      ],
    },
    experience: {
      heading: 'Experience',
      lead: 'Where I put this to work, professionally, day to day.',
    },
    work: {
      heading: 'Work',
      lead: 'A selection of development, DevSecOps, Red Team and research projects.',
      all: 'All',
      filters: {
        all: 'All',
        dev: 'Development',
        devsecops: 'DevSecOps',
        offensive: 'Red Team',
        research: 'Research',
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
    explorer: {
      cta: 'Explore',
      back: 'Back',
      folders: {
        description: 'Description',
        stack: 'Stack & tech',
        gallery: 'Gallery',
      },
    },
    skills: {
      heading: 'Stack & Skills',
      lead: 'The tools I move comfortably with, from code to exploit.',
    },
    contact: {
      heading: "Let's work together",
      lead: 'A product to build, a pipeline to secure or a red team? Drop me a line.',
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
