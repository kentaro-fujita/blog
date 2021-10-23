import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import Button from '../atoms/Button'
import Icon from '../atoms/Icon'
import Logo from '../atoms/Logo'
import DarkModeButton from '../molecules/DarkModeButton'
import NavItem from '../molecules/NavItem'
import SearchInput from '../molecules/SearchInput'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const clickHandler = () => {
    setIsOpen(!isOpen)
  }

  const linksItems = [
    { name: 'GitHub', link: 'https://github.com/wisteken' },
    { name: 'AtCoder', link: 'https://atcoder.jp/users/k_fujita' },
  ]

  return (
    <Fragment>
      <header className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-40">
        <div className="container px-4 py-5 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10">
          <div className="flex justify-between">
            <Link href="/">
              <a className="text-gray-800 dark:text-gray-200">
                <div className="flex items-center">
                  <Logo className="h-7 w-7 flex-shrink-0" />
                  <p className="text-xl ml-2">
                    <strong>wisteken</strong>.com
                  </p>
                </div>
              </a>
            </Link>
            <div className="flex items-center space-x-2 lg:hidden">
              <DarkModeButton />
              <Button
                className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none"
                onClick={clickHandler}
              >
                <Icon className="fas fa-bars" />
              </Button>
            </div>
          </div>
          {isOpen && (
            <Fragment>
              <div className="flex flex-col space-y-4 lg:hidden">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/about">About</NavItem>
                <NavItem href="/pages/1">Posts</NavItem>
              </div>
              <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
                <SearchInput />
              </div>
            </Fragment>
          )}
          <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2">
            <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/pages/1">Posts</NavItem>
              <NavItem items={linksItems}>Links</NavItem>
            </div>
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
              <DarkModeButton />
              <SearchInput />
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}
export default NavBar
