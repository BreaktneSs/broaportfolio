import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { Section } from '../components/Section'
import { Lightbox, type Slide } from '../components/Lightbox'
import { useI18n } from '../providers/i18n'
import { gallery } from '../content'

// Todas las imágenes de src/assets/gallery/ resueltas a URL con hash.
const assets = import.meta.glob(
  '../assets/gallery/*.{png,jpg,jpeg,webp,avif,svg}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>

const urlFor = (file: string): string | undefined => {
  const hit = Object.entries(assets).find(([path]) => path.endsWith(`/${file}`))
  if (!hit && import.meta.env.DEV) {
    console.warn(`[gallery] no se encontró src/assets/gallery/${file}`)
  }
  return hit?.[1]
}

export function Gallery() {
  const { t, pick } = useI18n()
  const [active, setActive] = useState<number | null>(null)

  const items = useMemo(
    () =>
      gallery
        .map((shot) => ({ shot, url: urlFor(shot.file) }))
        .filter((x): x is { shot: (typeof gallery)[number]; url: string } =>
          Boolean(x.url),
        ),
    [],
  )

  const slides: Slide[] = items.map(({ shot, url }) => ({
    url,
    title: pick(shot.title),
    caption: pick(shot.caption),
    href: shot.href,
  }))

  return (
    <Section
      id="gallery"
      index="04"
      heading={t.gallery.heading}
      lead={t.gallery.lead}
    >
      {items.length === 0 ? (
        <p className="glass rounded-2xl p-6 text-sm text-[rgb(var(--text-faint))]">
          {t.gallery.empty}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map(({ shot, url }, i) => (
            <motion.button
              type="button"
              key={shot.file}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group glass relative block aspect-[4/3] overflow-hidden rounded-2xl text-left"
            >
              <img
                src={url}
                alt={pick(shot.title)}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.85),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-1 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">
                  {pick(shot.title)}
                </p>
                <p className="line-clamp-2 text-xs text-white/70">
                  {pick(shot.caption)}
                </p>
              </div>
              <span className="glass absolute top-3 right-3 grid size-8 place-items-center rounded-full text-white opacity-0 transition-opacity group-hover:opacity-100">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
            </motion.button>
          ))}
        </div>
      )}

      <Lightbox
        slides={slides}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </Section>
  )
}
