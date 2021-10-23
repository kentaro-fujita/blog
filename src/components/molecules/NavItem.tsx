import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import Button from '../atoms/Button'
import Icon from '../atoms/Icon'

export type NavItemProps = {
  href?: string
  items?: {
    name: string
    link: string
  }[]
  children?: React.ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ href, items, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const clickHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Fragment>
      {href && (
        <Link href={href}>
          <a className="text-gray-500 dark:text-gray-200 hover:text-gray-800">
            {children}
          </a>
        </Link>
      )}
      {items && (
        <Fragment>
          <div className="relative hidden lg:block">
            <Button
              onClick={clickHandler}
              className="text-gray-500 dark:text-gray-200 hover:text-gray-800 flex items-center space-x-1 focus:outline-none"
            >
              {children}
              <Icon className="fas fa-angle-down pl-1" />
            </Button>
            {isOpen && (
              <Fragment>
                <Button
                  onClick={clickHandler}
                  className="fixed inset-0 z-10 w-full h-full cursor-default"
                />
                <div className="absolute left-0 z-20 w-40 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 lg:left-auto lg:right-0 dark:bg-gray-800">
                  {items.map(({ name, link }, idx) => (
                    <Link key={idx} href={link}>
                      <a className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        {name}
                      </a>
                    </Link>
                  ))}
                </div>
              </Fragment>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}
export default NavItem
