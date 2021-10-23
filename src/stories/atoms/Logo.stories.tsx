import React from 'react'
import { Story, Meta } from '@storybook/react'

import Logo from '../../components/atoms/Logo'

export default {
  title: 'Atoms/Logo',
  components: Logo,
} as Meta

const Template: Story = () => <Logo />

export const Default = Template.bind({})
