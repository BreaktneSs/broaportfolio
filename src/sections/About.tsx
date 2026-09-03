import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { useI18n } from '../providers/i18n'
import { focusAreas } from '../content'

export function About() {
  const { t, pick } = useI18n()

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

      <div className="mt-16">
        <Reveal from="up">
          <h3 className="font-mono text-xs tracking-widest text-[rgb(var(--glow-a))] uppercase">
            {t.about.focusHeading}
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => (
            <Reveal key={pick(area.title)} from="up" delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[rgb(var(--glow-a))]" />
                  <h4 className="font-display text-base text-[rgb(var(--text-strong))]">
                    {pick(area.title)}
                  </h4>
                </div>
                <p className="text-sm text-[rgb(var(--text-body))]">
                  {pick(area.body)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
