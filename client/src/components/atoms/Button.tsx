import React, { ButtonHTMLAttributes, FC } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={
        className ??
        "py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-purple-700 hover:bg-purple-500"
      }
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
