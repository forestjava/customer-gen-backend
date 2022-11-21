-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "roleId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "UserGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_7be49552-d562-4085-b242-164b3a26d6ed" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_7be49552-d562-4085-b242-164b3a26d6ed_AB_unique" ON "_7be49552-d562-4085-b242-164b3a26d6ed"("A", "B");

-- CreateIndex
CREATE INDEX "_7be49552-d562-4085-b242-164b3a26d6ed_B_index" ON "_7be49552-d562-4085-b242-164b3a26d6ed"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "UserRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_7be49552-d562-4085-b242-164b3a26d6ed" ADD CONSTRAINT "_7be49552-d562-4085-b242-164b3a26d6ed_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_7be49552-d562-4085-b242-164b3a26d6ed" ADD CONSTRAINT "_7be49552-d562-4085-b242-164b3a26d6ed_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
