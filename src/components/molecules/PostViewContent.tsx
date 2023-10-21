import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import React, { Fragment } from 'react'
import Title from '../atoms/Title'
import CodeBlock from './CodeBlock'

export type PostViewContentProps = {
  content: string
}

const PostViewContent: React.FC<PostViewContentProps> = ({ content }) => {
  return (
    <Fragment>
      <div className="markdown text-gray-500 dark:text-gray-300 mt-10 mb-10 ml-5 mr-5">
        <ReactMarkdown
          components={{
            code({ className, children, ...props }) {
              return (
                <CodeBlock className={className} {...props}>
                  {children}
                </CodeBlock>
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
