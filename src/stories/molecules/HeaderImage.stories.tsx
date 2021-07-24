import React from 'react'
import { Story, Meta } from '@storybook/react'

import HeaderImage from '../../components/molecules/HeaderImage'

export default {
  title: 'Molecules/HeaderImage',
  components: HeaderImage,
} as Meta

const Template: Story = () => <HeaderImage />

export const Default = Template.bind({})
