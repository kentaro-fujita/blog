import React from 'react'
import { Story, Meta } from '@storybook/react'

import Text from '../../components/atoms/Text'

export default {
  title: 'Atoms/Text',
  components: Text,
} as Meta

const Template: Story = () => <Text>Text</Text>

export const Black = Template.bind({})
Black.args = {
  className: 'black',
}

export const Gray = Template.bind({})
Gray.args = {
  className: 'gray',
}
