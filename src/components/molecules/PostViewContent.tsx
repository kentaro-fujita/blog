import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import React, { Fragment } from 'react'
import Title from '../atoms/Title'

export type PostViewContentProps = {
  content: string
}

const PostViewContent: React.FC<PostViewContentProps> = ({ content }) => {
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
            h1({ children }) {
              return (
                <Title type="h1" className="text-center mb-4">
                  {children}
                </Title>
              )
            },
            h2({ children }) {
              return (
                <Title type="h2" className="mb-2 mt-6">
                  {children}
                </Title>
              )
            },
            h3({ children }) {
              return (
                <Title type="h3" className="mb-2 mt-4">
                  {children}
                </Title>
              )
            },
            table({ children }) {
              return (
                <div className="flex overflow-auto">
                  <table className="table-auto">{children}</table>
                </div>
              )
            },
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
