import React from 'react'
import { Story, Meta } from '@storybook/react'

import About, { AboutProps } from '../../components/templates/About'

export default {
  title: 'Templates/About',
  components: About,
} as Meta

const Template: Story<AboutProps> = (props) => <About {...props} />

export const Default = Template.bind({})
Default.args = {
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
  currentPage: 1,
  countPages: 1,
}
