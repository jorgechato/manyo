import { useEffect } from 'react';

import hljs from 'highlight.js/lib/core';
import { CodeBlockProps } from './CodeBlock.types';


export function CodeBlock(props: CodeBlockProps) {
  const language: string = props.className?.replace('lang-', '') || '';

  if (language == '') return <code className="before:content-[''] after:content-[''] nohighlight">{props.children}</code>;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <code className={`language-${language}`}>
      {props.children}
    </code>
  );
}