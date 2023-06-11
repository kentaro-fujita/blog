import React from 'react'
import { Story, Meta } from '@storybook/react'

import TextLink, { TextLinkProps } from '../../components/atoms/TextLink'

export default {
  title: 'Atoms/TextLink',
  components: TextLink,
} as Meta

const Template: Story<TextLinkProps> = (args) => (
  <TextLink {...args}>this is text link.</TextLink>
)

export const Default = Template.bind({})
Default.args = {
  href: 'https://google.com',
}
