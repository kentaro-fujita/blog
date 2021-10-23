import React, { Fragment } from 'react'
import formatDate from '../../libs/date'

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
          <p className="black">{title}</p>
        </div>
        <div className="sidebar_post_date">
          <p className="gray">{formatDate(new Date(createdAt))}</p>
        </div>
      </a>
    </Fragment>
  )
}
export default SideBarPostItem
