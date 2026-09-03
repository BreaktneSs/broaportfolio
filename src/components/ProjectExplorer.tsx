import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import { useI18n } from '../providers/i18n'
import { gallery, type Project } from '../content'
import { resolveGalleryUrl } from '../lib/galleryAssets'
import { Lightbox, type Slide } from './Lightbox'

type Folder = 'description' | 'stack' | 'gallery' | 'references'
const BASE_FOLDERS: Folder[] = ['description', 'stack', 'gallery']

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M2.5 6.2A2.2 2.2 0 0 1 4.7 4h4.4c.5 0 1 .2 1.4.55L11.6 5.6h7.7a2.2 2.2 0 0 1 2.2 2.2v9.7a2.2 2.2 0 0 1-2.2 2.2H4.7a2.2 2.2 0 0 1-2.2-2.2V6.2Z"
        fill="currentColor"
      />
      <path d="M2.5 8.6h19" stroke="rgb(0 0 0 / 0.12)" strokeWidth="1" />
    </svg>
  )
}

function FileIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 2.5h7l4.5 4.5V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5.5 20V4A1.5 1.5 0 0 1 7 2.5Z" />
      <path d="M14 2.5V7h4.5" />
    </svg>
  )
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  )
}

const slide: Variants = {
  enter: (dir: 1 | -1) => ({ x: dir > 0 ? 36 : -36, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: 1 | -1) => ({ x: dir > 0 ? -36 : 36, opacity: 0 }),
}
const slideTransition = { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }

interface ProjectExplorerProps {
  project: Project | null
  onClose: () => void
}

export function ProjectExplorer({ project, onClose }: ProjectExplorerProps) {
  const { t, pick } = useI18n()
  const [activeFolder, setActiveFolder] = useState<Folder | null>(null)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const open = project !== null

  // vuelve a la vista de carpetas cada vez que se abre un proyecto nuevo
  useEffect(() => {
    if (project) setActiveFolder(null)
  }, [project])

  const openFolder = (f: Folder) => {
    setDirection(1)
    setActiveFolder(f)
  }
  const goBack = () => {
    setDirection(-1)
    setActiveFolder(null)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (lightboxIndex !== null) return // el Lightbox gestiona su propio Esc
      if (activeFolder !== null) goBack()
      else onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose, lightboxIndex, activeFolder])

  const folders = useMemo<Folder[]>(
    () =>
      project && project.links.length > 0
        ? [...BASE_FOLDERS, 'references']
        : BASE_FOLDERS,
    [project],
  )

  const shots = useMemo(
    () =>
      project
        ? gallery
            .filter((shot) => shot.project === project.slug)
            .map((shot) => ({ shot, url: resolveGalleryUrl(shot.file) }))
            .filter((x): x is { shot: (typeof gallery)[number]; url: string } =>
              Boolean(x.url),
            )
        : [],
    [project],
  )

  const slides: Slide[] = shots.map(({ shot, url }) => ({
    url,
    title: pick(shot.title),
    caption: pick(shot.caption),
    href: shot.href,
  }))

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4 backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          onClick={onClose}
        >
          <motion.div
            layout
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* barra de título estilo Finder — el semáforo es funcional */}
            <div className="flex shrink-0 items-center gap-3 border-b border-[rgb(var(--hairline)/0.14)] px-4 py-3">
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t.gallery.close}
                  className="size-3 rounded-full bg-[#ff5f57] transition-transform hover:scale-110"
                />
                <span
                  aria-hidden
                  className="size-3 rounded-full bg-[#febc2e]"
                />
                <span
                  aria-hidden
                  className="size-3 rounded-full bg-[#28c840]"
                />
              </div>
              <span className="truncate font-mono text-xs text-[rgb(var(--text-faint))]">
                {project.title}
                {activeFolder && (
                  <>
                    {' '}
                    <span className="opacity-50">/</span>{' '}
                    {t.explorer.folders[activeFolder]}
                  </>
                )}
              </span>
            </div>

            <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                {activeFolder === null ? (
                  <motion.div
                    key="home"
                    custom={direction}
                    variants={slide}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={slideTransition}
                    className="flex flex-wrap items-start justify-center gap-4 p-8 sm:gap-8 sm:p-12"
                  >
                    {folders.map((f) => {
                      const count =
                        f === 'gallery'
                          ? shots.length
                          : f === 'references'
                            ? project.links.length
                            : 0
                      return (
                        <button
                          key={f}
                          type="button"
                          onClick={() => openFolder(f)}
                          className="group flex w-24 flex-col items-center gap-2 rounded-2xl p-3 text-center transition-colors hover:bg-[rgb(var(--glow-a)/0.1)]"
                        >
                          <span className="relative">
                            <FolderIcon className="size-14 text-[rgb(var(--glow-a))] drop-shadow-[0_4px_10px_rgb(var(--glow-a)/0.35)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-105" />
                            {count > 0 && (
                              <span className="absolute -top-1 -right-1 grid size-4 place-items-center rounded-full bg-[rgb(var(--glow-a))] font-mono text-[9px] font-bold text-black">
                                {count}
                              </span>
                            )}
                          </span>
                          <span className="text-xs text-[rgb(var(--text-body))] group-hover:text-[rgb(var(--text-strong))]">
                            {t.explorer.folders[f]}
                          </span>
                        </button>
                      )
                    })}
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeFolder}
                    custom={direction}
                    variants={slide}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={slideTransition}
                    className="p-6"
                  >
                    <button
                      type="button"
                      onClick={goBack}
                      className="mb-5 inline-flex items-center gap-1.5 text-sm text-[rgb(var(--text-faint))] hover:text-[rgb(var(--text-strong))]"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                      {t.explorer.back}
                    </button>

                    {activeFolder === 'description' && (
                      <div>
                        <div className="mb-4 flex items-center gap-2 font-mono text-xs text-[rgb(var(--text-faint))]">
                          <FileIcon className="size-4" />
                          descripcion.txt
                        </div>
                        <p className="text-sm leading-relaxed text-[rgb(var(--text-body))]">
                          {pick(project.summary)}
                        </p>
                      </div>
                    )}

                    {activeFolder === 'stack' && (
                      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                        {project.stack.map((tech) => (
                          <div
                            key={tech}
                            className="flex flex-col items-center gap-2 rounded-xl border border-transparent p-3 text-center hover:border-[rgb(var(--hairline)/0.16)] hover:bg-[rgb(var(--glow-a)/0.06)]"
                          >
                            <FileIcon className="text-[rgb(var(--glow-a))]" />
                            <span className="text-[11px] text-[rgb(var(--text-body))]">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeFolder === 'gallery' &&
                      (shots.length === 0 ? (
                        <p className="text-sm text-[rgb(var(--text-faint))]">
                          {t.gallery.empty}
                        </p>
                      ) : (
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {shots.map(({ shot, url }, i) => (
                            <button
                              key={shot.file}
                              type="button"
                              onClick={() => setLightboxIndex(i)}
                              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-[rgb(var(--hairline)/0.14)]"
                            >
                              <img
                                src={url}
                                alt={pick(shot.title)}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.05]"
                              />
                            </button>
                          ))}
                        </div>
                      ))}

                    {activeFolder === 'references' && (
                      <ul className="space-y-2">
                        {project.links.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="group/link flex items-center gap-3 rounded-xl border border-[rgb(var(--hairline)/0.14)] p-3 text-sm text-[rgb(var(--text-body))] hover:border-[rgb(var(--glow-a))]/40 hover:text-[rgb(var(--text-strong))]"
                            >
                              <LinkIcon className="shrink-0 text-[rgb(var(--glow-a))]" />
                              <span className="flex-1 truncate">
                                {link.label}
                              </span>
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                className="shrink-0 opacity-50 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:opacity-100"
                              >
                                <path d="M7 17L17 7M8 7h9v9" />
                              </svg>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <div onClick={(e) => e.stopPropagation()}>
            <Lightbox
              slides={slides}
              index={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
              onNavigate={setLightboxIndex}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
