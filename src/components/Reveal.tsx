import { motion, useReducedMotion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** retardo en segundos */
  delay?: number
  /** eje de entrada */
  from?: 'up' | 'down' | 'left' | 'right' | 'scale'
  as?: 'div' | 'li' | 'span' | 'section'
  className?: string
}

const OFFSET = 28

export function Reveal({
  children,
  delay = 0,
  from = 'up',
  as = 'div',
  className,
}: RevealProps) {
  const reduce = useReducedMotion()

  const hidden = (() => {
    if (reduce) return { opacity: 0 }
    switch (from) {
      case 'down':
        return { opacity: 0, y: -OFFSET }
      case 'left':
        return { opacity: 0, x: OFFSET }
      case 'right':
        return { opacity: 0, x: -OFFSET }
      case 'scale':
        return { opacity: 0, scale: 0.92 }
      default:
        return { opacity: 0, y: OFFSET }
    }
  })()

  const variants: Variants = {
    hidden,
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
    >
      {children}
    </MotionTag>
  )
}
