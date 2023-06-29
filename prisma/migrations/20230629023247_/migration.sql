/*
  Warnings:

  - Added the required column `endAt` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startAt` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "services" ADD COLUMN     "endAt" TEXT NOT NULL,
ADD COLUMN     "startAt" TEXT NOT NULL;
