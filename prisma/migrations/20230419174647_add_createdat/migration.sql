-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_consults" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "partnerId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "isFinished" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "consults_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "consults_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_consults" ("clientId", "id", "isFinished", "partnerId") SELECT "clientId", "id", "isFinished", "partnerId" FROM "consults";
DROP TABLE "consults";
ALTER TABLE "new_consults" RENAME TO "consults";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
