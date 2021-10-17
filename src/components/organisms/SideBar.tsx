import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import SideBarPost, { SideBarPostProps } from './SideBarPost'
import SideBarTags, { SideBarTagsProps } from './SideBarTags'

const styles = css`
  .sidebar {
    width: 20%;
    float: right;
  }
  @media screen and (max-width: 640px) {
    .sidebar {
      display: none;
    }
  }
`

export type SideBarProps = SideBarPostProps & SideBarTagsProps

const SideBar: React.FC<SideBarProps> = ({ latestPosts, tags }) => {
  return (
    <Fragment>
      <div className="sidebar">
        <SideBarPost latestPosts={latestPosts} />
        <SideBarTags tags={tags} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default SideBar
