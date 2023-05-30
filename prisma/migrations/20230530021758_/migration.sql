/*
  Warnings:

  - Added the required column `lots` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startAt` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Class" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lots" INTEGER NOT NULL,
    "startAt" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    CONSTRAINT "Class_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Class" ("companyId", "id", "name") SELECT "companyId", "id", "name" FROM "Class";
DROP TABLE "Class";
ALTER TABLE "new_Class" RENAME TO "Class";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
