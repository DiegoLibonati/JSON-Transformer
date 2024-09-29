import { Request, Response } from "express";

export const jsonControllers = {
  getFileContent: async (req: Request, res: Response) => {
    const file = req.file;
    const content = file!.buffer.toString("utf-8");

    res.status(200).json({
      message: "¡Successfully obtained the contents of the file!",
      content: content,
    });
  },
  uploadJson: async (req: Request, res: Response) => {
    const file = req.file;
    const body: { name: string; content: string } = req.body;

    console.log("Llego el BODY: ", body);
    console.log("Llego el File: ", file);

    res.status(201).json({
      message: "¡JSON Uploaded!",
    });
  },
};
