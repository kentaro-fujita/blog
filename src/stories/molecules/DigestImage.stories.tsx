import React from 'react'
import { Story, Meta } from '@storybook/react'

import DigestImage, {
  DigestImageProps,
} from '../../components/molecules/DigestImage'

export default {
  title: 'Molecules/DigestImage',
  components: DigestImage,
} as Meta

const Template: Story<DigestImageProps> = (args) => <DigestImage {...args} />

export const Default = Template.bind({})
Default.args = {
  catchImageUrl: './assets/digest_image.png',
  href: '/',
}
