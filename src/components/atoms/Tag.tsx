import Link from 'next/link'
import React, { ButtonHTMLAttributes, Fragment } from 'react'

export type TagProps = ButtonHTMLAttributes<HTMLButtonElement>

const Tag: React.FC<TagProps> = ({ className, children, ...props }) => {
  return (
    <Fragment>
      <Link href={`/tags/${children}`}>
        <button
          className={`px-1 py-1 h-7 text-sm rounded-full text-white bg-purple-500 hover:bg-purple-700 ${className}`}
          {...props}
        >
          {children}
        </button>
      </Link>
    </Fragment>
  )
}
export default Tag
