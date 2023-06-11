import React from 'react'
import { Story, Meta } from '@storybook/react'

import Title from '../../components/atoms/Title'

export default {
  title: 'Atoms/Title',
  components: Title,
} as Meta

const Template: Story = (args) => (
  <Title type={args.type} {...args}>
    this is title
  </Title>
)

export const H1 = Template.bind({})
H1.args = {
  type: 'h1',
}

export const H2 = Template.bind({})
H2.args = {
  type: 'h2',
}

export const H3 = Template.bind({})
H3.args = {
  type: 'h3',
}
