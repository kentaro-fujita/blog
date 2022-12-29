import Link from 'next/link'
import React, { Fragment } from 'react'

const BUTTON_SIZE = 30

export type PaginationButtonProps = {
  filled: boolean
  href?: string
  children: React.ReactNode
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  filled,
  href,
  children,
}) => {
  const LinkContainer: React.FC<{
    href?: string
    children: React.ReactNode
  }> = ({ href, children }) => {
    return (
      <Fragment>
        {href ? (
          <Link href={href} passHref>
            {children}
          </Link>
        ) : (
          children
        )}
      </Fragment>
    )
  }

  return (
    <Fragment>
      <div className="inline-block w-8 h-8">
        <LinkContainer href={href}>
          <div
            className={`rounded-full no-underline text-center border-2 border-solid border-purple-700 
            ${filled && 'bg-purple-700'} ${href && 'hover:opacity-60'}`}
          >
            <span
              className={`text-lg ${
                filled ? 'font-bold text-white' : 'text-purple-700'
              }`}
            >
              {children}
            </span>
          </div>
        </LinkContainer>
      </div>
    </Fragment>
  )
}

export default PaginationButton
