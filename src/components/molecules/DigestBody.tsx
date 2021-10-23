import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Text from '../atoms/Text'
import Title from '../atoms/Title'
import formatDate from '../../libs/date'

const styles = css`
  div: {
    display: flex;
    flex-direction: col;
  }
  .digest_title {
    font-weight: bold;
  }
`

export type DigestBodyProps = {
  title: string
  description: string
  createdAt: string
}

const DigestBody: React.FC<DigestBodyProps> = ({
  title,
  description,
  createdAt,
}) => {
  return (
    <Fragment>
      <div className="flex">
        <div className="digest_date">
          <Text className="gray">{`${formatDate(new Date(createdAt))}`}</Text>
        </div>
        <div className="digest_title">
          <Title type="small">{title}</Title>
        </div>
        <div className="digest_description">
          <Text className="black">{description}</Text>
        </div>
      </div>
      {/* <style jsx>{styles}</style> */}
    </Fragment>
  )
}
export default DigestBody
