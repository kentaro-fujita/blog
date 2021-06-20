import React from 'react'
import { Story, Meta } from '@storybook/react'

import About, { AboutProps } from '../../components/templates/About'

export default {
  title: 'Templates/About',
  components: About,
} as Meta

const Template: Story<AboutProps> = (args) => <About {...args} />

export const Default = Template.bind({})
