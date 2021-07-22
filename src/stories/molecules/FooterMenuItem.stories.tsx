import React from 'react'
import { Story, Meta } from '@storybook/react'

import FooterMenuItem, {
  FooterMenuItemProps,
} from '../../components/molecules/FooterMenuItem'

export default {
  title: 'Molecules/FooterMenuItem',
  components: FooterMenuItem,
} as Meta

const Template: Story<FooterMenuItemProps> = (args) => (
  <FooterMenuItem {...args}>FooterMenuItem</FooterMenuItem>
)

export const Default = Template.bind({})
