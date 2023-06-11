import React from 'react'
import { Story, Meta } from '@storybook/react'
import PostViewContent, {
  PostViewContentProps,
} from '../../components/molecules/PostViewContent'

export default {
  title: 'Molecules/PostViewContent',
  components: PostViewContent,
} as Meta

const Template: Story<PostViewContentProps> = (args) => (
  <PostViewContent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  content: `
## h2
body
- item1
- item2

| | a | b |
|-| - | - |
|1| x | y |

* [ ] in progress
* [x] done

https://wisteken.com

~~~js
  console.log('It works!');
~~~

inline_latex: $a_1$

$$$
a = b_i
$$$

`,
}
