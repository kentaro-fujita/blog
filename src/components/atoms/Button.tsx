import React, { ButtonHTMLAttributes, Fragment } from 'react'
import css from 'styled-jsx/css'
import colors from '../../configs/colors.json'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const styles = css`
  button {
    display: inline-block;
    font-size: 14px;
    height: auto;
    border: 0;
    padding: 8px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    color: ${colors.main};
    border: 2px solid ${colors.main};
    background: ${colors.white};
  }
  button:hover {
    transition: all 0.2s ease 0s;
    color: ${colors.main};
    background: ${colors.light_purple};
  }
`

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Fragment>
      <button {...props}>{children}</button>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Button
