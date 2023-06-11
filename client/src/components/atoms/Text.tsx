import React, { FC, HTMLAttributes } from "react";

export type TextProps = HTMLAttributes<HTMLParagraphElement>;

const Text: FC<TextProps> = ({ className, children }) => {
  return (
    <p className={`text-lg text-gray-500 dark:text-gray-300 ${className}`}>
      {children}
    </p>
  );
};
export default Text;
