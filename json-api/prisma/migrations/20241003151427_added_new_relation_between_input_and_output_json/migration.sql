-- AlterTable
ALTER TABLE "OutputJson" ADD COLUMN     "idInputJson" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "OutputJson" ADD CONSTRAINT "OutputJson_idInputJson_fkey" FOREIGN KEY ("idInputJson") REFERENCES "InputJson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
