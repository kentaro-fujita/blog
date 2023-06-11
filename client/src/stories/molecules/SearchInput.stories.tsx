import React from 'react'
import { Story, Meta } from '@storybook/react'
import SearchInput, {
  SearchInputProps,
} from '../../components/molecules/SearchInput'

export default {
  title: 'Molecules/SearchInput',
  components: SearchInput,
} as Meta

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />

export const Default = Template.bind({})
Default.args = {
  // onSubmit: () => null,
}
