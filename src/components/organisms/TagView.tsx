import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Title from '../atoms/Title'
import TagsList, { TagsListProps } from '../molecules/TagsList'
import DigestList, { DigestListProps } from './DigestList'
import SideBar, { SideBarProps } from './SideBar'

const styles = css`
  .tag_view {
    width: 80%;
    margin: 0 auto;
  }
  .tag_view_main {
    width: 80%;
    float: left;
  }
`

export type TagViewProps = DigestListProps &
  Omit<TagsListProps, 'tags'> &
  SideBarProps

const TagView: React.FC<TagViewProps> = ({ allTags, posts, latestPosts }) => {
  return (
    <Fragment>
      <div className="tag_view">
        <div className="tag_view_main">
          <Title type="medium">{'Filter posts by tags'}</Title>
          <TagsList tags={allTags} />
          <hr></hr>
          <DigestList posts={posts} />
        </div>
        <SideBar latestPosts={latestPosts} allTags={allTags} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default TagView
