import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Title from '../atoms/Title'
import SideBar, { SideBarProps } from './SideBar'

const styles = css`
  .about_text {
    width: 80%;
    margin: 0 auto;
  }
  .about_text_main {
    width: 80%;
    float: left;
  }
  @media screen and (max-width: 640px) {
    .about_text {
      width: 100%;
      margin: 0 auto;
    }
    .about_text_main {
      width: 100%;
      padding: 1rem;
    }
  }
`

export type AboutTextProps = SideBarProps

const AboutText: React.FC<AboutTextProps> = ({ latestPosts, allTags }) => {
  return (
    <Fragment>
      <div className="about_text">
        <div className="about_text_main">
          <Title type="large">About</Title>
        </div>
        <SideBar latestPosts={latestPosts} allTags={allTags} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default AboutText
