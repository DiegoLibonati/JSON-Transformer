import { jsonApi } from "@/src/services/export";

type Body = {
  idInputJson: string;
  saveOutputJson: boolean;
  outputJsonNameToSave: string;
  contentJsonToTransform: string;
};

export const postTransformJson = (body: Body) => {
  return jsonApi.post("/json/transform", body, { responseType: "blob" });
};
