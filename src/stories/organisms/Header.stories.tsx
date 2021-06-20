import React from 'react'
import { Story, Meta } from '@storybook/react'

import Header, { HeaderProps } from '../../components/organisms/Header'

export default {
  title: 'Organisms/Header',
  components: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args}>Footer</Header>

export const Default = Template.bind({})
