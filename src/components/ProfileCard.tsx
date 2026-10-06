import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useI18n } from '../providers/i18n'
import { profile } from '../content'
import { useScrollLock } from '../hooks/useScrollLock'

interface ProfileCardProps {
  open: boolean
  onClose: () => void
}

export function ProfileCard({ open, onClose }: ProfileCardProps) {
  const { t, pick } = useI18n()
  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={profile.name}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            data-lenis-prevent
            className="glass-strong relative max-h-[85vh] w-full max-w-md overflow-y-auto rounded-3xl p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={t.gallery.close}
              className="absolute top-4 right-4 grid size-8 place-items-center rounded-full text-[rgb(var(--text-faint))] hover:bg-[rgb(var(--glow-a)/0.12)] hover:text-[rgb(var(--text-strong))]"
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

            <div className="flex items-center gap-4">
              <span className="font-display grid size-14 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,rgb(var(--glow-a)),rgb(var(--glow-b)))] text-2xl font-bold text-white">
                B
              </span>
              <div>
                <h3 className="font-display text-xl text-[rgb(var(--text-strong))]">
                  {profile.name}
                </h3>
                <p className="text-sm text-[rgb(var(--text-faint))]">
                  {pick(profile.role)}
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="glass rounded-2xl p-4">
                <div className="font-display text-2xl text-[rgb(var(--text-strong))]">
                  3+
                </div>
                <div className="mt-1 text-xs text-[rgb(var(--text-faint))]">
                  {t.profileCard.experience}
                </div>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="font-display text-2xl text-[rgb(var(--text-strong))]">
                  {profile.education.year}
                </div>
                <div className="mt-1 text-xs text-[rgb(var(--text-faint))]">
                  {t.profileCard.graduated}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-mono text-xs tracking-widest text-[rgb(var(--glow-a))] uppercase">
                {t.profileCard.education}
              </h4>
              <p className="mt-2 text-sm text-[rgb(var(--text-body))]">
                {pick(profile.education.degree)}
                <br />
                <span className="text-[rgb(var(--text-faint))]">
                  {profile.education.school}
                </span>
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-mono text-xs tracking-widest text-[rgb(var(--glow-a))] uppercase">
                {t.profileCard.interests}
              </h4>
              <ul className="mt-2 space-y-1.5">
                {profile.interests.map((interest) => (
                  <li
                    key={pick(interest)}
                    className="flex items-start gap-2 text-sm text-[rgb(var(--text-body))]"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-[rgb(var(--glow-a))]" />
                    {pick(interest)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-[rgb(var(--hairline)/0.14)] pt-5">
              <h4 className="font-mono text-xs tracking-widest text-[rgb(var(--glow-a))] uppercase">
                {t.profileCard.contact}
              </h4>
              <div className="mt-2 flex flex-wrap gap-4">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer noopener"
                    className="text-sm font-medium text-[rgb(var(--text-strong))] hover:text-[rgb(var(--glow-a))]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
