-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "video" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
