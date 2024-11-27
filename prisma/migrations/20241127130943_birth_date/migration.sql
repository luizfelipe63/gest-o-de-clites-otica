/*
  Warnings:

  - You are about to drop the column `date_of_birth` on the `customers` table. All the data in the column will be lost.
  - Added the required column `birth_data` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customers" DROP COLUMN "date_of_birth",
ADD COLUMN     "birth_data" TIMESTAMP(3) NOT NULL;
