import React from 'react'
import { Story, Meta } from '@storybook/react'

import IndexTemplate, {
  IndexTemplateProps,
} from '../../components/templates/Index'

export default {
  title: 'Templates/Index',
  components: IndexTemplate,
} as Meta

const Template: Story<IndexTemplateProps> = (args) => (
  <IndexTemplate {...args} />
)

export const Default = Template.bind({})
Default.args = {
  posts: [
    {
      slug: '',
      catchImageUrl: '/assets/catch_image.png',
      title: 'super interesting post title',
      description:
        'super interesting post description. super interesting post description',
      createdAt: '2021/10/01',
      tags: Array.from(Array(10).keys()).map((n) => `tag${n + 1}`),
    },
    {
      slug: '',
      catchImageUrl: '/assets/catch_image.png',
      title: 'super interesting post title',
      description:
        'super interesting post description. super interesting post description',
      createdAt: '2021/10/01',
      updatedAt: '2021/10/30',
      tags: Array.from(Array(10).keys()).map((n) => `tag${n + 1}`),
    },
    {
      slug: '',
      catchImageUrl: '/assets/catch_image.png',
      title: 'super interesting post title',
      description:
        'super interesting post description. super interesting post description',
      createdAt: '2021/10/01',
      tags: Array.from(Array(10).keys()).map((n) => `tag${n + 1}`),
    },
  ],
  // latestPosts: [
  //   {
  //     title: 'super interesting post',
  //     createdAt: '2021/10/01',
  //   },
  //   {
  //     title: 'super interesting post',
  //     createdAt: '2021/10/01',
  //   },
  //   {
  //     title: 'super interesting post',
  //     createdAt: '2021/10/01',
  //   },
  //   {
  //     title: 'super interesting post',
  //     createdAt: '2021/10/01',
  //   },
  //   {
  //     title: 'super interesting post',
  //     createdAt: '2021/10/01',
  //   },
  // ],
  // allTags: Array.from(Array(10).keys()).map((n) => `tag${n + 1}`),
  // currentPage: 1,
  // countPages: 1,
}
