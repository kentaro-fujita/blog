import React from 'react'
import { Story, Meta } from '@storybook/react'

import Tag, { TagProps } from '../../components/atoms/Tag'

export default {
  title: 'Atoms/Tag',
  components: Tag,
} as Meta

const Template: Story<TagProps> = (args) => <Tag {...args}>Tag</Tag>

export const Default = Template.bind({})
