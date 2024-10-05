-- CreateTable
CREATE TABLE "OutputJson" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,

    CONSTRAINT "OutputJson_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OutputJson_name_key" ON "OutputJson"("name");
