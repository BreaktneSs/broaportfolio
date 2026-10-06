import { useEffect, useMemo, useRef, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'

interface CodeBlockProps {
  code: string
  language?: string
}

const EDGE = 2

export function CodeBlock({ code, language = 'python' }: CodeBlockProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [more, setMore] = useState({ down: false, right: false })

  const html = useMemo(() => {
    const grammar = Prism.languages[language]
    return grammar ? Prism.highlight(code, grammar, language) : code
  }, [code, language])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      setMore({
        down: el.scrollTop + el.clientHeight < el.scrollHeight - EDGE,
        right: el.scrollLeft + el.clientWidth < el.scrollWidth - EDGE,
      })
    }

    // tras el paint del highlight, para medir scrollWidth/Height reales
    const raf = requestAnimationFrame(update)
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('scroll', update)
      ro.disconnect()
    }
  }, [html])

  return (
    <div className="relative">
      <div
        ref={ref}
        className="code-scroll max-h-[48vh] overflow-auto rounded-xl border border-[rgb(var(--hairline)/0.14)] bg-[rgb(var(--glow-a)/0.03)] p-4"
      >
        <pre className="code-block">
          {/* html generado por Prism a partir de contenido propio en content.ts, no de usuarios */}
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </pre>
      </div>

      {more.down && (
        <span className="pointer-events-none absolute right-10 bottom-2 grid size-6 place-items-center rounded-full bg-[rgb(var(--glow-a))] text-black shadow-lg">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      )}
      {more.right && (
        <span className="pointer-events-none absolute top-2 right-2 grid size-6 place-items-center rounded-full bg-[rgb(var(--glow-a))] text-black shadow-lg">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </span>
      )}
    </div>
  )
}
