import { useRef, type ReactNode } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'motion/react'

interface MagneticButtonProps {
  children: ReactNode
  href: string
  variant?: 'solid' | 'ghost'
  className?: string
}

/**
 * Botón/enlace con efecto "magnético": se acerca ligeramente al cursor.
 */
export function MagneticButton({
  children,
  href,
  variant = 'solid',
  className = '',
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduce = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    'group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors will-change-transform'
  const styles =
    variant === 'solid'
      ? 'text-white bg-[rgb(var(--glow-a))] hover:bg-[rgb(var(--glow-a))]/90 shadow-[0_8px_30px_-8px_rgb(var(--glow-a)/0.7)]'
      : 'glass text-[rgb(var(--text-strong))] hover:border-[rgb(var(--glow-a))]/50'

  const external = href.startsWith('http') || href.startsWith('mailto:')

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  )
}
