-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "service_name" TEXT NOT NULL,
    "service_description" TEXT NOT NULL,
    "service_price" DOUBLE PRECISION NOT NULL,
    "service_duration" INTEGER NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);
