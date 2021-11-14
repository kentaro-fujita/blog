import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
// import { Components } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'
import Title from '../atoms/Title'

export type PostViewContentProps = {
  content: string
}

const PostViewContent: React.FC<PostViewContentProps> = ({ content }) => {
  const H1: React.FC = ({ children }) => {
    return (
      <Title type="h1" className="text-center mb-4">
        {children}
      </Title>
    )
  }

  const H2: React.FC = ({ children }) => {
    return (
      <Title type="h2" className="mb-2 mt-6">
        {children}
      </Title>
    )
  }

  const H3: React.FC = ({ children }) => {
    return (
      <Title type="h3" className="mb-2 mt-4">
        {children}
      </Title>
    )
  }

  // const CodeBlock: Components<code> = ({
  //   inline,
  //   className,
  //   children,
  //   ...props
  // }) => {
  //   const match = /language-(\w+)/.exec(className || '')
  //   return !inline && match ? (
  //     <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div">
  //       {String(children).replace(/\n$/, '')}
  //     </SyntaxHighlighter>
  //   ) : (
  //     <code className={className} {...props}>
  //       {children}
  //     </code>
  //   )
  // }

  const Table: React.FC = ({ children }) => {
    return (
      <div className="flex overflow-auto">
        <table className="table-auto">{children}</table>
      </div>
    )
  }

  return (
    <Fragment>
      <div className="markdown text-gray-500 dark:text-gray-300 mb-10">
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
            h1: H1,
            h2: H2,
            h3: H3,
            table: Table,
          }}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </Fragment>
  )
}
export default PostViewContent
