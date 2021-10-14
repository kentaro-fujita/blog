import React, { Fragment } from 'react'
import Link from 'next/link'
import css from 'styled-jsx/css'
import Tag from '../atoms/Tag'

const styles = css`
  .tags_list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export type TagsListProps = {
  tags?: string[]
}

const TagsList: React.FC<TagsListProps> = ({ tags }) => {
  return (
    <Fragment>
      <div className="tags_list">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            <Link href={`/tags/${tag}`} passHref>
              <Tag>{tag}</Tag>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default TagsList
