import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import colors from '../../configs/colors.json'
import DigestBody, { DigestBodyProps } from '../molecules/DigestBody'
import DigestImage, { DigestImageProps } from '../molecules/DigestImage'

const styles = css`
  .flex {
    cursor: pointer;
    display: flex;
    flex-direction: row;
  }
  .flex:hover {
    /* transition: all 0.2s ease 0s; */
    color: ${colors.main};
    background: ${colors.light_purple};
    /* border: 2px solid ${colors.main}; */
  }
  .digest_left {
    background: ${colors.white};
    margin: auto 0 auto 0;
    width: 300px;
    height: 200px;
  }
  .digest_right {
    fixed: right;
    margin: 10px 10px 10px;
  }
`

export type DigestProps = DigestImageProps & DigestBodyProps

const Digest: React.FC<DigestProps> = ({ catchImageUrl, ...props }) => {
  return (
    <Fragment>
      <div className="flex">
        <div className="digest_left">
          <DigestImage catchImageUrl={catchImageUrl} />
        </div>
        <div className="digest_right">
          <DigestBody {...props} />
        </div>
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default Digest
