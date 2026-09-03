import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useI18n } from '../providers/i18n'
import { gallery, type Project } from '../content'
import { resolveGalleryUrl } from '../lib/galleryAssets'
import { Lightbox, type Slide } from './Lightbox'

type Folder = 'description' | 'stack' | 'gallery'
const FOLDERS: Folder[] = ['description', 'stack', 'gallery']

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z" />
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

interface ProjectExplorerProps {
  project: Project | null
  onClose: () => void
}

export function ProjectExplorer({ project, onClose }: ProjectExplorerProps) {
  const { t, pick } = useI18n()
  const [folder, setFolder] = useState<Folder>('description')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const open = project !== null

  // reset a la carpeta de descripción cada vez que se abre un proyecto nuevo
  useEffect(() => {
    if (project) setFolder('description')
  }, [project])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxIndex === null) onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose, lightboxIndex])

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
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* barra de título estilo Finder */}
            <div className="flex shrink-0 items-center gap-3 border-b border-[rgb(var(--hairline)/0.14)] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="size-3 rounded-full bg-[#ff5f57]" />
                <span className="size-3 rounded-full bg-[#febc2e]" />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t.gallery.close}
                  className="size-3 rounded-full bg-[#28c840]"
                />
              </div>
              <span className="truncate font-mono text-xs text-[rgb(var(--text-faint))]">
                {project.title}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.gallery.close}
                className="ml-auto grid size-7 shrink-0 place-items-center rounded-full text-[rgb(var(--text-faint))] hover:bg-[rgb(var(--glow-a)/0.12)] hover:text-[rgb(var(--text-strong))]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col sm:flex-row">
              {/* sidebar de carpetas */}
              <nav className="flex shrink-0 gap-1 overflow-x-auto border-b border-[rgb(var(--hairline)/0.14)] p-2 sm:w-44 sm:flex-col sm:border-r sm:border-b-0 sm:p-3">
                {FOLDERS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFolder(f)}
                    className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm whitespace-nowrap transition-colors ${
                      folder === f
                        ? 'bg-[rgb(var(--glow-a)/0.14)] text-[rgb(var(--text-strong))]'
                        : 'text-[rgb(var(--text-faint))] hover:text-[rgb(var(--text-body))]'
                    }`}
                  >
                    <FolderIcon
                      className={
                        folder === f
                          ? 'text-[rgb(var(--glow-a))]'
                          : 'opacity-60'
                      }
                    />
                    {t.explorer.folders[f]}
                    {f === 'gallery' && shots.length > 0 && (
                      <span className="ml-auto font-mono text-[10px] text-[rgb(var(--text-faint))]">
                        {shots.length}
                      </span>
                    )}
                  </button>
                ))}
              </nav>

              {/* contenido */}
              <div className="min-h-0 flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  {folder === 'description' && (
                    <motion.div
                      key="description"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div className="mb-4 flex items-center gap-2 font-mono text-xs text-[rgb(var(--text-faint))]">
                        <FileIcon className="size-4" />
                        descripcion.txt
                      </div>
                      <p className="text-sm leading-relaxed text-[rgb(var(--text-body))]">
                        {pick(project.summary)}
                      </p>
                    </motion.div>
                  )}

                  {folder === 'stack' && (
                    <motion.div
                      key="stack"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="grid grid-cols-3 gap-3 sm:grid-cols-4"
                    >
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
                    </motion.div>
                  )}

                  {folder === 'gallery' && (
                    <motion.div
                      key="gallery"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      {shots.length === 0 ? (
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
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
