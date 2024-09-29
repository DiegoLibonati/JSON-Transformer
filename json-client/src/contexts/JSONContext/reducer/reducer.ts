import { JSONAction, JSONState } from "@/src/entities/json-context.d";

export const initialState: JSONState = {
  json: {
    name: "",
    file: null,
    content: "",
  },
  uploading: false,
  uploaded: false,
};

export function reducer(state: JSONState, action: JSONAction): JSONState {
  switch (action.type) {
    case "JSON_UPDATE":
      return {
        ...state,
        json: {
          name: action.payload.name,
          file: action.payload.file,
          content: action.payload.content,
        },
      };
    case "JSON_CONTENT_UPDATE":
      return {
        ...state,
        json: {
          ...state.json,
          content: action.payload.content,
        },
      };
    case "JSON_FILE_UPDATE":
      return {
        ...state,
        json: {
          ...state.json,
          file: action.payload.file,
        },
      };
    case "JSON_CLEAR":
      return {
        ...state,
        json: {
          name: "",
          file: null,
          content: "",
        },
      };
    case "JSON_UPLOADING":
      return {
        ...state,
        uploading: action.payload.uploading,
      };
    case "JSON_UPLOADED":
      return {
        ...state,
        uploaded: true,
      };
    default:
      return state;
  }
}
