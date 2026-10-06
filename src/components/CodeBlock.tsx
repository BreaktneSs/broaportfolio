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
  const [hasMore, setHasMore] = useState(false)

  const html = useMemo(() => {
    const grammar = Prism.languages[language]
    return grammar ? Prism.highlight(code, grammar, language) : code
  }, [code, language])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      setHasMore(el.scrollTop + el.clientHeight < el.scrollHeight - EDGE)
    }

    // tras el paint del highlight, para medir scrollHeight real
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
        className="code-scroll max-h-[48vh] overflow-x-hidden overflow-y-auto rounded-xl border border-[rgb(var(--hairline)/0.14)] bg-[rgb(var(--glow-a)/0.03)] p-4"
      >
        <pre className="code-block">
          {/* html generado por Prism a partir de contenido propio en content.ts, no de usuarios */}
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </pre>
      </div>

      {hasMore && (
        <span className="glass pointer-events-none absolute right-3 bottom-3 grid size-7 place-items-center rounded-full text-[rgb(var(--glow-a))] shadow-lg">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      )}
    </div>
  )
}
