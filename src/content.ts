/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO DEL PORTFOLIO  ·  edita este archivo
 * ─────────────────────────────────────────────────────────────
 *  Todo el texto visible del sitio vive aquí, en español (es) e
 *  inglés (en). Cambia los valores y el sitio se actualiza.
 */

import tlsAuditorMain from './assets/code/tls-config-auditor/main.py?raw'
import tlsAuditorValidator from './assets/code/tls-config-auditor/tls_validator.py?raw'
import tlsAuditorBanner from './assets/code/tls-config-auditor/banner.py?raw'

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
  email: 'brayan.stiff4@gmail.com',
  location: { es: 'Colombia', en: 'Colombia' },
  education: {
    degree: {
      es: 'Ingeniería de Sistemas y Computación',
      en: 'Systems and Computer Engineering',
    },
    school: 'Universidad Católica de Colombia',
    year: '2026',
  },
  interests: [
    { es: 'Puzzles y cubos de Rubik', en: 'Puzzles & Rubik’s cubes' },
    {
      es: 'Videojuegos con mucho lore (Souls-like y similares)',
      en: 'Lore-rich video games (Souls-likes and the like)',
    },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/BreaktneSs' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/brayan-stiff-roa-prieto-882055255/',
    },
    { label: 'Email', href: 'mailto:brayan.stiff4@gmail.com' },
  ],
  /** colócalo en public/ con este mismo nombre para que el botón funcione */
  cvHref: './cv-brayan-roa.pdf',
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
    role: { es: 'Security Tester', en: 'Security Tester' },
    company: 'Fluid Attacks',
    companyUrl: 'https://fluidattacks.com',
    period: { es: 'Oct 2025 — Presente', en: 'Oct 2025 — Present' },
    summary: {
      es: 'Revisión manual de código (SAST) y pruebas dinámicas (DAST/PTaaS) para encontrar vulnerabilidades en aplicaciones de clientes de múltiples sectores en Colombia. Catalogo y priorizo cada hallazgo bajo el estándar CVSS v4.0, apoyándome en revisión asistida por IA (Claude, Codex) para acelerar el análisis, y acompaño la remediación junto a los equipos de desarrollo.',
      en: 'Manual code review (SAST) and dynamic testing (DAST/PTaaS) to find vulnerabilities in client applications across multiple sectors in Colombia. I catalogue and prioritise every finding under the CVSS v4.0 standard, use AI-assisted review (Claude, Codex) to speed up analysis, and support remediation alongside development teams.',
    },
    tags: [
      'Code Review',
      'SAST',
      'DAST / PTaaS',
      'CVSS v4.0',
      'AI-assisted review',
      'Vulnerability Management',
    ],
  },
  {
    role: {
      es: 'Consultor de Ciberseguridad Junior',
      en: 'Junior Cybersecurity Consultant',
    },
    // Verifica que coincide exactamente con el nombre de la empresa en LinkedIn.
    company: 'Cross Border Technology',
    period: { es: 'Jun 2024 — Jul 2025', en: 'Jun 2024 — Jul 2025' },
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

/* ── Certificaciones ────────────────────────────────────────── */

export interface Certification {
  name: string
  issuer: string
  note?: Record<Locale, string>
}

export const certifications: Certification[] = [
  { name: 'CVSS v4.0', issuer: 'FIRST' },
  { name: 'Code Review', issuer: 'PentesterLab' },
  {
    name: 'CWEE',
    issuer: 'INE Security',
    note: {
      es: 'Certified Web Exploitation Expert · módulos completados',
      en: 'Certified Web Exploitation Expert · completed modules',
    },
  },
  {
    name: 'CEH',
    issuer: 'EC-Council',
    note: {
      es: 'Certified Ethical Hacker · en curso',
      en: 'Certified Ethical Hacker · in progress',
    },
  },
  {
    name: 'AWS CCP',
    issuer: 'Amazon Web Services',
    note: {
      es: 'AWS Certified Cloud Practitioner · en curso',
      en: 'AWS Certified Cloud Practitioner · in progress',
    },
  },
]

/* ── Proyectos destacados ───────────────────────────────────── */

export type ProjectKind = 'offensive' | 'devsecops' | 'dev' | 'research'

export interface ProjectCodeFile {
  filename: string
  language: string
  code: string
}

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
  /** código fuente real, mostrado como vista previa + descarga en la carpeta "Código" */
  codeFiles?: ProjectCodeFile[]
}

export const projects: Project[] = [
  {
    slug: 'secure-e-commerce',
    title: 'Secure Commerce Lab · DevSecOps',
    year: '2025',
    kind: 'devsecops',
    summary: {
      es: 'E-commerce API con FastAPI, PostgreSQL y SQLAlchemy, pensada como base de un proyecto de Application Security / DevSecOps: arquitectura en capas (API → Services → Repositories → Models), auth con JWT y bcrypt, migraciones con Alembic y despliegue con Docker Compose. Fase actual: aplicación funcional y sin vulnerabilidades intencionales — las siguientes fases introducen vulnerabilidades controladas (OWASP Top 10 / API Security Top 10) y un pipeline de seguridad en CI/CD (SAST, SCA, secret detection, DAST).',
      en: 'E-commerce API built with FastAPI, PostgreSQL and SQLAlchemy, built as the foundation for an Application Security / DevSecOps project: layered architecture (API → Services → Repositories → Models), JWT + bcrypt auth, Alembic migrations and Docker Compose deployment. Current phase: a clean, fully working application with no intentional vulnerabilities yet — upcoming phases introduce controlled vulnerabilities (OWASP Top 10 / API Security Top 10) and a CI/CD security pipeline (SAST, SCA, secret detection, DAST).',
    },
    stack: [
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'JWT',
      'Docker Compose',
    ],
    links: [
      {
        label: 'Código',
        href: 'https://github.com/BreaktneSs/secure-e-commerce',
      },
    ],
    accent: 'linear-gradient(135deg,#84cc16,#0ea5e9)',
    explorer: true,
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
    links: [],
    accent: 'linear-gradient(135deg,#84cc16,#0ea5e9)',
    explorer: true,
    codeFiles: [
      { filename: 'main.py', language: 'python', code: tlsAuditorMain },
      {
        filename: 'modules/tls_validator.py',
        language: 'python',
        code: tlsAuditorValidator,
      },
      {
        filename: 'modules/banner.py',
        language: 'python',
        code: tlsAuditorBanner,
      },
    ],
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
    slug: 'red-team-public-sector',
    title: 'Red Team · Sector Público',
    year: '2024',
    kind: 'offensive',
    summary: {
      es: 'Ejercicio Red Team autorizado y controlado para instituciones públicas: simulación de DDoS localizado con una botnet desplegada en un entorno controlado dentro de Colombia, y defacement de una web interna, para poner a prueba la respuesta a incidentes y la resiliencia de los sistemas.',
      en: 'An authorized, controlled Red Team engagement for public institutions: a localised DDoS simulation using a botnet deployed in a controlled environment within Colombia, plus the defacement of an internal web page, to test incident response and system resilience.',
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
      es: 'Campañas de ingeniería social autorizadas en organizaciones públicas y sus sedes: piggybacking, tailgating y skimming. Cada ejercicio se cerró con formación práctica de concienciación para el personal, orientada a mejorar la seguridad física.',
      en: 'Authorized social-engineering campaigns across public organisations and their branches: piggybacking, tailgating and skimming. Each exercise closed with hands-on awareness training for staff, aimed at improving physical security.',
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
      es: 'ESP32 con firmware personalizado (JustCallMeKoko) controlado desde un Flipper Zero para ataques Wi-Fi en laboratorio controlado: packet flooding, deautenticación, captura de handshakes y despliegue de captive portal.',
      en: 'ESP32 flashed with custom firmware (JustCallMeKoko) driven from a Flipper Zero for Wi-Fi attacks in a controlled lab: packet flooding, deauth, handshake capture and captive-portal deployment.',
    },
    stack: ['ESP32', 'Flipper Zero', 'ESP32 Marauder', 'Wi-Fi'],
    links: [
      {
        label: 'Firmware',
        href: 'https://github.com/justcallmekoko/ESP32Marauder',
      },
    ],
    accent: 'linear-gradient(135deg,#f59e0b,#84cc16)',
    explorer: true,
  },
  {
    slug: 'aukani-pos',
    title: 'Aukani POS',
    year: '2024',
    kind: 'dev',
    summary: {
      es: 'Sistema de punto de venta full-stack diseñado con seguridad desde el inicio: autenticación JWT con verificación en dos pasos (TOTP), audit log de operaciones, y acceso remoto por túnel SSH cuando el servidor no está en la red local. Desplegado con Docker Compose y Nginx como proxy inverso sobre una red de 4 VMs. Cliente de escritorio con Electron además de la API y el frontend.',
      en: 'Full-stack point-of-sale system designed with security from day one: JWT auth with two-factor verification (TOTP), an operations audit log, and SSH-tunnel remote access when the server isn’t on the local network. Deployed with Docker Compose and Nginx as a reverse proxy across a 4-VM network. Electron desktop client alongside the API and frontend.',
    },
    stack: [
      'React',
      'TypeScript',
      'Electron',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'Docker',
      'Nginx',
      'RBAC',
    ],
    links: [],
    accent: 'linear-gradient(135deg,#22d3ee,#84cc16)',
    explorer: true,
  },
  {
    slug: 'resa-k',
    title: 'Resa-K',
    year: '2025',
    kind: 'dev',
    summary: {
      es: 'Plataforma web de reserva de eventos: búsqueda y filtrado, categorías, autenticación con Google y panel de usuario (cotizaciones, reservas, notificaciones). Diseño responsive.',
      en: 'Event-booking web platform: search and filtering, categories, Google auth and a user dashboard (quotes, bookings, notifications). Responsive design.',
    },
    stack: ['React', 'Tailwind', 'OAuth', 'REST'],
    links: [],
    accent: 'linear-gradient(135deg,#22d3ee,#84cc16)',
    explorer: true,
  },
]

/* ── Skills ─────────────────────────────────────────────────── */

export interface SkillGroup {
  label: Record<Locale, string>
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: { es: 'DevSecOps & remediación', en: 'DevSecOps & remediation' },
    items: [
      'CI/CD · GitHub Actions',
      'GitLab CI',
      'SAST / DAST',
      'Dependency scanning',
      'Azure',
      'Docker',
      'TLS / SSL auditing',
      'Hardening',
      'IA asistida (Claude, Codex)',
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
      'Linux',
      'Bash',
      'Python',
      'PowerShell',
      'QEMU / KVM',
      'Libvirt',
      'Apache JMeter',
    ],
  },
  {
    label: { es: 'Desarrollo', en: 'Development' },
    items: [
      'React',
      'TypeScript',
      'Node.js',
      'Fastify',
      'Prisma',
      'REST APIs',
      'Tailwind CSS',
      'PostgreSQL',
      'Git',
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
  {
    title: { es: 'Desarrollo full-stack', en: 'Full-stack development' },
    body: {
      es: 'Productos web de principio a fin: React y TypeScript en el front, APIs REST y base de datos en el back, con control de acceso por roles.',
      en: 'Web products end to end: React and TypeScript on the front, REST APIs and a database on the back, with role-based access control.',
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
    file: 'wifi-marauder-hardware.png',
    title: { es: 'ESP32 + Flipper Zero', en: 'ESP32 + Flipper Zero' },
    caption: {
      es: 'Módulo ESP32 con el firmware Marauder, controlado por Wi-Fi desde el Flipper Zero.',
      en: 'ESP32 module running the Marauder firmware, controlled over Wi-Fi from the Flipper Zero.',
    },
    project: 'wifi-marauder',
  },
  {
    file: 'wifi-marauder-captive-portal.png',
    title: {
      es: 'Captive portal (vista de la víctima)',
      en: 'Captive portal (victim view)',
    },
    caption: {
      es: 'Laboratorio controlado y autorizado: página de login falsa servida por el evil portal — el objetivo cree estar iniciando sesión en Google.',
      en: 'Controlled, authorized lab: fake login page served by the evil portal — the target believes they’re signing in to Google.',
    },
    project: 'wifi-marauder',
  },
  {
    file: 'wifi-marauder-captured-creds.png',
    title: {
      es: 'Credenciales capturadas (lab)',
      en: 'Captured credentials (lab)',
    },
    caption: {
      es: 'Mismo laboratorio controlado: log del Flipper Zero con las credenciales de prueba enviadas por el cliente conectado al evil portal.',
      en: 'Same controlled lab: Flipper Zero log showing the test credentials submitted by the client connected to the evil portal.',
    },
    project: 'wifi-marauder',
  },
  {
    file: 'tls-auditor-code.png',
    title: { es: 'Código fuente (Python)', en: 'Source code (Python)' },
    caption: {
      es: 'Menú interactivo con rich.Console: valida TLS bajo demanda y despacha la opción elegida al módulo tls_validator.',
      en: 'Interactive menu built with rich.Console: validates TLS on demand and dispatches the chosen option to the tls_validator module.',
    },
    project: 'tls-config-auditor',
  },
  {
    file: 'tls-auditor-scan.png',
    title: { es: 'Escaneo en ejecución', en: 'Scan in action' },
    caption: {
      es: 'Resultado real de un escaneo: cifrados TLS 1.0 detectados vía ssl-enum-ciphers y alerta de configuración insegura.',
      en: 'Real scan output: TLS 1.0 ciphers detected via ssl-enum-ciphers, flagged as an insecure configuration.',
    },
    project: 'tls-config-auditor',
  },
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
      certifications: string
      work: string
      skills: string
      contact: string
    }
    hero: {
      kicker: string
      title: string[]
      lead: string
      ctaWork: string
      ctaContact: string
      ctaCV: string
      scroll: string
    }
    about: {
      heading: string
      body: string[]
      focusHeading: string
      stats: { value: string; label: string }[]
    }
    experience: { heading: string; lead: string }
    certifications: { heading: string; lead: string }
    work: {
      heading: string
      lead: string
      all: string
      filters: Record<ProjectKind | 'all', string>
    }
    gallery: {
      empty: string
      close: string
      prev: string
      next: string
    }
    explorer: {
      cta: string
      back: string
      download: string
      folders: {
        description: string
        stack: string
        code: string
        gallery: string
        references: string
      }
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
    profileCard: {
      experience: string
      graduated: string
      education: string
      interests: string
      contact: string
    }
  }
> = {
  es: {
    nav: {
      about: 'Perfil',
      experience: 'Experiencia',
      certifications: 'Certificaciones',
      work: 'Proyectos',
      skills: 'Skills',
      contact: 'Contacto',
    },
    hero: {
      kicker: 'Ethical Hacker & Desarrollador Full-Stack',
      title: ['Construyo software.', 'Y sé exactamente', 'cómo romperlo.'],
      lead: 'Desarrollo full-stack y seguridad ofensiva. Construyo productos web y los pipelines que los mantienen seguros — y hago Red Team cuando toca romperlos.',
      ctaWork: 'Ver proyectos',
      ctaContact: 'Hablemos',
      ctaCV: 'Descargar CV',
      scroll: 'Desplázate',
    },
    about: {
      heading: 'Perfil',
      body: [
        'Soy Brayan Roa, desarrollador y ethical hacker con 3 años de experiencia. Actualmente curso la certificación CEH (EC-Council).',
        'En seguridad me muevo con Nmap, Metasploit, Burp Suite, Nessus y OWASP ZAP: pipelines DevSecOps, Red Team para sector público y financiero, análisis de vulnerabilidades e ingeniería social. En desarrollo trabajo full-stack con React, TypeScript y APIs REST (Aukani POS, Resa-K).',
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
    certifications: {
      heading: 'Certificaciones',
      lead: 'Formación formal que respalda el trabajo de arriba.',
    },
    work: {
      heading: 'Proyectos',
      lead: 'Una selección de DevSecOps, Red Team, investigación y desarrollo.',
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
      empty: 'Aún no hay capturas. Añádelas en src/content.ts.',
      close: 'Cerrar',
      prev: 'Anterior',
      next: 'Siguiente',
    },
    explorer: {
      cta: 'Explorar',
      back: 'Atrás',
      download: 'Descargar',
      folders: {
        description: 'Descripción',
        stack: 'Stack y tecnologías',
        code: 'Código',
        gallery: 'Galería',
        references: 'Referencias',
      },
    },
    skills: {
      heading: 'Stack & Skills',
      lead: 'Las herramientas con las que me muevo cómodo, del código al exploit.',
    },
    contact: {
      heading: 'Trabajemos juntos',
      lead: '¿Un pipeline que asegurar, un Red Team o un producto que construir? Escríbeme.',
      cta: 'Enviar correo',
      availability: 'Abierto a roles en ingeniería de seguridad',
    },
    footer: {
      built: 'Hecho con React, Tailwind y Motion',
      rights: 'Todos los derechos reservados.',
    },
    theme: { toLight: 'Cambiar a tema claro', toDark: 'Cambiar a tema oscuro' },
    lang: { switchTo: 'Switch to English' },
    profileCard: {
      experience: 'Experiencia',
      graduated: 'Graduación',
      education: 'Educación',
      interests: 'Intereses',
      contact: 'Contacto',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      certifications: 'Certifications',
      work: 'Work',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Ethical Hacker & Full-Stack Developer',
      title: ['I build software.', 'And I know exactly', 'how to break it.'],
      lead: 'Full-stack development and offensive security. I build web products and the pipelines that keep them secure — and I red-team them when it’s time to break them.',
      ctaWork: 'View work',
      ctaContact: "Let's talk",
      ctaCV: 'Download CV',
      scroll: 'Scroll',
    },
    about: {
      heading: 'About',
      body: [
        "I'm Brayan Roa, a developer and ethical hacker with 3 years of experience. I'm currently pursuing the CEH certification (EC-Council).",
        'On the security side I use Nmap, Metasploit, Burp Suite, Nessus and OWASP ZAP: DevSecOps pipelines, Red Team for public-sector and financial institutions, vulnerability analysis and social engineering. On the build side I work full-stack with React, TypeScript and REST APIs (Aukani POS, Resa-K).',
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
    certifications: {
      heading: 'Certifications',
      lead: 'Formal training backing up the work above.',
    },
    work: {
      heading: 'Work',
      lead: 'A selection of DevSecOps, Red Team, research and development projects.',
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
      empty: 'No screenshots yet. Add them in src/content.ts.',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
    },
    explorer: {
      cta: 'Explore',
      back: 'Back',
      download: 'Download',
      folders: {
        description: 'Description',
        stack: 'Stack & tech',
        code: 'Code',
        gallery: 'Gallery',
        references: 'References',
      },
    },
    skills: {
      heading: 'Stack & Skills',
      lead: 'The tools I move comfortably with, from code to exploit.',
    },
    contact: {
      heading: "Let's work together",
      lead: 'A pipeline to secure, a red team or a product to build? Drop me a line.',
      cta: 'Send email',
      availability: 'Open to security engineering roles',
    },
    footer: {
      built: 'Built with React, Tailwind and Motion',
      rights: 'All rights reserved.',
    },
    theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
    lang: { switchTo: 'Cambiar a español' },
    profileCard: {
      experience: 'Experience',
      graduated: 'Graduated',
      education: 'Education',
      interests: 'Interests',
      contact: 'Contact',
    },
  },
}
