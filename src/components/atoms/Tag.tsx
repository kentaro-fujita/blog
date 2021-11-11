import { useRouter } from 'next/router'
import React, { ButtonHTMLAttributes, Fragment } from 'react'

export type TagProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean
}

const Tag: React.FC<TagProps> = ({
  selected,
  className,
  children,
  ...props
}) => {
  const router = useRouter()
  const { tags, keyword } = router.query

  const clickHandler = () => {
    if (selected) {
      router.push({
        pathname: '/search',
        query: {
          tags: Array.isArray(tags)
            ? tags.filter((tag) => tag !== (children as string))
            : undefined,
          keyword: keyword,
        },
      })
    } else {
      if (
        tags && Array.isArray(tags)
          ? tags.find((tag) => tag === (children as string))
          : tags === (children as string)
      )
        return
      router.push({
        pathname: '/search',
        query: {
          tags: tags
            ? Array.isArray(tags)
              ? [...tags, children as string]
              : [tags, children as string]
            : (children as string),
          keyword: keyword,
        },
      })
    }
  }

  return (
    <Fragment>
      <button
        className={
          selected
            ? `px-1 py-1 m-1 h-7 text-sm rounded-full text-purple-700 bg-white border border-purple-500 hover:bg-purple-700 hover:text-white ${className}`
            : `px-1 py-1 m-1 h-7 text-sm rounded-full text-white bg-purple-500 hover:bg-purple-700 ${className}`
        }
        onClick={clickHandler}
        {...props}
      >
        {children}
      </button>
    </Fragment>
  )
}
export default Tag
