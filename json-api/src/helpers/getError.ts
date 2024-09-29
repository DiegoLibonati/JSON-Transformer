import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const getError = (e: unknown): string => {
  if (e instanceof PrismaClientKnownRequestError && e.code === "P2002") {
    return "A JSON with the specified name already exists in the database!";
  }

  return "Failure to load custom message for this error";
};
