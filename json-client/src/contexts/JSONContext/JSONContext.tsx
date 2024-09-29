import React, { Reducer, createContext, useReducer } from "react";

import { Json } from "@/src/entities/entities";
import { JSONAction, JSONState } from "@/src/entities/json-context.d";

import {
  initialState,
  reducer,
} from "@/src/contexts/JSONContext/reducer/reducer";

interface JSONContextProps {
  json: Json;
  uploading: boolean;
  uploaded: boolean;
  handleUpdateJson: (json: Json) => void;
  handleJsonContentUpdate: (content: string) => void;
  handleJsonFileUpdate: (file: File) => void;
  handleClearJson: () => void;
  handleJsonUploading: (uploading: boolean) => void;
  handleJsonUploaded: () => void;
}

interface JSONProviderProps {
  children: React.ReactNode;
}

export const JSONContext = createContext<JSONContextProps | undefined>(
  undefined
);

export const JSONProvider: React.FunctionComponent<JSONProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<Reducer<JSONState, JSONAction>>(
    reducer,
    initialState
  );

  const handleUpdateJson = (json: Json): void => {
    return dispatch({
      type: "JSON_UPDATE",
      payload: { name: json.name, file: json.file, content: json.content },
    });
  };

  const handleJsonContentUpdate = (content: string): void => {
    return dispatch({
      type: "JSON_CONTENT_UPDATE",
      payload: { content: content },
    });
  };

  const handleJsonFileUpdate = (file: File): void => {
    return dispatch({
      type: "JSON_FILE_UPDATE",
      payload: { file: file },
    });
  };

  const handleClearJson = (): void => {
    return dispatch({
      type: "JSON_CLEAR",
      payload: null,
    });
  };

  const handleJsonUploading = (uploading: boolean): void => {
    return dispatch({
      type: "JSON_UPLOADING",
      payload: {
        uploading: uploading,
      },
    });
  };

  const handleJsonUploaded = (): void => {
    return dispatch({
      type: "JSON_UPLOADED",
      payload: null,
    });
  };

  return (
    <JSONContext.Provider
      value={{
        json: state.json,
        uploading: state.uploading,
        uploaded: state.uploaded,
        handleUpdateJson: handleUpdateJson,
        handleJsonFileUpdate: handleJsonFileUpdate,
        handleJsonContentUpdate: handleJsonContentUpdate,
        handleClearJson: handleClearJson,
        handleJsonUploading: handleJsonUploading,
        handleJsonUploaded: handleJsonUploaded,
      }}
    >
      {children}
    </JSONContext.Provider>
  );
};
