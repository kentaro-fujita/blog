import React from 'react'
import { Story, Meta } from '@storybook/react'

import TagsTemplate, { TagsTemplateProps } from '../../components/templates/Tag'

export default {
  title: 'Templates/Tag',
  components: TagsTemplate,
} as Meta

const Template: Story<TagsTemplateProps> = (args) => <TagsTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  selectedTags: [...Array(5).keys()].map((n) => `tag${n + 1}`),
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
