/*
  Warnings:

  - You are about to drop the `JsonModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "JsonModel";

-- CreateTable
CREATE TABLE "InputJson" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "InputJson_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InputJson_name_key" ON "InputJson"("name");
