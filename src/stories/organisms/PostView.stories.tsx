import React from 'react'
import { Story, Meta } from '@storybook/react'

import PostView, { PostViewProps } from '../../components/organisms/PostView'

export default {
  title: 'Organisms/PostView',
  components: PostView,
} as Meta

const Template: Story<PostViewProps> = (args) => <PostView {...args} />

export const Default = Template.bind({})
Default.args = {
  post: {
    title: 'super interesting post title',
    createdAt: '2021/10/01',
    updatedAt: '2021/10/02',
    tags: [...Array(10).keys()].map((n) => `tag${n + 1}`),
    content: `# head
body
- item1
- item2
`,
  },
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
