"use client";

import React from "react";

const parseHTMLString = (htmlString: string): React.ReactNode => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const body = doc.body;

  const convertNodeToReact = (
    node: ChildNode,
    index: number
  ): React.ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent; // Return plain text
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;
      const children = Array.from(element.childNodes).map(convertNodeToReact);
      return React.createElement(
        element.tagName.toLowerCase(),
        { key: index },
        ...children
      );
    }

    return null; // Ignore other node types
  };

  return Array.from(body.childNodes).map((child, index) =>
    convertNodeToReact(child, index)
  );
};

export const ts = (htmlString: string): React.ReactNode => {
  return parseHTMLString(htmlString);
};
