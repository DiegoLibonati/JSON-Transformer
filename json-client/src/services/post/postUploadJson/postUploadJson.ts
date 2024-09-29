import { jsonApi } from "@/src/services/export";

export const postUploadJson = (formData: FormData) => {
  return jsonApi.post("/json/upload", formData);
};
