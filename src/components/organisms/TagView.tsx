import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Title from '../atoms/Title'
import TagsList, { TagsListProps } from '../molecules/TagsList'
import DigestList, { DigestListProps } from './DigestList'

const styles = css`
  .tag_view {
    width: 80%;
    margin: 0 auto;
  }
`

export type TagViewProps = DigestListProps & TagsListProps

const TagView: React.FC<TagViewProps> = ({ tags, posts }) => {
  return (
    <Fragment>
      <div className="tag_view">
        <Title type="medium">{'Filter posts by tags'}</Title>
        <TagsList tags={tags} />
        <DigestList posts={posts} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default TagView
