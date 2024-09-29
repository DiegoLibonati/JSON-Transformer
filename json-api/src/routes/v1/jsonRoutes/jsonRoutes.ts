import express from "express";
import multer from "multer";

import { jsonControllers } from "@/src/controllers/export";

export const jsonRoutes = express.Router();

const upload = multer();

jsonRoutes
  .post("/upload", upload.single("file"), jsonControllers.uploadJson)
  .post("/getContent", upload.single("file"), jsonControllers.getFileContent);
