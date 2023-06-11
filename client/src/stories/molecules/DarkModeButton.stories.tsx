import React from 'react'
import { Story, Meta } from '@storybook/react'

import DarkModeButton from '../../components/molecules/DarkModeButton'

export default {
  title: 'Molecules/DarkModeButton',
  components: DarkModeButton,
} as Meta

const Template: Story = () => <DarkModeButton />

export const Default = Template.bind({})
