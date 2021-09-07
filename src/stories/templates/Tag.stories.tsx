import React from 'react'
import { Story, Meta } from '@storybook/react'

import Tag, { TagProps } from '../../components/templates/Tag'

export default {
  title: 'Templates/Tag',
  components: Tag,
} as Meta

const Template: Story<TagProps> = (args) => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {
  tag: 'tag_name',
  posts: [
    {
      catchImageUrl: './assets/digest_image.png',
      title: 'super interesting post title',
      description:
        'super interesting post description. super interesting post description',
      createdAt: '2021/10/01',
      tags: [...Array(10).keys()].map((n) => `tag${n + 1}`),
    },
    {
      catchImageUrl: 'https://picsum.photos/300/200',
      title: 'super interesting post title',
      description:
        'super interesting post description. super interesting post description',
      createdAt: '2021/10/01',
      updatedAt: '2021/10/30',
      tags: [...Array(10).keys()].map((n) => `tag${n + 1}`),
    },
    {
      catchImageUrl: 'https://picsum.photos/300/200',
      title: 'super interesting post title',
      description:
        'super interesting post description. super interesting post description',
      createdAt: '2021/10/01',
      tags: [...Array(10).keys()].map((n) => `tag${n + 1}`),
    },
  ],
  latestPosts: [
    {
      title: 'super interesting post',
      createdAt: '2021/10/01',
    },
    {
      title: 'super interesting post',
      createdAt: '2021/10/01',
    },
    {
      title: 'super interesting post',
      createdAt: '2021/10/01',
    },
    {
      title: 'super interesting post',
      createdAt: '2021/10/01',
    },
    {
      title: 'super interesting post',
      createdAt: '2021/10/01',
    },
  ],
  allTags: [...Array(10).keys()].map((n) => `tag${n + 1}`),
}
