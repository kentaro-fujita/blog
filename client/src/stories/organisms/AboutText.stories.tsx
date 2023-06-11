import React from 'react'
import { Story, Meta } from '@storybook/react'

import AboutText from '../../components/organisms/AboutText'

export default {
  title: 'Organisms/AboutText',
  components: AboutText,
} as Meta

const Template: Story = () => <AboutText />

export const Default = Template.bind({})
