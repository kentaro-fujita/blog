import React from 'react'
import { Story, Meta } from '@storybook/react'

import PostTemplate, {
  PostTemplateProps,
} from '../../components/templates/Post'

export default {
  title: 'Templates/Post',
  components: PostTemplate,
} as Meta

const Template: Story<PostTemplateProps> = (args) => <PostTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  post: {
    title: 'super interesting post title',
    createdAt: '2021/10/01',
    updatedAt: '2021/10/02',
    allTags: Array.from(Array(10).keys()).map((n) => `tag${n + 1}`),
    content: `# head
body
- item1
- item2`,
  },
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
}
