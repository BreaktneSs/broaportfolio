import { useMemo } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = 'python' }: CodeBlockProps) {
  const html = useMemo(() => {
    const grammar = Prism.languages[language]
    return grammar ? Prism.highlight(code, grammar, language) : code
  }, [code, language])

  return (
    <div
      data-lenis-prevent
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
  )
}
