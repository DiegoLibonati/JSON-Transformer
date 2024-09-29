import React, { useContext } from "react";

import { MonacoEditor } from "@/src/components/Editors/export";

import { JSONContext } from "@/src/contexts/export";

export const SectionPreviewJson = (): JSX.Element => {
  const { json, handleJsonContentUpdate } = useContext(JSONContext);

  const onChangeEditorContent = (value: string): void => {
    const newContent = value;

    return handleJsonContentUpdate(newContent);
  };

  return (
    <section className="w-full h-auto mt-2">
      <MonacoEditor
        height="100%"
        className="h-[calc(100vh_-_15rem)]"
        defaultValue="{}"
        language="json"
        theme="vs-dark"
        value={json.content}
        onChange={onChangeEditorContent}
      ></MonacoEditor>
    </section>
  );
};
