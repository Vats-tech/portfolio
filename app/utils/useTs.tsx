// The hook for retrieving and formatting messages.
//  It takes a messages object and returns a function that can be used to retrieve messages by key and format them with values.

import { useCallback } from "react";

interface Messages {
  [key: string]: string;
}

interface valuesType {
  [key: string]: string | number | boolean;
}

export const useTs = () => {
  const ts = useCallback(
    (messageObj: Messages, values: valuesType = {}): string => {
      if (!messageObj || !messageObj[Object.keys(messageObj)[0]]) {
        console.warn(`Invalid message object provided.`);
        return "";
      }

      // Extract the message template from the object
      const message = Object.values(messageObj)[0];

      // Replace placeholders with provided values
      const messageWithValues = Object.keys(values).reduce((msg, key) => {
        const placeholder = `{${key}}`;
        const value = values[key];
        return msg.replaceAll(placeholder, value);
      }, message);

      // Render as HTML/JSX
      // return hasHTML ? (
      //   <span dangerouslySetInnerHTML={{ __html: messageWithValues }} />
      // ) : (
      //   messageWithValues
      // );
      return messageWithValues;
    },
    []
  );

  return ts;
};
