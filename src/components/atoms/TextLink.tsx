import Link from 'next/link'
import React, { AnchorHTMLAttributes, Fragment } from 'react'

export type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

const TextLink: React.FC<TextLinkProps> = ({ className, href, children }) => {
  return (
    <Fragment>
      <Link
        href={href}
        passHref
        className={
          className
            ? className
            : 'text-purple-700 hover:text-purple-500 dark:text-purple-500 dark:hover:text-purple-700'
        }
      >
        {children}
      </Link>
    </Fragment>
  )
}
export default TextLink
