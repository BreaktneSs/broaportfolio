import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Section } from '../components/Section'
import { useI18n } from '../providers/i18n'
import { projects, type Project } from '../content'
import { ProjectCard } from '../components/ProjectCard'

type Filter = Project['kind'] | 'all'
const FILTERS: Filter[] = ['all', 'dev', 'devsecops', 'offensive', 'research']

export function Work() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<Filter>('all')

  const visible = useMemo(
    () =>
      filter === 'all' ? projects : projects.filter((p) => p.kind === filter),
    [filter],
  )

  return (
    <Section id="work" index="03" heading={t.work.heading} lead={t.work.lead}>
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
              filter === f
                ? 'text-[rgb(var(--text-strong))]'
                : 'text-[rgb(var(--text-faint))] hover:text-[rgb(var(--text-body))]'
            }`}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="glass absolute inset-0 -z-10 rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            {t.work.filters[f]}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
