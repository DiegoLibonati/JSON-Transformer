/*
  Warnings:

  - You are about to drop the column `idInputJson` on the `OutputJson` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OutputJson" DROP CONSTRAINT "OutputJson_idInputJson_fkey";

-- AlterTable
ALTER TABLE "OutputJson" DROP COLUMN "idInputJson";
