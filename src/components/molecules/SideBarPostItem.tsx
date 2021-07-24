import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Text from '../atoms/Text'

const styles = css`
  .sidebar_post_date {
    text-align: right;
  }
`

export type SideBarPostItemProps = {
  title: string
  slug: string
  createdAt: string
}

const SideBarPostItem: React.FC<SideBarPostItemProps> = ({
  title,
  slug,
  createdAt,
}) => {
  return (
    <Fragment>
      <a href={`/posts/${slug}`}>
        <div className="sidebar_post_title">
          <Text className="black">{title}</Text>
        </div>
        <div className="sidebar_post_date">
          <Text className="gray">{createdAt}</Text>
        </div>
      </a>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default SideBarPostItem
