import React, { HTMLAttributes } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'

export type CodeBlockProps = HTMLAttributes<HTMLElement>

const CodeBlock: React.FC<CodeBlockProps> = ({
  className,
  children,
  ...props
}) => {
  const language = /language-(\w+)/.exec(className || '')?.[1]

  return !className ? (
    <code {...props}>{children}</code>
  ) : (
    <SyntaxHighlighter style={dracula} language={language} PreTag="div">
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
