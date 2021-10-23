import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'

export type PostViewContentProps = {
  content: string
}

const PostViewContent: React.FC<PostViewContentProps> = ({ content }) => {
  return (
    <Fragment>
      <ReactMarkdown components={{ code: CodeBlock }}>{content}</ReactMarkdown>
    </Fragment>
  )
}
export default PostViewContent
