import { useEffect } from 'react'
import Lenis from 'lenis'

// Instancia única del scroll suave. Se expone así (en vez de contexto) para
// que cualquier overlay (modales, explorador de proyectos...) pueda
// pausarla mientras está abierto — ver useScrollLock.
let lenisInstance: Lenis | null = null

export function pauseSmoothScroll() {
  lenisInstance?.stop()
}

export function resumeSmoothScroll() {
  lenisInstance?.start()
}

/**
 * Scroll suave global con Lenis. Se desactiva si el usuario pide
 * "prefers-reduced-motion". Devuelve nada: es un efecto de montaje.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })
    lenisInstance = lenis

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    // Enlaces internos -> scroll controlado por Lenis
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null
      if (!anchor) return
      const id = anchor.getAttribute('href')!.slice(1)
      const target = document.getElementById(id)
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target, { offset: -80 })
      history.replaceState(null, '', `#${id}`)
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('click', onClick)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
