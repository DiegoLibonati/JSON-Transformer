import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { getError } from "@/src/helpers/getError";

const prisma = new PrismaClient();

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
    try {
      // const file = req.file;
      const body: { name: string; content: string } = req.body;

      const name = body.name.trim();
      const content = body.content;

      if (!name || !content) {
        res.status(400).json({
          message: "You must send a valid name and content!",
        });
      }

      const json = await prisma.jsonModel.create({
        data: {
          name: body.name,
          content: body.content,
        },
      });

      res.status(201).json({
        message: "¡JSON Uploaded!",
        data: {
          json: json,
        },
      });
    } catch (e: unknown) {
      res.status(400).json({
        message: getError(e),
      });
    }
  },
};
