/*
  Warnings:

  - A unique constraint covering the columns `[userId,id]` on the table `orders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED');

-- CreateIndex
CREATE UNIQUE INDEX "orders_userId_id_key" ON "orders"("userId", "id");
