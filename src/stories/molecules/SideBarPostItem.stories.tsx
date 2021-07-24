import React from 'react'
import { Story, Meta } from '@storybook/react'

import SideBarPostItem, {
  SideBarPostItemProps,
} from '../../components/molecules/SideBarPostItem'

export default {
  title: 'Molecules/SideBarPostItem',
  components: SideBarPostItem,
} as Meta

const Template: Story<SideBarPostItemProps> = (args) => (
  <SideBarPostItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'super interesting post',
  createdAt: '2021/10/01',
}
