import { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react'
import { useI18n } from '../providers/i18n'
import type { Project } from '../content'

export function ProjectCard({ project }: { project: Project }) {
  const { pick, t } = useI18n()
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  // spotlight que sigue al cursor
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  // tilt 3D
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = e.clientX - r.left
    const py = e.clientY - r.top
    mx.set(px)
    my.set(py)
    if (!reduce) {
      ry.set((px / r.width - 0.5) * 10)
      rx.set((py / r.height - 0.5) * -10)
    }
  }

  const onLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${mx}px ${my}px, rgb(var(--glow-a)/0.18), transparent 70%)`

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-colors hover:border-[rgb(var(--glow-a))]/40"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      <div
        aria-hidden
        className="absolute -top-px right-6 left-6 h-px opacity-60"
        style={{ background: project.accent }}
      />

      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl text-[rgb(var(--text-strong))]">
            {project.title}
          </h3>
          <p className="mt-0.5 font-mono text-xs text-[rgb(var(--text-faint))]">
            {t.work.filters[project.kind]} · {project.year}
          </p>
        </div>
        <span
          className="mt-1 size-2.5 shrink-0 rounded-full"
          style={{ background: project.accent }}
        />
      </header>

      <p className="mt-4 flex-1 text-sm text-[rgb(var(--text-body))]">
        {pick(project.summary)}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded-md border border-[rgb(var(--hairline)/0.15)] px-2 py-0.5 font-mono text-[11px] text-[rgb(var(--text-faint))]"
          >
            {s}
          </li>
        ))}
      </ul>

      <footer className="mt-5 flex flex-wrap gap-4">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer noopener"
            className="group/link inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--text-strong))]"
          >
            {link.label}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            >
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </a>
        ))}
      </footer>
    </motion.article>
  )
}
