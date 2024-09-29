import { Json } from "@/src/entities/entities.d";

export type JSONState = {
  json: Json;
};

export type JSONAction =
  | {
      type: "JSON_UPDATE";
      payload: { name: string; file: File; content: string };
    }
  | {
      type: "JSON_FILE_UPDATE";
      payload: { file: File };
    }
  | {
      type: "JSON_CONTENT_UPDATE";
      payload: { content: string };
    }
  | {
      type: "JSON_CLEAR";
      payload: null;
    };
