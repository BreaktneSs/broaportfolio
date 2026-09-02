import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  index: string
  heading: string
  lead?: string
  children: ReactNode
}

export function Section({ id, index, heading, lead, children }: SectionProps) {
  return (
    <section id={id} className="shell scroll-mt-24 py-24 md:py-32">
      <Reveal from="up">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl">{heading}</h2>
          <span className="font-mono text-xs text-[rgb(var(--text-faint))]">
            {index}
          </span>
        </div>
        {lead && (
          <p className="mt-3 max-w-xl text-[rgb(var(--text-body))]">{lead}</p>
        )}
        <div className="mt-6 h-px w-full bg-[linear-gradient(90deg,rgb(var(--glow-a)/0.6),transparent)]" />
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  )
}
