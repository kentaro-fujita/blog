import React from 'react'
import { Story, Meta } from '@storybook/react'

import About from '../../components/templates/About'

export default {
  title: 'Templates/About',
  components: About,
} as Meta

const Template: Story = () => <About />

export const Default = Template.bind({})
