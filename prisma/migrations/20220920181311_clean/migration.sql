/*
  Warnings:

  - You are about to drop the `AlertPriority` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Alerts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Device` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeviceType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Formation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Solution` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Zone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_7be49552-d562-4085-b242-164b3a26d6ed` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Alerts" DROP CONSTRAINT "Alerts_deviceId_fkey";

-- DropForeignKey
ALTER TABLE "Alerts" DROP CONSTRAINT "Alerts_priorityId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_typeId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_zoneId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_deviceId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_priorityId_fkey";

-- DropForeignKey
ALTER TABLE "Formation" DROP CONSTRAINT "Formation_regionId_fkey";

-- DropForeignKey
ALTER TABLE "Region" DROP CONSTRAINT "Region_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Zone" DROP CONSTRAINT "Zone_formationId_fkey";

-- DropForeignKey
ALTER TABLE "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d" DROP CONSTRAINT "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d_A_fkey";

-- DropForeignKey
ALTER TABLE "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d" DROP CONSTRAINT "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d_B_fkey";

-- DropForeignKey
ALTER TABLE "_7be49552-d562-4085-b242-164b3a26d6ed" DROP CONSTRAINT "_7be49552-d562-4085-b242-164b3a26d6ed_A_fkey";

-- DropForeignKey
ALTER TABLE "_7be49552-d562-4085-b242-164b3a26d6ed" DROP CONSTRAINT "_7be49552-d562-4085-b242-164b3a26d6ed_B_fkey";

-- DropTable
DROP TABLE "AlertPriority";

-- DropTable
DROP TABLE "Alerts";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "Device";

-- DropTable
DROP TABLE "DeviceType";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "Formation";

-- DropTable
DROP TABLE "Region";

-- DropTable
DROP TABLE "Solution";

-- DropTable
DROP TABLE "Zone";

-- DropTable
DROP TABLE "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d";

-- DropTable
DROP TABLE "_7be49552-d562-4085-b242-164b3a26d6ed";

-- CreateTable
CREATE TABLE "_44448284-3fdf-4810-a924-e77a0f6bedb9" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_44448284-3fdf-4810-a924-e77a0f6bedb9_AB_unique" ON "_44448284-3fdf-4810-a924-e77a0f6bedb9"("A", "B");

-- CreateIndex
CREATE INDEX "_44448284-3fdf-4810-a924-e77a0f6bedb9_B_index" ON "_44448284-3fdf-4810-a924-e77a0f6bedb9"("B");

-- AddForeignKey
ALTER TABLE "_44448284-3fdf-4810-a924-e77a0f6bedb9" ADD CONSTRAINT "_44448284-3fdf-4810-a924-e77a0f6bedb9_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_44448284-3fdf-4810-a924-e77a0f6bedb9" ADD CONSTRAINT "_44448284-3fdf-4810-a924-e77a0f6bedb9_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
