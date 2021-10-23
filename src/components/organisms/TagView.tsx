import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import TagsList from '../molecules/TagsList'
import PostList, { PostListProps } from './PostList'
import SideBar, { SideBarProps } from './SideBar'

export type TagViewProps = PostListProps &
  SideBarProps & {
    selectedTags: string[]
  }

const TagView: React.FC<TagViewProps> = ({
  selectedTags,
  tags,
  posts,
  latestPosts,
}) => {
  return (
    <Fragment>
      <div className="tag_view">
        <div className="tag_view_main">
          <h2>Filter posts by</h2>
          <TagsList tags={selectedTags} />
          <hr></hr>
          <PostList posts={posts} />
        </div>
        {/* <SideBar latestPosts={latestPosts} tags={tags} /> */}
      </div>
    </Fragment>
  )
}
export default TagView
