import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'
import { useI18n } from '../providers/i18n'
import { profile } from '../content'

export function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className="shell scroll-mt-24 py-24 md:py-36">
      <Reveal from="scale">
        <div className="glass relative overflow-hidden rounded-[2rem] p-10 text-center md:p-20">
          <div className="animate-aurora absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--glow-a)/0.5),transparent_65%)] blur-3xl" />

          <p className="relative inline-flex items-center gap-2 font-mono text-xs text-emerald-400">
            <span className="size-2 rounded-full bg-emerald-400" />
            {t.contact.availability}
          </p>

          <h2 className="relative mt-5 text-4xl md:text-6xl">
            {t.contact.heading}
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-[rgb(var(--text-body))]">
            {t.contact.lead}
          </p>

          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            <MagneticButton href={`mailto:${profile.email}`}>
              {t.contact.cta}
            </MagneticButton>
            {profile.socials
              .filter((s) => !s.href.startsWith('mailto:'))
              .map((s) => (
                <MagneticButton key={s.label} href={s.href} variant="ghost">
                  {s.label}
                </MagneticButton>
              ))}
          </div>

          <p className="relative mt-8 font-mono text-sm text-[rgb(var(--text-faint))]">
            {profile.email}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
