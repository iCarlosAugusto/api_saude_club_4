/*
  Warnings:

  - Added the required column `bannerImage` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "availableDay" TEXT NOT NULL,
    "bannerImage" TEXT NOT NULL
);
INSERT INTO "new_Company" ("availableDay", "id", "name") SELECT "availableDay", "id", "name" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
