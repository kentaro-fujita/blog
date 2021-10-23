import React, { Fragment } from 'react'
import TagsList, { TagsListProps } from '../molecules/TagsList'

export type SideBarTagsProps = TagsListProps

const SideBarTags: React.FC<SideBarTagsProps> = ({ tags }) => {
  return (
    <Fragment>
      <div className="sidebar_tags">
        <div className="sidebar_tags_title">
          <p>{'Tags'}</p>
        </div>
        <hr></hr>
        <TagsList tags={tags} />
      </div>
    </Fragment>
  )
}
export default SideBarTags
