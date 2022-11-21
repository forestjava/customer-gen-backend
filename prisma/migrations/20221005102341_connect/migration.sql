-- AlterTable
ALTER TABLE "Device" ADD COLUMN     "connectParamIndex" TEXT;

-- AlterTable
ALTER TABLE "SmartPole" ADD COLUMN     "connectDeviceId" TEXT,
ADD COLUMN     "connectLocationId" DOUBLE PRECISION;
