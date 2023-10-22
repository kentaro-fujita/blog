import React, { Fragment, HTMLAttributes, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'
import CopyToClipboard from 'react-copy-to-clipboard'
import Icon from '../atoms/Icon'

export type CodeBlockProps = HTMLAttributes<HTMLElement>

const CodeBlock: React.FC<CodeBlockProps> = ({
  className,
  children,
  ...props
}) => {
  const [isShown, setIsShown] = useState<boolean>(false)
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [language, filename] = (className || '').split(':')

  const copyHandler = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return !className ? (
    <span className="text-dracula-light bg-dracula-dark p-1">
      <code {...props}>{children}</code>
    </span>
  ) : (
    <div
      className="relative"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {filename && (
        <div className="bg-gray-800 px-3 py-2">
          <span>{filename}</span>
        </div>
      )}
      <SyntaxHighlighter
        style={dracula}
        language={/language-(\w+)/.exec(language)?.[1]}
        PreTag="div"
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
      {isShown && (
        <CopyToClipboard text={children} onCopy={copyHandler}>
          <div className="absolute right-2 top-2 z-10 hover:cursor-pointer">
            {isCopied && <span className="text-white">Copied!</span>}
            <Icon className="far fa-copy" />
          </div>
        </CopyToClipboard>
      )}
    </div>
  )
}

export default CodeBlock
