import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import colors from '../../configs/colors.json'
import DigestBody, { DigestBodyProps } from '../molecules/DigestBody'
import DigestImage, { DigestImageProps } from '../molecules/DigestImage'
import TagsList, { TagsListProps } from '../molecules/TagsList'

const styles = css`
  .flex {
    cursor: pointer;
    display: flex;
    flex-direction: row;
  }
  .flex:hover {
    color: ${colors.main};
  }
  .digest_left {
    width: 36%;
    height: auto;
    background: ${colors.white};
    margin: auto 0;
  }
  .digest_right {
    fixed: right;
    margin: 10px 10px 10px;
  }
`

export type DigestProps = DigestImageProps &
  DigestBodyProps &
  TagsListProps & {
    slug: string
  }

const Digest: React.FC<DigestProps> = ({
  catchImageUrl,
  href,
  tags,
  ...props
}) => {
  return (
    <Fragment>
      <div className="flex">
        <div className="digest_left">
          <DigestImage catchImageUrl={catchImageUrl} href={href} />
        </div>
        <div className="digest_right">
          <a className="digest_body" href={href}>
            <DigestBody {...props} />
          </a>
          <TagsList tags={tags} />
        </div>
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Digest
