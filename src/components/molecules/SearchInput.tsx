import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import Icon from '../atoms/Icon'
import Input from '../atoms/Input'

export type SearchInputProps = {
  onSubmit?: () => null
}

const SearchInput: React.FC<SearchInputProps> = ({ onSubmit }) => {
  return (
    <Fragment>
      <div className="bg-transparent border rounded-md dark:border-gray-700 lg:w-96 focus-within:border-purple-700 focus-within:ring focus-within:ring-purple-700 dark:focus-within:border-purple-700 focus-within:ring-opacity-40">
        <form
          onSubmit={onSubmit}
          className="flex flex-wrap flex-row justify-between md:flex-row"
        >
          <Input
            type="search"
            name="search"
            placeholder="Search"
            required={true}
            className="flex-1 w-full h-12 px-4 text-sm text-gray-700 bg-white dark:bg-gray-900 dark:text-gray-300 focus:outline-none focus:placeholder-transparent focus:ring-0"
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
