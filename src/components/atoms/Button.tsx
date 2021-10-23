import React, { ButtonHTMLAttributes, Fragment } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  filled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  filled,
  children,
  className,
  ...props
}) => {
  return (
    <Fragment>
      <button
        className={
          filled
            ? `py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-purple-500 hover:bg-purple-700 ${className}`
            : `py-2 px-4 font-semibold rounded-lg shadow-md text-purple-700 bg-transparent border border-purple-700 transition-colors duration-700 transform hover:bg-purple-700 hover:text-white focus:border-4 focus:border-indigo-300 ${className}`
        }
        {...props}
      >
        {children}
      </button>
    </Fragment>
  )
}
export default Button
