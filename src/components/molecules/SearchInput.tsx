import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Icon from '../atoms/Icon'
import Input, { InputProps } from '../atoms/Input'

export type SearchInputProps = InputProps

const SearchInput: React.FC<SearchInputProps> = ({
  className,
  value,
  ...props
}) => {
  const router = useRouter()
  const { tags } = router.query
  const [inputWord, setInputWord] = useState<string>('')

  useEffect(() => {
    if (value && typeof value === 'string') {
      setInputWord(value)
    }
  }, [value])

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(e.target.value)
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push({
      pathname: '/search',
      query: { tags: tags, keyword: inputWord },
    })
  }

  return (
    <Fragment>
      <div
        className={`bg-transparent border rounded-md dark:border-gray-700 focus-within:border-purple-700 focus-within:ring focus-within:ring-purple-700 dark:focus-within:border-purple-700 focus-within:ring-opacity-40 ${className}`}
      >
        <form
          onSubmit={submitHandler}
          className="flex flex-wrap flex-row justify-between md:flex-row"
        >
          <Input
            type="search"
            name="search"
            placeholder="Search"
            value={inputWord}
            onChange={changeEventHandler}
            className="flex-1 w-full h-12 px-4 text-base text-gray-700 border-gray-700 dark:border-gray-100 bg-white dark:bg-gray-900 dark:text-gray-300 focus:outline-none focus:placeholder-transparent focus:ring-0"
            {...props}
          />
          <Button
            type="submit"
            className="py-2 px-4 m-1 rounded-lg shadow-md text-white bg-purple-500 hover:bg-purple-700"
          >
            <Icon className="fas fa-search" />
          </Button>
        </form>
      </div>
    </Fragment>
  )
}
export default SearchInput
