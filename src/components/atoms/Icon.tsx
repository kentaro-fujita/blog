import React, { HTMLAttributes } from 'react'

export type IconProps = HTMLAttributes<HTMLElement>

const Icon: React.FC<IconProps> = ({ className }) => {
  return <i className={className} />
}
export default Icon
