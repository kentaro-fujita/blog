import React from 'react'
import { Story, Meta } from '@storybook/react'

import Index, { IndexProps } from '../../components/templates/Index'

export default {
  title: 'Templates/Index',
  components: Index,
} as Meta

const Template: Story<IndexProps> = (args) => <Index {...args} />

export const Default = Template.bind({})
