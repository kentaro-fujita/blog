import React from 'react'
import { Story, Meta } from '@storybook/react'

import Title, { TitleProps } from '../../components/atoms/Title'

export default {
  title: 'Atoms/Title',
  components: Title,
} as Meta

const Template: Story<TitleProps> = (args) => <Title {...args}>Title</Title>

export const Large = Template.bind({})
Large.args = {
  type: 'large',
}

export const Medium = Template.bind({})
Medium.args = {
  type: 'medium',
}

export const Small = Template.bind({})
Small.args = {
  type: 'small',
}
