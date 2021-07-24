import React from 'react'
import { Story, Meta } from '@storybook/react'

import AboutText, { AboutTextProps } from '../../components/organisms/AboutText'

export default {
  title: 'Organisms/AboutText',
  components: AboutText,
} as Meta

const Template: Story<AboutTextProps> = (args) => <AboutText {...args} />

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
}
