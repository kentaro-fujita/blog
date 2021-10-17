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

export type SideBarTagsProps = TagsListProps

const SideBarTags: React.FC<SideBarTagsProps> = ({ tags }) => {
  return (
    <Fragment>
      <div className="sidebar_tags">
        <div className="sidebar_tags_title">
          <Text>{'Tags'}</Text>
        </div>
        <hr></hr>
        <TagsList tags={tags} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default SideBarTags
