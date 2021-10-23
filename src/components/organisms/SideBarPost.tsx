import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Text from '../atoms/Text'
import SideBarPostItem, {
  SideBarPostItemProps,
} from '../molecules/SideBarPostItem'

const styles = css`
  .sidebar_posts {
    padding: 1rem 0;
  }
  .sidebar_posts_title {
    text-align: center;
  }
`

export type SideBarPostProps = {
  latestPosts: SideBarPostItemProps[]
}

const SideBarPost: React.FC<SideBarPostProps> = ({ latestPosts }) => {
  return (
    <Fragment>
      <div className="sidebar_posts">
        <div className="sidebar_posts_title">
          <Text>{'Latest Posts'}</Text>
        </div>
        {latestPosts.map((post, index) => (
          <div key={index}>
            <hr></hr>
            <SideBarPostItem {...post} />
          </div>
        ))}
      </div>
      {/* <style jsx>{styles}</style> */}
    </Fragment>
  )
}
export default SideBarPost
