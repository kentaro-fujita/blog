import React from 'react'
import { Story, Meta } from '@storybook/react'

import Input from '../../components/atoms/Input'

export default {
  title: 'Atoms/Input',
  components: Input,
} as Meta

const Template: Story = () => <Input />

export const Default = Template.bind({})
