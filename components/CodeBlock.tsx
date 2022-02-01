import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import nord from "react-syntax-highlighter/dist/cjs/prism";
type Props = {
  language: string;
  value: string;
};

const CodeBlock: React.FC<Props> = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={nord}
      wrapLines={true}
      showLineNumbers
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
