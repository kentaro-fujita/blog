import React from 'react'
import { Story, Meta } from '@storybook/react'
import PostViewContent, {
  PostViewContentProps,
} from '../../components/molecules/PostViewContent'

export default {
  title: 'Molecules/PostViewContent',
  components: PostViewContent,
} as Meta

const Template: Story<PostViewContentProps> = (args) => (
  <PostViewContent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  content: `# head
body
- item1
- item2`,
}
