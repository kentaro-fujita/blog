import React, { FC, HTMLAttributes } from "react";

export type TitleProps = HTMLAttributes<HTMLDivElement> & {
  type: string;
};

const Title: FC<TitleProps> = ({ type, className, children }) => {
  return (
    <div className="text-gray-700 dark:text-gray-100 font-semibold">
      {type === "h1" && (
        <h1 className={`text-4xl  ${className}`}>{children}</h1>
      )}
      {type === "h2" && <h2 className={`text-2xl ${className}`}>{children}</h2>}
      {type === "h3" && <h3 className={`text-xl ${className}`}>{children}</h3>}
    </div>
  );
};

export default Title;
