import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '../../components/atoms/Button'

export default {
  title: 'Atoms/Button',
  components: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>

export const Default = Template.bind({})
