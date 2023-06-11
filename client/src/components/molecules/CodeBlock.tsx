import React, { Fragment } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeComponent } from "react-markdown/lib/ast-to-react";

const CodeBlock: CodeComponent = ({
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)(:?.+)?/.exec(className || "");
  const lang = match && match[1] ? match[1] : "";
  const name = match && match[2] ? match[2].slice(1) : "";
  return !inline && match ? (
    <Fragment>
      {name && (
        <span className="rounded-md bg-stone-200 py-1 px-2 text-sm dark:bg-stone-600">
          {name}
        </span>
      )}
      <SyntaxHighlighter style={atomDark} lang={lang} PreTag="div">
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </Fragment>
  ) : (
    <code
      className="mx-1 rounded-md bg-stone-200 py-1 px-2 text-red-600 dark:bg-stone-600 dark:text-red-300"
      {...props}
    >
      {children}
    </code>
  );
};

export default CodeBlock;
