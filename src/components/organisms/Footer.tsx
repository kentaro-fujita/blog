import Link from 'next/link'
import React, { Fragment } from 'react'
import Logo from '../atoms/Logo'
import config from '../../configs/config.json'
import Icon from '../atoms/Icon'

const Foot: React.FC = () => {
  return (
    <Fragment>
      <footer className="bg-gray-100 dark:bg-gray-800">
        <div className="container flex flex-col items-center px-4 py-6 mx-auto space-y-6 lg:space-y-0 lg:flex-row lg:justify-between">
          <div className="w-48 text-gray-700 dark:text-gray-200">
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
            </div>
          </div>
          <p className="text-sm text-center text-gray-500 dark:text-gray-300">
            {config.copyRight}
          </p>
          <div className="flex items-center">
            <Link href="https://policies.google.com/privacy">
              <a className="text-gray-500 dark:text-gray-300">Privacy</a>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/">
              <a className="text-gray-500 dark:text-gray-300">
                <Icon className="fas fa-home" />
              </a>
            </Link>
            <Link href="https://twitter.com/wisteken">
              <a className="pl-6 text-gray-500 dark:text-gray-300">
                <Icon className="fab fa-twitter fa-lg" />
              </a>
            </Link>
            <Link href="https://github.com/wisteken">
              <a className="pl-6 text-gray-500 dark:text-gray-300">
                <Icon className="fab fa-github fa-lg" />
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}
export default Foot
