import React, { FC, HTMLAttributes } from "react";

export type IconProps = HTMLAttributes<HTMLElement>;

const Icon: FC<IconProps> = ({ className }) => {
  return <i className={className} />;
};

export default Icon;
