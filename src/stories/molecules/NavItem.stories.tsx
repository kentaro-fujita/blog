import React from 'react'
import { Story, Meta } from '@storybook/react'

import NavItem, { NavItemProps } from '../../components/molecules/NavItem'

export default {
  title: 'Molecules/NavItem',
  components: NavItem,
} as Meta

const Template: Story<NavItemProps> = (args) => <NavItem {...args} />

export const Default = Template.bind({})
Default.args = {
  href: '/',
  children: 'top',
}
