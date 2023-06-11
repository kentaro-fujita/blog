import React from 'react'
import { Story, Meta } from '@storybook/react'

import TagsList, { TagsListProps } from '../../components/molecules/TagsList'

export default {
  title: 'Molecules/TagsList',
  components: TagsList,
} as Meta

const Template: Story<TagsListProps> = (args) => <TagsList {...args} />

export const Default = Template.bind({})
Default.args = {
  allTags: Array.from(Array(10).keys()).map((n) => `tag${n + 1}`),
}
