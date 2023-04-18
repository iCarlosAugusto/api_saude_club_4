/*
  Warnings:

  - Made the column `phoneNumber` on table `partners` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_partners" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "photo" TEXT,
    "password" TEXT NOT NULL,
    "specialties" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "servicePrice" TEXT NOT NULL,
    "jobDescription" TEXT NOT NULL
);
INSERT INTO "new_partners" ("address", "createdAt", "email", "id", "jobDescription", "name", "password", "phoneNumber", "photo", "servicePrice", "specialties") SELECT "address", "createdAt", "email", "id", "jobDescription", "name", "password", "phoneNumber", "photo", "servicePrice", "specialties" FROM "partners";
DROP TABLE "partners";
ALTER TABLE "new_partners" RENAME TO "partners";
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_users" ("createdAt", "email", "id", "name", "password", "phoneNumber", "photo") SELECT "createdAt", "email", "id", "name", "password", "phoneNumber", "photo" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
