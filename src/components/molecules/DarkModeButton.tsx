import React, { Fragment, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Button from '../atoms/Button'
import Icon from '../atoms/Icon'

const DarkModeButton: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const clickHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) return <Fragment />

  return (
    <Fragment>
      <Button
        onClick={clickHandler}
        className="flex shadow-none justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 active:bg-gray-50"
      >
        {theme === 'light' ? (
          <Icon className="far fa-moon" />
        ) : (
          <Icon className="fas fa-sun" />
        )}
      </Button>
    </Fragment>
  )
}
export default DarkModeButton
