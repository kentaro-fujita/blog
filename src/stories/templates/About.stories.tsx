import React from 'react'
import { Story, Meta } from '@storybook/react'

import AboutTemplate from '../../components/templates/About'

export default {
  title: 'Templates/About',
  components: AboutTemplate,
} as Meta

const Template: Story = () => <AboutTemplate />

export const Default = Template.bind({})
