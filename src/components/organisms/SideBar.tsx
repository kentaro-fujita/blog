import React, { Fragment } from 'react'
import SideBarPost, { SideBarPostProps } from './SideBarPost'
import SideBarTags, { SideBarTagsProps } from './SideBarTags'

export type SideBarProps = SideBarPostProps & SideBarTagsProps

const SideBar: React.FC<SideBarProps> = ({ latestPosts, tags }) => {
  return (
    <Fragment>
      <div className="sidebar">
        <SideBarPost latestPosts={latestPosts} />
        <SideBarTags tags={tags} />
      </div>
    </Fragment>
  )
}
export default SideBar
