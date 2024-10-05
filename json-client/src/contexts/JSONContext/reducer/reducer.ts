import { JSONAction, JSONState } from "@/src/entities/json-context.d";

export const initialState: JSONState = {
  inputJson: {
    id: "",
    name: "",
    file: null,
    content: "",
    keys: [],
  },
  outputJson: {
    id: "",
    name: "",
    model: "",
  },
  jsons: {
    inputJsons: [],
    outputJsons: [],
  },
  loading: false,
};

export function reducer(state: JSONState, action: JSONAction): JSONState {
  switch (action.type) {
    case "INPUT_JSON_UPDATE":
      return {
        ...state,
        inputJson: {
          ...state.inputJson,
          id: action.payload.id,
          name: action.payload.name,
          file: action.payload.file,
          content: action.payload.content,
          keys: action.payload.keys,
        },
      };
    case "INPUT_JSON_CONTENT_UPDATE":
      return {
        ...state,
        inputJson: {
          ...state.inputJson,
          content: action.payload.content,
        },
      };
    case "INPUT_JSON_FILE_UPDATE":
      return {
        ...state,
        inputJson: {
          ...state.inputJson,
          file: action.payload.file,
        },
      };
    case "INPUT_JSONS":
      return {
        ...state,
        jsons: {
          ...state.jsons,
          inputJsons: action.payload.inputJsons,
        },
      };
    case "OUTPUT_JSONS":
      return {
        ...state,
        jsons: {
          ...state.jsons,
          outputJsons: action.payload.outputJsons,
        },
      };
    case "OUTPUT_AND_INPUT_JSONS":
      return {
        ...state,
        jsons: {
          ...state.jsons,
          inputJsons: action.payload.inputJsons,
          outputJsons: action.payload.outputJsons,
        },
      };
    case "OUTPUT_JSON_UPDATE":
      return {
        ...state,
        outputJson: {
          ...state.outputJson,
          id: action.payload.id,
          name: action.payload.name,
          model: action.payload.model,
        },
      };
    case "OUTPUT_JSON_MODEL_UPDATE":
      return {
        ...state,
        outputJson: {
          ...state.outputJson,
          model: action.payload.model,
        },
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };
    case "CONTEXT_CLEAR":
      return {
        ...state,
        inputJson: {
          id: "",
          name: "",
          file: null,
          content: "",
          keys: [],
        },
        outputJson: {
          id: "",
          name: "",
          model: "",
        },
        jsons: {
          inputJsons: [],
          outputJsons: [],
        },
      };
    default:
      return state;
  }
}
