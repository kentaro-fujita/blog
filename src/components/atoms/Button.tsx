import React, { ButtonHTMLAttributes, Fragment } from 'react'
import css from 'styled-jsx/css'
import Styles from '../../configs/style.json'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const getStyle = () => {
  return css`
    button {
      display: inline-block;
      font-size: 14px;
      height: auto;
      border: 0;
      padding: 8px;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      color: ${Styles.color.main};
      border: 2px solid ${Styles.color.main};
      background: #fff;
    }
    button:hover {
      transition: all 0.2s ease 0s;
      color: ${Styles.color.main};
      background: ${Styles.color.light_purple};
    }
  `
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const styles = getStyle()
  return (
    <Fragment>
      <button {...props}>{children}</button>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Button
