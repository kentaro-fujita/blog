import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Tag, { TagProps } from '../atoms/Tag'

const styles = css`
  .tags_list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export type TagsListProps = {
  tagsProps?: TagProps
  tags: string[]
}

const TagsList: React.FC<TagsListProps> = ({ tags, ...props }) => {
  const router = useRouter()
  return (
    <Fragment>
      <div className="tags_list">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            <Tag onClick={() => router.push(`/tags/${tag}`)} {...props}>
              {tag}
            </Tag>
          </div>
        ))}
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default TagsList
