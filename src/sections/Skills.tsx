import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { useI18n } from '../providers/i18n'
import { skillGroups } from '../content'

export function Skills() {
  const { t, pick } = useI18n()

  return (
    <Section
      id="skills"
      index="05"
      heading={t.skills.heading}
      lead={t.skills.lead}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={pick(group.label)} from="up" delay={i * 0.08}>
            <div className="glass h-full rounded-3xl p-6">
              <h3 className="font-mono text-xs tracking-widest text-[rgb(var(--glow-a))] uppercase">
                {pick(group.label)}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-[rgb(var(--hairline)/0.14)] bg-[rgb(var(--glass)/0.04)] px-2.5 py-1 text-sm text-[rgb(var(--text-body))] transition-colors hover:border-[rgb(var(--glow-a))]/40 hover:text-[rgb(var(--text-strong))]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
