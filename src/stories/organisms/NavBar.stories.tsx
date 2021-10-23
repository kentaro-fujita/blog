import React from 'react'
import { Story, Meta } from '@storybook/react'

import NavBar from '../../components/molecules/NavBar'

export default {
  title: 'Organisms/NavBar',
  components: NavBar,
} as Meta

const Template: Story = () => <NavBar />

export const Default = Template.bind({})
