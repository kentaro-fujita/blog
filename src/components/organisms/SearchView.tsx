import React, { Fragment } from 'react'
import TagsList from '../molecules/TagsList'
import PostList, { PostListProps } from './PostList'

export type SearchViewProps = PostListProps & {
  selectedTags?: string[]
  allTags?: string[]
  keyword?: string
}

const SearchView: React.FC<SearchViewProps> = ({
  selectedTags,
  allTags,
  posts,
}) => {
  return (
    <Fragment>
      <TagsList selectedTags={selectedTags} allTags={allTags} />
      <hr></hr>
      <PostList posts={posts} />
    </Fragment>
  )
}
export default SearchView
