import React, { ButtonHTMLAttributes, Fragment } from 'react'
import css from 'styled-jsx/css'
import colors from '../../configs/colors.json'

export type TagProps = ButtonHTMLAttributes<HTMLButtonElement>

const styles = css`
  button {
    margin: 0.3rem 0.3rem;
    display: block;
    font-size: 14px;
    height: auto;
    padding: 4px 10px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 20%;
    color: ${colors.black};
    border: 2px solid ${colors.light_purple};
    background: ${colors.light_purple};
  }
  button:hover {
    border: 2px solid ${colors.light_purple};
    background: ${colors.white};
  }
`

const Tag: React.FC<TagProps> = ({ children, ...props }) => {
  return (
    <Fragment>
      <button {...props}>{children}</button>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Tag
