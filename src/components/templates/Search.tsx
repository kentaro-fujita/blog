import React from 'react'
import SearchView, { SearchViewProps } from '../organisms/SearchView'

export type SearchTemplateProps = SearchViewProps

const SearchTemplate: React.FC<SearchTemplateProps> = ({ ...args }) => {
  return <SearchView {...args} />
}

export default SearchTemplate
