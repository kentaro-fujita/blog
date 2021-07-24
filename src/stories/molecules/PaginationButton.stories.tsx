import React from 'react'
import { Story, Meta } from '@storybook/react'

import PaginationButton, {
  PaginationButtonProps,
} from '../../components/molecules/PaginationButton'

export default {
  title: 'Molecules/PaginationButton',
  components: PaginationButton,
} as Meta

const Template: Story<PaginationButtonProps> = (args) => (
  <PaginationButton {...args} />
)

export const Main = Template.bind({})
Main.args = {
  className: 'main',
  num: 1,
}

export const Sub = Template.bind({})
Sub.args = {
  className: 'sub',
  href: '#',
  num: 1,
}
