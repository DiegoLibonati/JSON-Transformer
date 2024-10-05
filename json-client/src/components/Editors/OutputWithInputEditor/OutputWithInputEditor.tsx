import React, { useContext, useEffect, useRef } from "react";

import * as monaco from "monaco-editor";

import { MonacoEditor } from "@/src/components/Editors/export";

import { JSONContext } from "@/src/contexts/export";

export const OutputWithInputEditor = (): JSX.Element => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<typeof monaco | null>(null);
  const completionProviderRef = useRef<monaco.IDisposable | null>(null);

  const { inputJson, outputJson, handleOutputJsonModelUpdate } =
    useContext(JSONContext);

  const onChangeEditorContent = (value: string): void => {
    const newContent = value;
    return handleOutputJsonModelUpdate(newContent);
  };

  useEffect(() => {
    if (!editorRef.current || !monacoRef.current) return;

    if (completionProviderRef.current) {
      completionProviderRef.current.dispose();
    }

    completionProviderRef.current =
      monacoRef.current.languages.registerCompletionItemProvider("json", {
        provideCompletionItems: (model, position) => {
          const word = model.getWordUntilPosition(position);
          const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
          };

          const suggestions = inputJson.keys.map((key) => {
            return {
              label: `input.${key}`,
              kind: monaco.languages.CompletionItemKind.Function,
              insertText: `"input.${key}"`,
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: `Inserts the key: ${key} to refer to the value it represents in the json input`,
              range: range,
            };
          });

          return { suggestions: suggestions };
        },
      });

    return () => {
      if (completionProviderRef.current)
        completionProviderRef.current.dispose();
    };
  }, [inputJson.keys]);

  return (
    <MonacoEditor
      className="h-full"
      defaultValue="{}"
      language="json"
      theme="vs-dark"
      value={outputJson.model}
      onChange={onChangeEditorContent}
      onMount={(editor, monaco) => {
        editorRef.current = editor;
        monacoRef.current = monaco;
      }}
    ></MonacoEditor>
  );
};
