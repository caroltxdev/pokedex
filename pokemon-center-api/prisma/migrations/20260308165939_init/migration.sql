-- DropForeignKey
ALTER TABLE "Pokemon" DROP CONSTRAINT "Pokemon_userId_fkey";

-- CreateIndex
CREATE INDEX "Pokemon_userId_idx" ON "Pokemon"("userId");

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
