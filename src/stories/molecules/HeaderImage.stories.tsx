import React from 'react'
import { Story, Meta } from '@storybook/react'

import HeaderImage, {
  HeaderImageProps,
} from '../../components/molecules/HeaderImage'

export default {
  title: 'Molecules/HeaderImage',
  components: HeaderImage,
} as Meta

const Template: Story<HeaderImageProps> = (args) => (
  <HeaderImage {...args}>Header</HeaderImage>
)

export const Default = Template.bind({})
