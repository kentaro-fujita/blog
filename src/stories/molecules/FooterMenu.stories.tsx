import React from 'react'
import { Story, Meta } from '@storybook/react'

import FooterMenu, {
  FooterMenuProps,
} from '../../components/molecules/FooterMenu'

export default {
  title: 'Molecules/FooterMenu',
  components: FooterMenu,
} as Meta

const Template: Story<FooterMenuProps> = (args) => <FooterMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    { name: 'About', link: '/about' },
    { name: 'GitHub', link: 'https://github.com/kentaro-fujita' },
    { name: 'Links', link: '/' },
    { name: 'Contact', link: '/' },
  ],
}
