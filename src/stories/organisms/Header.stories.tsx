import React from 'react'
import { Story, Meta } from '@storybook/react'

import Header from '../../components/organisms/Header'

export default {
  title: 'Organisms/Header',
  components: Header,
} as Meta

const Template: Story = () => <Header />

export const Default = Template.bind({})
