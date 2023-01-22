import rangeParser from "parse-numeric-range";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const SyntaxHighlight: object = {
  code({ node, inline, className, ...props }) {
    // Set code language declared in code block: ```lang
    const match = /language-(\w+)/.exec(className || "");

    // Check if we have metadata
    const hasMeta = node?.data?.meta;

    // Highlight lines declared in code block: ```lang {2,4-6}
    const applyHighlights: any = (applyHighlights: any) => {
      if (hasMeta) {
        const RE = /{([\d,-]+)}/;
        const metadata = node.data.meta?.replace(/\s/g, "");
        const strlineNumbers = RE.test(metadata) ? RE.exec(metadata)[1] : "0";
        const highlightLines = rangeParser(strlineNumbers);
        const highlight = highlightLines;
        const data: string = highlight.includes(applyHighlights)
          ? "highlight"
          : null;
        return { data };
      } else {
        return {};
      }
    };
    return !inline && match ? (
      <SyntaxHighlighter
        {...applyHighlights()}
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        className="codeStyle"
        showLineNumbers={true}
        wrapLines={true}
        useUnlineStyles={true}
        {...props}
      />
    ) : (
      <code className={"inline-code"} {...props} />
    );
  },
};

export default SyntaxHighlight;
