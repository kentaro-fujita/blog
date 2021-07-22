import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import ReactMarkdown from 'react-markdown'
import { Post } from '../../models'
import Text from '../atoms/Text'
import Title from '../atoms/Title'

const styles = css`
  /* no style */
`

export type PostViewContentProps = {
  content: string
}

const PostViewContent: React.FC<PostViewContentProps> = ({ content }) => {
  return (
    <Fragment>
      <ReactMarkdown>{content}</ReactMarkdown>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default PostViewContent
