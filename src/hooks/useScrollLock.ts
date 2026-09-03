import { useEffect } from 'react'
import { pauseSmoothScroll, resumeSmoothScroll } from './useSmoothScroll'

// Contador global: puede haber más de un overlay bloqueando el scroll a la
// vez (p. ej. el lightbox abierto encima del explorador de proyectos), así
// que solo el primer lock pausa y solo el último libera.
let lockCount = 0
let prevBodyOverflow = ''
let prevHtmlOverflow = ''

/**
 * Bloquea el scroll de fondo mientras `active` es true — usado por los
 * overlays (explorador de proyectos, lightbox, tarjeta de perfil...).
 * No basta con `overflow: hidden`: Lenis controla el scroll por su cuenta
 * (wheel/touch), así que también hay que pausarlo explícitamente.
 */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return

    if (lockCount === 0) {
      pauseSmoothScroll()
      prevBodyOverflow = document.body.style.overflow
      prevHtmlOverflow = document.documentElement.style.overflow
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    }
    lockCount++

    return () => {
      lockCount--
      if (lockCount === 0) {
        resumeSmoothScroll()
        document.body.style.overflow = prevBodyOverflow
        document.documentElement.style.overflow = prevHtmlOverflow
      }
    }
  }, [active])
}
