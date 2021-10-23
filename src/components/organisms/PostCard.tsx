import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../atoms/Icon'
import formatDate from '../../libs/date'
import TagsList from '../molecules/TagsList'

export type PostCardProps = {
  title: string
  description: string
  slug: string
  catchImageUrl: string
  createdAt: string
  tags: string[]
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  slug,
  catchImageUrl,
  createdAt,
  tags,
}) => {
  return (
    <Fragment>
      <div className="px-4 py-8 max-w-xs">
        <div className="bg-white dark:bg-gray-700 shadow-2xl rounded-lg mb-6 tracking-wide">
          <div className="md:flex-shrink-0 cursor-pointer">
            <Link href={`/posts/${slug}`}>
              <Image
                className="transform hover:scale-125 duration-200"
                width={640}
                height={360}
                src={catchImageUrl}
                alt="catch"
              />
            </Link>
          </div>
          <div className="flex items-center justify-between mx-6">
            <div className="flex items-center text-gray-500 dark:text-gray-300">
              <Icon className="fas fa-clock" />
              <p className="ml-2">{`${formatDate(new Date(createdAt))}`}</p>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="font-bold text-2xl text-gray-700 dark:text-gray-100 tracking-normal">
              <Link href={`/posts/${slug}`}>
                <a className="hover:underline">{title}</a>
              </Link>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-300 px-2 mr-1">
              {description}
            </p>
          </div>
          <TagsList tags={tags} />
        </div>
      </div>
    </Fragment>
  )
}
export default PostCard
