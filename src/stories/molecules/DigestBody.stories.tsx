import React from 'react'
import { Story, Meta } from '@storybook/react'

import DigestBody, {
  DigestBodyProps,
} from '../../components/molecules/DigestBody'

export default {
  title: 'Molecules/DigestBody',
  components: DigestBody,
} as Meta

const Template: Story<DigestBodyProps> = (args) => <DigestBody {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'super interesting post title',
  description: 'super interesting post description',
  createdAt: '2021/10/01',
}
