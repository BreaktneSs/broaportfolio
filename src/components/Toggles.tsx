import { AnimatePresence, motion } from 'motion/react'
import { useI18n } from '../providers/i18n'
import { useTheme } from '../providers/theme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useI18n()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
      className="glass grid size-9 place-items-center rounded-full text-[rgb(var(--text-strong))] transition-colors hover:border-[rgb(var(--glow-a))]/50"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.svg
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {theme === 'dark' ? (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </>
          ) : (
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          )}
        </motion.svg>
      </AnimatePresence>
    </button>
  )
}

export function LangToggle() {
  const { locale, toggle, t } = useI18n()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.lang.switchTo}
      className="glass relative grid h-9 w-16 place-items-center rounded-full font-mono text-xs font-medium text-[rgb(var(--text-strong))] transition-colors hover:border-[rgb(var(--glow-a))]/50"
    >
      <span className="relative z-10 flex w-full justify-around">
        <span className={locale === 'es' ? '' : 'opacity-35'}>ES</span>
        <span className={locale === 'en' ? '' : 'opacity-35'}>EN</span>
      </span>
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="absolute top-1 bottom-1 w-7 rounded-full bg-[rgb(var(--glow-a))]/20"
        style={{
          left: locale === 'es' ? 4 : 'auto',
          right: locale === 'en' ? 4 : 'auto',
        }}
      />
    </button>
  )
}
