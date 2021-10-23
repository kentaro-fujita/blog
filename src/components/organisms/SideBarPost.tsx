import React, { Fragment } from 'react'
import SideBarPostItem, {
  SideBarPostItemProps,
} from '../molecules/SideBarPostItem'

export type SideBarPostProps = {
  latestPosts: SideBarPostItemProps[]
}

const SideBarPost: React.FC<SideBarPostProps> = ({ latestPosts }) => {
  return (
    <Fragment>
      <div className="sidebar_posts">
        <div className="sidebar_posts_title">
          <p>{'Latest Posts'}</p>
        </div>
        {latestPosts.map((post, index) => (
          <div key={index}>
            <hr></hr>
            <SideBarPostItem {...post} />
          </div>
        ))}
      </div>
    </Fragment>
  )
}
export default SideBarPost
