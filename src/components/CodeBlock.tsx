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
    <pre className="code-block">
      {/* html generado por Prism a partir de contenido propio en content.ts, no de usuarios */}
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </pre>
  )
}
