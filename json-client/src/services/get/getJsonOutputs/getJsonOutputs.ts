import { jsonApi } from "@/src/services/axios";

export const getJsonOutputs = () => {
  return jsonApi.get("/json/outputs");
};
