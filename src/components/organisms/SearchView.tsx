import React, { Fragment } from 'react'
import SearchInput from '../molecules/SearchInput'
import TagsList from '../molecules/TagsList'
import PostList, { PostListProps } from './PostList'

export type SearchViewProps = PostListProps & {
  selectedTags?: string[]
  allTags?: string[]
  keyword?: string
}

const SearchView: React.FC<SearchViewProps> = ({
  keyword,
  selectedTags,
  allTags,
  posts,
}) => {
  return (
    <Fragment>
      <SearchInput className="mb-4 lg:w-4/5" value={keyword} />
      <TagsList selectedTags={selectedTags} allTags={allTags} />
      <hr></hr>
      <PostList posts={posts} />
    </Fragment>
  )
}
export default SearchView
