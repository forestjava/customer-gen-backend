/*
  Warnings:

  - You are about to drop the `Attribute` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Entity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Attribute" DROP CONSTRAINT "Attribute_entityId_fkey";

-- DropForeignKey
ALTER TABLE "Attribute" DROP CONSTRAINT "Attribute_typeReferenceId_fkey";

-- DropForeignKey
ALTER TABLE "Attribute" DROP CONSTRAINT "Attribute_typeReferencePresentId_fkey";

-- DropTable
DROP TABLE "Attribute";

-- DropTable
DROP TABLE "Entity";

-- DropEnum
DROP TYPE "Type";

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "companyId" INTEGER,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Formation" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "regionId" INTEGER,

    CONSTRAINT "Formation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "typeId" INTEGER,
    "uuid" TEXT,
    "zoneId" INTEGER,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solution" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Solution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alerts" (
    "id" SERIAL NOT NULL,
    "priorityId" INTEGER,
    "message" TEXT,
    "deviceId" INTEGER,

    CONSTRAINT "Alerts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlertPriority" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "AlertPriority_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Zone" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "formationId" INTEGER,

    CONSTRAINT "Zone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceType" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "DeviceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "moment" TIMESTAMP(3),
    "deviceId" INTEGER,
    "message" TEXT,
    "priorityId" INTEGER,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d_AB_unique" ON "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d"("A", "B");

-- CreateIndex
CREATE INDEX "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d_B_index" ON "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d"("B");

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Formation" ADD CONSTRAINT "Formation_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "DeviceType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alerts" ADD CONSTRAINT "Alerts_priorityId_fkey" FOREIGN KEY ("priorityId") REFERENCES "AlertPriority"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alerts" ADD CONSTRAINT "Alerts_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zone" ADD CONSTRAINT "Zone_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "Formation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_priorityId_fkey" FOREIGN KEY ("priorityId") REFERENCES "AlertPriority"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d" ADD CONSTRAINT "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d_A_fkey" FOREIGN KEY ("A") REFERENCES "Formation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d" ADD CONSTRAINT "_0fd51c24-bfe3-4d6e-86f7-2edb50f65d3d_B_fkey" FOREIGN KEY ("B") REFERENCES "Solution"("id") ON DELETE CASCADE ON UPDATE CASCADE;
