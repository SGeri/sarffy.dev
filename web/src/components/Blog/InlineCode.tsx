import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { InstrictBlogElementType } from ".";

const InlineCode = ({ children, className }: InstrictBlogElementType) => {
  const language = className?.replace("language-", "") || "plaintext";

  return (
    <SyntaxHighlighter
      language={language}
      style={a11yDark}
      customStyle={{
        background: "none",
      }}
      PreTag="span"
      CodeTag="code"
    >
      {String(children)}
    </SyntaxHighlighter>
  );
};

export default InlineCode;
