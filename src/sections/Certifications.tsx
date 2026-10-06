import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { useI18n } from '../providers/i18n'
import { certifications } from '../content'

export function Certifications() {
  const { t, pick } = useI18n()

  return (
    <Section
      id="certifications"
      index="03"
      heading={t.certifications.heading}
      lead={t.certifications.lead}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} from="up" delay={i * 0.06}>
            <div className="glass h-full rounded-2xl p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg text-[rgb(var(--text-strong))]">
                  {cert.name}
                </h3>
                <span className="mt-1 size-2 shrink-0 rounded-full bg-[rgb(var(--glow-a))]" />
              </div>
              <p className="mt-1 font-mono text-xs text-[rgb(var(--text-faint))]">
                {cert.issuer}
              </p>
              {cert.note && (
                <p className="mt-3 text-xs text-[rgb(var(--text-body))]">
                  {pick(cert.note)}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
