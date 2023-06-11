import React from 'react'
import { Story, Meta } from '@storybook/react'

import Pagination, {
  PaginationProps,
} from '../../components/organisms/Pagination'

export default {
  title: 'Organisms/Pagination',
  components: Pagination,
} as Meta

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = {
  countPages: 3,
  currentPage: 1,
}

export const WithDots = Template.bind({})
WithDots.args = {
  countPages: 10,
  currentPage: 5,
}
