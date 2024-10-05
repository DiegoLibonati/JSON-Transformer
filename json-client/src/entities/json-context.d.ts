import { InputJson, OutputJson } from "@/src/entities/entities.d";

export type JSONState = {
  inputJson: InputJson;
  outputJson: OutputJson;
  jsons: {
    inputJsons: InputJson[];
    outputJsons: OutputJson[];
  };
  loading: boolean;
};

export type JSONAction =
  | {
      type: "INPUT_JSON_UPDATE";
      payload: Partial<{
        id: string;
        name: string;
        file: File;
        content: string;
        keys: string[];
      }>;
    }
  | {
      type: "INPUT_JSON_FILE_UPDATE";
      payload: { file: File };
    }
  | {
      type: "INPUT_JSON_CONTENT_UPDATE";
      payload: { content: string };
    }
  | {
      type: "CONTEXT_CLEAR";
      payload: null;
    }
  | {
      type: "INPUT_JSONS";
      payload: {
        inputJsons: InputJson[];
      };
    }
  | {
      type: "OUTPUT_JSONS";
      payload: {
        outputJsons: OutputJson[];
      };
    }
  | {
      type: "OUTPUT_AND_INPUT_JSONS";
      payload: {
        inputJsons: InputJson[];
        outputJsons: OutputJson[];
      };
    }
  | {
      type: "OUTPUT_JSON_UPDATE";
      payload: Partial<{
        id: string;
        name: string;
        model: string;
      }>;
    }
  | {
      type: "OUTPUT_JSON_MODEL_UPDATE";
      payload: { model: string };
    }
  | {
      type: "LOADING";
      payload: { loading: boolean };
    };
