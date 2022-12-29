import React, { Fragment } from 'react'
import IndexView, { IndexViewProps } from '../organisms/IndexView'

export type IndexTemplateProps = IndexViewProps

const IndexTemplate: React.FC<IndexTemplateProps> = ({ ...args }) => {
  return <IndexView {...args} />
}

export default IndexTemplate
