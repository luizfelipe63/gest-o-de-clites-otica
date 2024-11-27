/*
  Warnings:

  - Added the required column `date_of_birth` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "date_of_birth" TIMESTAMP(3) NOT NULL;
