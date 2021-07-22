import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Title from '../atoms/Title'

const styles = css`
  .about_text {
    width: 80%;
    margin: 0 auto;
  }
`

const AboutText: React.FC = () => {
  return (
    <Fragment>
      <div className="about_text">
        <Title type="large">About</Title>
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default AboutText
