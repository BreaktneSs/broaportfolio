import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { useI18n } from '../providers/i18n'
import { experience } from '../content'

export function Experience() {
  const { t, pick } = useI18n()

  return (
    <Section
      id="experience"
      index="02"
      heading={t.experience.heading}
      lead={t.experience.lead}
    >
      <ol className="space-y-4">
        {experience.map((entry, i) => (
          <Reveal as="li" key={entry.company} from="up" delay={i * 0.08}>
            <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-8">
              <div
                aria-hidden
                className="absolute -top-px right-8 left-8 h-px opacity-60"
                style={{
                  background:
                    'linear-gradient(90deg,rgb(var(--glow-a)),rgb(var(--glow-b)))',
                }}
              />

              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl text-[rgb(var(--text-strong))]">
                    {pick(entry.role)}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-[rgb(var(--text-body))]">
                    {entry.companyUrl ? (
                      <a
                        href={entry.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="font-medium text-[rgb(var(--text-strong))] hover:text-[rgb(var(--glow-a))]"
                      >
                        {entry.company}
                      </a>
                    ) : (
                      <span className="font-medium text-[rgb(var(--text-strong))]">
                        {entry.company}
                      </span>
                    )}
                  </p>
                </div>
                <span className="glass shrink-0 rounded-full px-3 py-1 font-mono text-xs text-[rgb(var(--text-faint))]">
                  {pick(entry.period)}
                </span>
              </div>

              <p className="mt-4 text-sm text-[rgb(var(--text-body))]">
                {pick(entry.summary)}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-[rgb(var(--hairline)/0.15)] px-2 py-0.5 font-mono text-[11px] text-[rgb(var(--text-faint))]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
