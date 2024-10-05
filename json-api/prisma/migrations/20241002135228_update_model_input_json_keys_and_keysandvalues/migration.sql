-- AlterTable
ALTER TABLE "InputJson" ADD COLUMN     "keys" TEXT[],
ADD COLUMN     "keysAndValues" JSONB NOT NULL DEFAULT '{}';
