import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useI18n } from '../providers/i18n'
import { useScrollLock } from '../hooks/useScrollLock'

export interface Slide {
  url: string
  title: string
  caption: string
  href?: string
}

interface LightboxProps {
  slides: Slide[]
  index: number | null
  onClose: () => void
  onNavigate: (next: number) => void
}

export function Lightbox({
  slides,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const { t } = useI18n()
  const open = index !== null
  const slide = open ? slides[index] : null

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return
      onNavigate((index + dir + slides.length) % slides.length)
    },
    [index, slides.length, onNavigate],
  )

  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, go, onClose])

  return (
    <AnimatePresence>
      {open && slide && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 p-4 backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={slide.title}
          onClick={onClose}
        >
          <div className="flex w-full max-w-6xl items-center justify-between px-1 pb-3 font-mono text-xs text-white/70">
            <span>
              {(index ?? 0) + 1} / {slides.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.gallery.close}
              className="glass grid size-9 place-items-center rounded-full text-white hover:border-white/40"
            >
              <svg
                width="16"
                height="16"
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

          <motion.figure
            key={slide.url}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex max-h-[78vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="min-h-0 w-full flex-1 object-contain"
            />
            <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 bg-black/50 px-5 py-3">
              <div>
                <p className="text-sm font-medium text-white">{slide.title}</p>
                <p className="text-xs text-white/60">{slide.caption}</p>
              </div>
              {slide.href && (
                <a
                  href={slide.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-brand-200 shrink-0 font-mono text-xs hover:underline"
                >
                  ↗
                </a>
              )}
            </figcaption>
          </motion.figure>

          {slides.length > 1 && (
            <div
              className="mt-4 flex gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={t.gallery.prev}
                className="glass grid size-10 place-items-center rounded-full text-white hover:border-white/40"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={t.gallery.next}
                className="glass grid size-10 place-items-center rounded-full text-white hover:border-white/40"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
