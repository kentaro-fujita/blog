import React from 'react'
import { Story, Meta } from '@storybook/react'

import SideBar, { SideBarProps } from '../../components/organisms/SideBar'

export default {
  title: 'Organisms/SideBar',
  components: SideBar,
} as Meta

const Template: Story<SideBarProps> = (args) => <SideBar {...args} />

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
