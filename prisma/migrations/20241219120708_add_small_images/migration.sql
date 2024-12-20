/*
  Warnings:

  - You are about to drop the column `detailedImageSmall` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "detailedImageSmall";

-- CreateTable
CREATE TABLE "SmallImages" (
    "id" SERIAL NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "SmallImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SmallImages" ADD CONSTRAINT "SmallImages_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
