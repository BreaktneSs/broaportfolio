import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useI18n } from '../providers/i18n'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { profile } from '../content'
import { LangToggle, ThemeToggle } from './Toggles'

const SECTIONS = ['about', 'experience', 'work', 'skills', 'contact'] as const

export function Navbar() {
  const { t } = useI18n()
  const active = useScrollSpy([...SECTIONS])
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = SECTIONS.map((id) => ({ id, label: t.nav[id] }))

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`shell mt-3 flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'glass-strong shadow-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a
          href="#top"
          className="font-display flex items-center gap-2 text-sm font-bold tracking-tight text-[rgb(var(--text-strong))]"
        >
          <span className="grid size-7 place-items-center rounded-lg bg-[linear-gradient(135deg,rgb(var(--glow-a)),rgb(var(--glow-b)))] font-mono text-[rgb(var(--paper,#fff))] text-white">
            B
          </span>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="relative rounded-full px-3.5 py-1.5 text-sm text-[rgb(var(--text-body))] transition-colors hover:text-[rgb(var(--text-strong))]"
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[rgb(var(--glow-a))]/12"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="glass grid size-9 place-items-center rounded-full text-[rgb(var(--text-strong))] md:hidden"
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
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="shell glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm text-[rgb(var(--text-body))] hover:bg-[rgb(var(--glow-a))]/10 hover:text-[rgb(var(--text-strong))]"
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
