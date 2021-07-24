import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Text from '../atoms/Text'
import TagsList, { TagsListProps } from '../molecules/TagsList'

const styles = css`
  .sidebar_tags {
    padding: 1rem 0;
  }
  .sidebar_tags_title {
    text-align: center;
  }
`

export type SideBarTagsProps = Omit<TagsListProps, 'tags'> & {
  allTags: string[]
}

const SideBarTags: React.FC<SideBarTagsProps> = ({ allTags, ...props }) => {
  return (
    <Fragment>
      <div className="sidebar_tags">
        <div className="sidebar_tags_title">
          <Text>{'Tags'}</Text>
        </div>
        <hr></hr>
        <TagsList tags={allTags} {...props} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default SideBarTags
