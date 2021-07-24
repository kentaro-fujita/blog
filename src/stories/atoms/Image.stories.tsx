import React from 'react'
import { Story, Meta } from '@storybook/react'

import Image, { ImageProps } from '../../components/atoms/Image'

export default {
  title: 'Atoms/Image',
  components: Image,
} as Meta

const Template: Story<ImageProps> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  imgUrl: 'https://picsum.photos/300/300',
}
