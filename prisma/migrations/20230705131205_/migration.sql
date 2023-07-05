/*
  Warnings:

  - You are about to drop the `ClientsOnClasses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClientsOnClasses" DROP CONSTRAINT "ClientsOnClasses_classId_fkey";

-- DropForeignKey
ALTER TABLE "ClientsOnClasses" DROP CONSTRAINT "ClientsOnClasses_clientId_fkey";

-- DropTable
DROP TABLE "ClientsOnClasses";

-- CreateTable
CREATE TABLE "_ClassToClient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClassToClient_AB_unique" ON "_ClassToClient"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassToClient_B_index" ON "_ClassToClient"("B");

-- AddForeignKey
ALTER TABLE "_ClassToClient" ADD CONSTRAINT "_ClassToClient_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToClient" ADD CONSTRAINT "_ClassToClient_B_fkey" FOREIGN KEY ("B") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE;
