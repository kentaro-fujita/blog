import React from 'react'
import { Story, Meta } from '@storybook/react'

import Text from '../../components/atoms/Text'

export default {
  title: 'Atoms/Text',
  components: Text,
} as Meta

const Template: Story = () => <Text>Hello World</Text>

export const Default = Template.bind({})
