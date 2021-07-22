import React from 'react'
import { Story, Meta } from '@storybook/react'
import Logo, { LogoProps } from '../../components/molecules/Logo'

export default {
  title: 'Molecules/Logo',
  components: Logo,
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Default = Template.bind({})
