/*
  Warnings:

  - You are about to drop the column `latitude` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `zoneId` on the `Device` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_zoneId_fkey";

-- AlterTable
ALTER TABLE "Device" DROP COLUMN "latitude",
DROP COLUMN "longitude",
DROP COLUMN "zoneId",
ADD COLUMN     "name" TEXT,
ADD COLUMN     "smartPoleId" INTEGER;

-- CreateTable
CREATE TABLE "SmartPole" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "serial" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "zoneId" INTEGER,

    CONSTRAINT "SmartPole_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_smartPoleId_fkey" FOREIGN KEY ("smartPoleId") REFERENCES "SmartPole"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SmartPole" ADD CONSTRAINT "SmartPole_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE SET NULL ON UPDATE CASCADE;
