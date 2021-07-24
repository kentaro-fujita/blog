import React from 'react'
import { Story, Meta } from '@storybook/react'

import SideBarPost, {
  SideBarPostProps,
} from '../../components/organisms/SideBarPost'

export default {
  title: 'Organisms/SideBarPost',
  components: SideBarPost,
} as Meta

const Template: Story<SideBarPostProps> = (args) => <SideBarPost {...args} />

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
}
