import { jsonApi } from "@/src/services/export";

export const postGetFileContent = (formData: FormData) => {
  return jsonApi.post("/json/getContent", formData);
};
