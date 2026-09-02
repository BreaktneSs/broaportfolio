import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

/**
 * Halo que sigue al cursor. Solo en dispositivos con puntero fino.
 */
export function GlowCursor() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 350, damping: 28, mass: 0.3 })

  useEffect(() => {
    const mq = window.matchMedia(
      '(pointer: fine) and (prefers-reduced-motion: no-preference)',
    )
    if (!mq.matches) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-[55] hidden md:block"
    >
      <div className="size-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--glow-a)/0.10),transparent_60%)]" />
    </motion.div>
  )
}
