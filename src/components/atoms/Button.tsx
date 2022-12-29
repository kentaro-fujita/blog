import React, { ButtonHTMLAttributes, Fragment } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <Fragment>
      <button
        className={
          className
            ? className
            : 'py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-purple-700 hover:bg-purple-500'
        }
        {...props}
      >
        {children}
      </button>
    </Fragment>
  )
}
export default Button
