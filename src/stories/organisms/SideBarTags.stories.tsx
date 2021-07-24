import React from 'react'
import { Story, Meta } from '@storybook/react'

import SideBarTags, {
  SideBarTagsProps,
} from '../../components/organisms/SideBarTags'

export default {
  title: 'Organisms/SideBarTags',
  components: SideBarTags,
} as Meta

const Template: Story<SideBarTagsProps> = (args) => <SideBarTags {...args} />

export const Default = Template.bind({})
Default.args = {
  allTags: [...Array(10).keys()].map((n) => `tag${n + 1}`),
}
