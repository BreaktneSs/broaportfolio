import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { useI18n } from '../providers/i18n'

export function About() {
  const { t } = useI18n()

  return (
    <Section id="about" index="01" heading={t.about.heading}>
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg text-[rgb(var(--text-body))]">
          {t.about.body.map((para, i) => (
            <Reveal key={i} from="up" delay={i * 0.06}>
              <p>{para}</p>
            </Reveal>
          ))}
        </div>

        <ul className="grid grid-cols-3 gap-3 md:grid-cols-1">
          {t.about.stats.map((stat, i) => (
            <Reveal as="li" key={stat.label} from="left" delay={i * 0.08}>
              <div className="glass rounded-2xl p-5">
                <div className="font-display text-3xl text-[rgb(var(--text-strong))]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-[rgb(var(--text-faint))]">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
