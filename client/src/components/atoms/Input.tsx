import React, { FC, InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={
        className ??
        "w-full h-12 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg lg:w-32 xl:transition-all xl:duration-300 xl:w-64 xl:focus:w-44 lg:h-10 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-purple-700 dark:focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700 dark:placeholder-gray-400 focus:ring-opacity-40"
      }
      {...props}
    />
  );
};

export default Input;
