import React from 'react'
import { Story, Meta } from '@storybook/react'

import Icon, { IconProps } from '../../components/atoms/Icon'

export default {
  title: 'Atoms/Icon',
  components: Icon,
} as Meta

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Dizzy = Template.bind({})
Dizzy.args = {
  className: 'far fa-dizzy fa-3x',
}
