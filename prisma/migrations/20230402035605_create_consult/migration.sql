-- CreateTable
CREATE TABLE "consults" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "doctorName" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "consults_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
