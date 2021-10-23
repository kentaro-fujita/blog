import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import colors from '../../configs/colors.json'
import DigestBody, { DigestBodyProps } from '../molecules/DigestBody'
import DigestImage, { DigestImageProps } from '../molecules/DigestImage'
import TagsList, { TagsListProps } from '../molecules/TagsList'

const styles = css`
  .digest {
    cursor: pointer;
    display: flex;
    flex-direction: row;
  }
  .digest:hover {
    color: ${colors.main};
  }
  .digest_left {
    width: 36%;
    height: auto;
    background: ${colors.white};
    overflow: hidden;
    margin: auto 0;
    transition: transform all 0.2s;
  }
  .digest:hover .digest_image {
    transform: scale(1.2, 1.2);
    transition: transform all 0.2s;
  }
  .digest_right {
    fixed: right;
    margin: 10px 10px 10px;
  }
  @media screen and (max-width: 640px) {
    .digest {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      border: 1px solid ${colors.light_gray};
      padding: 5px 0 5px;
      margin: 10px 10px 10px;
      border-radius: 2em;
    }
    .digest_left {
      width: 100%;
      height: auto;
      background: ${colors.white};
      margin: auto 0;
    }
  }
`

export type DigestProps = DigestImageProps & DigestBodyProps & TagsListProps

const Digest: React.FC<DigestProps> = ({ catchImageUrl, tags, ...props }) => {
  return (
    <Fragment>
      <div className="digest">
        <div className="digest_left">
          <div className="digest_image">
            {/* <DigestImage catchImageUrl={catchImageUrl} /> */}
          </div>
        </div>
        <div className="digest_right">
          <div className="digest_body">
            <DigestBody {...props} />
          </div>
          <TagsList tags={tags} />
        </div>
      </div>
      {/* <style jsx>{styles}</style> */}
    </Fragment>
  )
}
export default Digest
