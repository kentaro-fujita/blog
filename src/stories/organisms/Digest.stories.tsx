import React from 'react'
import { Story, Meta } from '@storybook/react'

import Digest, { DigestProps } from '../../components/organisms/Digest'

export default {
  title: 'Organisms/Digest',
  components: Digest,
} as Meta

const Template: Story<DigestProps> = (args) => <Digest {...args} />

export const Default = Template.bind({})
Default.args = {
  catchImageUrl: './assets/digest_image.png',
  title: 'super interesting post title',
  description:
    'super interesting post description. super interesting post description',
  createdAt: '10/01/2021',
}
