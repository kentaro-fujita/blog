import Link, { LinkProps } from "next/link";
import React, { FC, HTMLAttributes } from "react";

export type TextLinkProps = HTMLAttributes<HTMLAnchorElement> & LinkProps;

const TextLink: FC<TextLinkProps> = ({
  href,
  className,
  children,
  ...args
}) => {
  return (
    <Link
      href={href}
      passHref
      className={
        className ??
        "text-purple-700 hover:text-purple-500 dark:text-purple-500 dark:hover:text-purple-700"
      }
      {...args}
    >
      {children}
    </Link>
  );
};

export default TextLink;
