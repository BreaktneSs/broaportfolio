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
  name: 'BreaktneSs',
  handle: '@BreaktneSs',
  email: 'broaprieto09@gmail.com',
  location: { es: 'España · remoto', en: 'Spain · remote' },
  socials: [
    { label: 'GitHub', href: 'https://github.com/BreaktneSs' },
    { label: 'Email', href: 'mailto:broaprieto09@gmail.com' },
    // { label: 'LinkedIn', href: 'https://linkedin.com/in/…' },
    // { label: 'X', href: 'https://x.com/…' },
  ],
} as const

/* ── Proyectos destacados ───────────────────────────────────── */

export interface Project {
  slug: string
  title: string
  year: string
  kind: 'security' | 'frontend' | 'fullstack'
  summary: Record<Locale, string>
  stack: string[]
  links: { label: string; href: string }[]
  /** gradiente CSS para la tarjeta */
  accent: string
}

export const projects: Project[] = [
  {
    slug: 'broaportfolio',
    title: 'broaportfolio',
    year: '2026',
    kind: 'frontend',
    summary: {
      es: 'Este mismo sitio: SPA en React 19 + Vite, Tailwind v4, animaciones con Motion y una escena WebGL sutil con React Three Fiber. Bilingüe y desplegado en GitHub Pages.',
      en: 'This very site: a React 19 + Vite SPA with Tailwind v4, Motion animations and a subtle WebGL scene via React Three Fiber. Bilingual and deployed to GitHub Pages.',
    },
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind v4', 'Motion', 'R3F'],
    links: [
      { label: 'Código', href: 'https://github.com/BreaktneSs/broaportfolio' },
    ],
    accent: 'linear-gradient(135deg,#8b4dff,#22d3ee)',
  },
  {
    slug: 'recon-toolkit',
    title: 'Recon Toolkit',
    year: '2025',
    kind: 'security',
    summary: {
      es: 'Placeholder — describe aquí una herramienta o investigación de seguridad ofensiva: automatización de reconocimiento, hallazgos, impacto.',
      en: 'Placeholder — describe an offensive-security tool or research here: recon automation, findings, impact.',
    },
    stack: ['Python', 'Nmap', 'Burp', 'Docker'],
    links: [{ label: 'Write-up', href: '#' }],
    accent: 'linear-gradient(135deg,#22d3ee,#7c3aed)',
  },
  {
    slug: 'realtime-app',
    title: 'Realtime Dashboard',
    year: '2025',
    kind: 'fullstack',
    summary: {
      es: 'Placeholder — un producto full-stack: dashboard en tiempo real, WebSockets, gráficas y control de acceso.',
      en: 'Placeholder — a full-stack product: realtime dashboard, WebSockets, charts and access control.',
    },
    stack: ['React', 'Node', 'WebSocket', 'PostgreSQL'],
    links: [
      { label: 'Demo', href: '#' },
      { label: 'Código', href: '#' },
    ],
    accent: 'linear-gradient(135deg,#7c3aed,#ec4899)',
  },
  {
    slug: 'ctf-writeups',
    title: 'CTF Write-ups',
    year: '2024—2026',
    kind: 'security',
    summary: {
      es: 'Placeholder — colección de resoluciones de CTF (web, pwn, crypto). Enlaza a tu repo o blog.',
      en: 'Placeholder — a collection of CTF solutions (web, pwn, crypto). Link to your repo or blog.',
    },
    stack: ['Web', 'Pwn', 'Crypto', 'Forensics'],
    links: [{ label: 'Repo', href: 'https://github.com/BreaktneSs' }],
    accent: 'linear-gradient(135deg,#06b6d4,#8b4dff)',
  },
]

/* ── Skills ─────────────────────────────────────────────────── */

export interface SkillGroup {
  label: Record<Locale, string>
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: { es: 'Frontend', en: 'Frontend' },
    items: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Motion / Framer',
      'React Three Fiber',
      'WebGL / GLSL',
      'Accesibilidad (a11y)',
    ],
  },
  {
    label: { es: 'Plataforma', en: 'Platform' },
    items: [
      'Node.js',
      'REST / WebSocket',
      'PostgreSQL',
      'Docker',
      'CI/CD',
      'Vitest / Playwright',
    ],
  },
  {
    label: { es: 'Seguridad', en: 'Security' },
    items: [
      'Pentesting web',
      'OWASP Top 10',
      'Burp Suite',
      'Nmap / recon',
      'Linux hardening',
      'CTF (web / pwn)',
    ],
  },
]

/* ── Galería de capturas ────────────────────────────────────── */
/*
 * Suelta tus imágenes (png / jpg / webp / avif / svg) en
 *   src/assets/gallery/
 * y añade una entrada aquí con el mismo nombre de archivo en `file`.
 * `tall: true` destaca la captura ocupando dos columnas del mosaico.
 * `href` (opcional) añade un enlace externo en el visor.
 */

export interface GalleryShot {
  file: string
  title: Record<Locale, string>
  caption: Record<Locale, string>
  tall?: boolean
  href?: string
}

export const gallery: GalleryShot[] = [
  {
    file: 'dashboard.svg',
    title: { es: 'Panel en tiempo real', en: 'Realtime dashboard' },
    caption: {
      es: 'Métricas en vivo, gráficas y tablas — React + WebSocket.',
      en: 'Live metrics, charts and tables — React + WebSocket.',
    },
    tall: true,
  },
  {
    file: 'recon-tool.svg',
    title: { es: 'Recon Toolkit (CLI)', en: 'Recon Toolkit (CLI)' },
    caption: {
      es: 'Automatización de reconocimiento en ejecución sobre un objetivo de laboratorio.',
      en: 'Recon automation running against a lab target.',
    },
  },
  {
    file: 'mobile-app.svg',
    title: { es: 'App móvil de finanzas', en: 'Finance mobile app' },
    caption: {
      es: 'Cliente React Native — balance, movimientos y navegación.',
      en: 'React Native client — balance, transactions and navigation.',
    },
  },
  {
    file: 'landing.svg',
    title: { es: 'Landing de producto', en: 'Product landing' },
    caption: {
      es: 'Página de marketing con animaciones y modo claro.',
      en: 'Marketing page with animations and light mode.',
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
      stats: { value: string; label: string }[]
    }
    work: {
      heading: string
      lead: string
      all: string
      filters: Record<Project['kind'] | 'all', string>
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
      kicker: 'Security & Frontend Engineer',
      title: ['Construyo interfaces', 'que además', 'resisten ataques.'],
      lead: 'Ingeniería frontend de alto nivel y seguridad ofensiva. Diseño experiencias web rápidas y pulidas, y sé exactamente cómo romperlas.',
      ctaWork: 'Ver proyectos',
      ctaContact: 'Hablemos',
      scroll: 'Desplázate',
    },
    about: {
      heading: 'Perfil',
      body: [
        'Soy BreaktneSs. Combino dos disciplinas que rara vez van juntas: el detalle obsesivo del frontend moderno y la mentalidad adversaria del pentesting.',
        'En el día a día trabajo con React, TypeScript y WebGL para crear productos que se sienten bien; en el otro lado, audito aplicaciones, resuelvo CTFs y pienso en cada input como un vector.',
      ],
      stats: [
        { value: '5+', label: 'años programando' },
        { value: '40+', label: 'retos CTF resueltos' },
        { value: '∞', label: 'curiosidad' },
      ],
    },
    work: {
      heading: 'Proyectos',
      lead: 'Una selección de trabajo en frontend, full-stack y seguridad.',
      all: 'Todos',
      filters: {
        all: 'Todos',
        frontend: 'Frontend',
        fullstack: 'Full-stack',
        security: 'Seguridad',
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
      lead: '¿Un producto que construir o una app que auditar? Escríbeme.',
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
      kicker: 'Security & Frontend Engineer',
      title: ['I build interfaces', 'that also', 'survive attacks.'],
      lead: 'High-end frontend engineering and offensive security. I craft fast, polished web experiences — and I know exactly how to break them.',
      ctaWork: 'View work',
      ctaContact: "Let's talk",
      scroll: 'Scroll',
    },
    about: {
      heading: 'About',
      body: [
        "I'm BreaktneSs. I bring together two disciplines that rarely meet: the obsessive detail of modern frontend and the adversarial mindset of pentesting.",
        'Day to day I work with React, TypeScript and WebGL to ship products that feel right; on the other side, I audit applications, solve CTFs and treat every input as a vector.',
      ],
      stats: [
        { value: '5+', label: 'years coding' },
        { value: '40+', label: 'CTF challenges solved' },
        { value: '∞', label: 'curiosity' },
      ],
    },
    work: {
      heading: 'Work',
      lead: 'A selection of frontend, full-stack and security projects.',
      all: 'All',
      filters: {
        all: 'All',
        frontend: 'Frontend',
        fullstack: 'Full-stack',
        security: 'Security',
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
      lead: 'A product to build or an app to audit? Drop me a line.',
      cta: 'Send email',
      availability: 'Available for projects',
    },
    footer: {
      built: 'Built with React, Tailwind and Motion',
      rights: 'All rights reserved.',
    },
    theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
    lang: { switchTo: 'Cambiar a español' },
  },
}
