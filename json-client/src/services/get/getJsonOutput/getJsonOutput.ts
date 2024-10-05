import { jsonApi } from "@/src/services/axios";

export const getJsonOutput = (idOutputJson: string) => {
  return jsonApi.get(`/json/output/${idOutputJson}`);
};
