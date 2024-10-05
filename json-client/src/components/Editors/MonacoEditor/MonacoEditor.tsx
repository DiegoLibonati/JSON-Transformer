import React from "react";

import { editor } from "monaco-editor";
import { Editor, OnChange, OnMount } from "@monaco-editor/react";

import { GeneralProps } from "@/src/entities/entities.d";

interface MonacoEditorProps extends GeneralProps {
  language: "json";
  defaultValue: string;
  value: string;
  theme: "vs-dark";
  onChange: OnChange;
  onMount?: OnMount;
  height?: string;
  options?: editor.IStandaloneEditorConstructionOptions;
}

export const MonacoEditor = ({
  height,
  language,
  options,
  theme,
  defaultValue,
  value,
  className,
  onChange,
  onMount,
}: MonacoEditorProps): JSX.Element => {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <Editor
        height={height}
        defaultLanguage={language}
        defaultValue={defaultValue}
        value={value}
        theme={theme}
        options={options}
        onChange={onChange}
        onMount={onMount}
      />
    </div>
  );
};
