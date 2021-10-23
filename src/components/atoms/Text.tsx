import React, { Fragment, HTMLAttributes } from 'react'

export type TextProps = HTMLAttributes<HTMLElement>

const Text: React.FC<TextProps> = ({ className, children }) => {
  return (
    <Fragment>
      <p className={`text-lg text-gray-500 dark:text-gray-300 ${className}`}>
        {children}
      </p>
    </Fragment>
  )
}
export default Text
