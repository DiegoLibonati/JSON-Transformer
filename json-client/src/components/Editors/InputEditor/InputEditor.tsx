import React, { useContext } from "react";

import { MonacoEditor } from "@/src/components/Editors/export";

import { JSONContext } from "@/src/contexts/export";

export const InputEditor = (): JSX.Element => {
  const { inputJson, handleInputJsonContentUpdate } = useContext(JSONContext);

  const onChangeEditorContent = (value: string): void => {
    const newContent = value;

    return handleInputJsonContentUpdate(newContent);
  };

  return (
    <MonacoEditor
      className="h-full"
      defaultValue="{}"
      language="json"
      theme="vs-dark"
      value={inputJson.content}
      onChange={onChangeEditorContent}
    ></MonacoEditor>
  );
};
