import React from 'react'
import { Story, Meta } from '@storybook/react'

import HeaderItem, { HeaderItemProps } from '../../components/molecules/HeaderItem'

export default {
  title: "Molecules/HeaderItem",
  components: HeaderItem,
} as Meta;

const Template: Story<HeaderItemProps> = (args) => <HeaderItem {...args} />;

export const Default = Template.bind({})
Default.args = {
  href: '/',
  children: 'top',
}
