import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import { HeadingComponent } from 'react-markdown/src/ast-to-react'
import Title from '../atoms/Title'
import CodeBlock from './CodeBlock'

export type PostViewContentProps = {
  content: string
}

const PostViewContent: React.FC<PostViewContentProps> = ({ content }) => {
  const H1: HeadingComponent = ({ children }) => {
    return (
      <Fragment>
        <Title type="h1" className="text-center mb-4">
          {children}
        </Title>
      </Fragment>
    )
  }

  const H2: HeadingComponent = ({ children }) => {
    return (
      <Fragment>
        <Title type="h2" className="mb-2 mt-2">
          {children}
        </Title>
      </Fragment>
    )
  }

  const H3: HeadingComponent = ({ children }) => {
    return (
      <Fragment>
        <Title type="h3" className="mb-2 mt-2">
          {children}
        </Title>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <div className="text-gray-500 dark:text-gray-300">
        <ReactMarkdown components={{ code: CodeBlock, h1: H1, h2: H2, h3: H3 }}>
          {content}
        </ReactMarkdown>
      </div>
    </Fragment>
  )
}
export default PostViewContent
