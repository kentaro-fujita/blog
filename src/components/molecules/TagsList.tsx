import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
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
  const router = useRouter()

  return (
    <Fragment>
      <div className="tags_list">
        {tags &&
          tags.map((tag, index) => (
            <Tag
              key={index}
              onClick={() => {
                router.push(`/tags/${tag}`)
              }}
            >
              {tag}
            </Tag>
          ))}
      </div>
      {/* <style jsx>{styles}</style> */}
    </Fragment>
  )
}
export default TagsList
