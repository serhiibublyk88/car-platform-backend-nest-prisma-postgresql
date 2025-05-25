/*
  Warnings:

  - Added the required column `name` to the `Inquiry` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `Inquiry` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Inquiry" ADD COLUMN     "isHandled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isRead" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "email" SET NOT NULL;
