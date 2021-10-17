import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Tag from '../atoms/Tag'
import Title from '../atoms/Title'
import DigestList, { DigestListProps } from './DigestList'
import SideBar, { SideBarProps } from './SideBar'

const styles = css`
  .tag_view {
    width: 80%;
    margin: 0 auto;
  }
  .tag_view_main {
    padding: 1rem;
    width: 80%;
    float: left;
  }
  @media screen and (max-width: 640px) {
    .tag_view {
      width: 100%;
      margin: 0 auto;
    }
    .tag_view_main {
      width: 100%;
      padding: 1rem;
    }
  }
`

export type TagViewProps = DigestListProps &
  SideBarProps & {
    selectedTags: string[]
  }

const TagView: React.FC<TagViewProps> = ({
  selectedTags,
  tags,
  posts,
  latestPosts,
}) => {
  const router = useRouter()

  return (
    <Fragment>
      <div className="tag_view">
        <div className="tag_view_main">
          <Title type="large">Filter posts by</Title>
          {selectedTags.map((tag, index) => (
            <Tag
              key={index}
              onClick={() => {
                router.push(`/tags/${tag}`)
              }}
            >
              {tag}
            </Tag>
          ))}
          <hr></hr>
          <DigestList posts={posts} />
        </div>
        <SideBar latestPosts={latestPosts} tags={tags} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default TagView
