import { jsonApi } from "@/src/services/axios";

export const getJsonInputs = () => {
  return jsonApi.get("/json/inputs");
};
