import React from 'react'
import { Story, Meta } from '@storybook/react'

import DigestList, {
  DigestListProps,
} from '../../components/organisms/DigestList'

export default {
  title: 'Organisms/DigestList',
  components: DigestList,
} as Meta

const Template: Story<DigestListProps> = (args) => <DigestList {...args} />

export const Default = Template.bind({})
Default.args = {
  posts: [
    {
      catchImageUrl: './assets/digest_image.png',
      title: 'super interesting post title',
      description:
        'super interesting post description. super interesting post description',
      createdAt: '2021/10/01',
    },
    {
      catchImageUrl: 'https://picsum.photos/300/200',
      title: 'super interesting post title',
      description:
        'super interesting post description. super interesting post description',
      createdAt: '2021/10/01',
      updatedAt: '2021/10/30',
    },
    {
      catchImageUrl: 'https://picsum.photos/300/200',
      title: 'super interesting post title',
      description:
        'super interesting post description. super interesting post description',
      createdAt: '2021/10/01',
    },
  ],
}
