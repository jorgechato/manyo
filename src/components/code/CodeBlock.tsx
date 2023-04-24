'use client';
import React, { useEffect } from 'react';

import hljs from 'highlight.js/lib/core';


type CodeBlockProps = {
    className?: string;
    children: any;
}


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