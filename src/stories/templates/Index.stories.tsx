import React from 'react'
import { Story, Meta } from '@storybook/react'

import Index, { IndexProps } from '../../components/templates/Index'

export default {
  title: 'Templates/Index',
  components: Index,
} as Meta

const Template: Story<IndexProps> = (args) => <Index {...args} />

export const Default = Template.bind({})
Default.args = {
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
  tags: ['tag1', 'tag2', 'tag3'],
  currentPage: 1,
  countPages: 1,
}
