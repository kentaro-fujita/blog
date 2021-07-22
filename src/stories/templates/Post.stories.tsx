import React from 'react'
import { Story, Meta } from '@storybook/react'

import PostTemplate, {
  PostTemplateProps,
} from '../../components/templates/Post'

export default {
  title: 'Templates/PostTemplate',
  components: PostTemplate,
} as Meta

const Template: Story<PostTemplateProps> = (args) => <PostTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  post: {
    title: 'super interesting post title',
    createdAt: '2021/10/01',
    content: `
      # head
      body
      - item1
      - item2
      `,
  },
}
