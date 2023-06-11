import React from 'react'
import { Story, Meta } from '@storybook/react'

import PostCard, { PostCardProps } from '../../components/organisms/PostCard'

export default {
  title: 'Organisms/PostCard',
  components: PostCard,
} as Meta

const Template: Story<PostCardProps> = (args) => <PostCard {...args} />

export const Default = Template.bind({})
Default.args = {
  catchImageUrl: '/assets/catch_image.png',
  title:
    'super interesting post title super interesting post title super interesting post title max 100 chars',
  description:
    'super interesting post description. super interesting post description',
  createdAt: '10/01/2021',
  tags: Array.from(Array(10).keys()).map((n) => `tag${n + 1}`),
}
