import { jsonApi } from "@/src/services/axios";

export const getJsonInput = (idInputJson: string) => {
  return jsonApi.get(`/json/input/${idInputJson}`);
};
