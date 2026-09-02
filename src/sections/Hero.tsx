import { lazy, Suspense, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { useI18n } from '../providers/i18n'
import { profile } from '../content'
import { MagneticButton } from '../components/MagneticButton'

const Background3D = lazy(() => import('../components/Background3D'))

export function Hero() {
  const { t, pick } = useI18n()
  const reduce = useReducedMotion()
  const [show3D, setShow3D] = useState(false)

  useEffect(() => {
    // solo cargamos WebGL en pantallas grandes, con puntero fino y sin reduce-motion
    const ok =
      !reduce &&
      window.matchMedia('(min-width: 768px) and (pointer: fine)').matches
    if (ok) {
      const id = window.setTimeout(() => setShow3D(true), 400)
      return () => window.clearTimeout(id)
    }
  }, [reduce])

  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16"
    >
      {show3D && (
        <div className="absolute inset-0 -z-[1] [mask-image:radial-gradient(ellipse_45%_55%_at_78%_50%,#000,transparent_75%)] opacity-45 md:opacity-60 dark:opacity-70">
          <Suspense fallback={null}>
            <Background3D />
          </Suspense>
        </div>
      )}

      <div className="shell">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs text-[rgb(var(--text-body))]"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          {t.hero.kicker}
        </motion.p>

        <h1 className="mt-6 text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl">
          {t.hero.title.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`block ${i === t.hero.title.length - 1 ? 'text-gradient' : ''}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 max-w-xl text-lg text-[rgb(var(--text-body))]"
        >
          {t.hero.lead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticButton href="#work">{t.hero.ctaWork}</MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            {t.hero.ctaContact}
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-14 flex items-center gap-5 font-mono text-xs text-[rgb(var(--text-faint))]"
        >
          <span>{pick(profile.location)}</span>
          <span className="h-3 w-px bg-current opacity-40" />
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-[rgb(var(--text-strong))]"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-widest text-[rgb(var(--text-faint))] uppercase md:flex">
        {t.hero.scroll}
        <span className="h-8 w-px animate-pulse bg-[linear-gradient(rgb(var(--glow-a)),transparent)]" />
      </div>
    </section>
  )
}
