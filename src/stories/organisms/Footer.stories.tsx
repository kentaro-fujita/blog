import React from 'react'
import { Story, Meta } from '@storybook/react'

import Footer, { FooterProps } from '../../components/organisms/Footer'

export default {
  title: 'Organisms/Footer',
  components: Footer,
} as Meta

const Template: Story<FooterProps> = (args) => <Footer {...args}>Footer</Footer>

export const Default = Template.bind({})
