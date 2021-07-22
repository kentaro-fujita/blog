import React from 'react'
import { Story, Meta } from '@storybook/react'
import PostViewTop, {
  PostViewTopProps,
} from '../../components/molecules/PostViewTop'

export default {
  title: 'Molecules/PostViewTop',
  components: PostViewTop,
} as Meta

const Template: Story<PostViewTopProps> = (args) => <PostViewTop {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'super interesting post title',
  createdAt: '2021/10/01',
}

export const WithUpdatedAt = Template.bind({})
WithUpdatedAt.args = {
  title: 'super interesting post title',
  createdAt: '2021/10/01',
  updatedAt: '2021/10/30',
}
