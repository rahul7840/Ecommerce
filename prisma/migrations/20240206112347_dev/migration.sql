-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "full_name" TEXT,
    "user_name" TEXT,
    "phone_number" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "address" TEXT,
    "gender" TEXT,
    "profile_img" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_user_name_key" ON "user"("user_name");
