-- CreateEnum
CREATE TYPE "VehicleType" AS ENUM ('Unselected', 'Cabrio_Roadster', 'Kleinwagen', 'Limousine', 'Van_Minibus', 'Gelaendewagen_Pickup_SUV', 'Kombi', 'Sportwagen_Coupe', 'Andere');

-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('Unselected', 'Neu', 'Gebraucht', 'Jahreswagen', 'Oldtimer', 'Vorfuehrfahrzeug');

-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('Unselected', 'Benzin', 'Diesel', 'Elektro', 'Ethanol', 'Hybrid_Diesel_Elektro', 'Hybrid_Benzin_Elektro', 'Plug_in_Hybrid', 'Wasserstoff', 'Autogas_LPG', 'Erdgas_CNG', 'Andere');

-- CreateEnum
CREATE TYPE "Drivetrain" AS ENUM ('Unselected', 'Frontantrieb', 'Heckantrieb', 'Allrad');

-- CreateEnum
CREATE TYPE "Transmission" AS ENUM ('Unselected', 'Automatik', 'Halbautomatik', 'Schaltgetriebe');

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "vehicleType" "VehicleType" NOT NULL,
    "seats" INTEGER NOT NULL,
    "doors" INTEGER NOT NULL,
    "condition" "Condition" NOT NULL,
    "price" INTEGER NOT NULL,
    "firstRegistration" TEXT NOT NULL,
    "mileage" INTEGER NOT NULL,
    "fuelType" "FuelType" NOT NULL,
    "power" INTEGER NOT NULL,
    "engineCapacity" INTEGER NOT NULL,
    "drivetrain" "Drivetrain" NOT NULL,
    "transmission" "Transmission" NOT NULL,
    "vin" TEXT NOT NULL,
    "accidentFree" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "sold" BOOLEAN NOT NULL DEFAULT false,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" TEXT,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "carId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inquiry" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "carId" TEXT NOT NULL,

    CONSTRAINT "Inquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adminId" TEXT NOT NULL,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_vin_key" ON "Car"("vin");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inquiry" ADD CONSTRAINT "Inquiry_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
