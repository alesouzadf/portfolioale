/*
  Warnings:

  - You are about to drop the `_ProjetosToTecnologia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProjetosToTecnologia" DROP CONSTRAINT "_ProjetosToTecnologia_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjetosToTecnologia" DROP CONSTRAINT "_ProjetosToTecnologia_B_fkey";

-- DropTable
DROP TABLE "_ProjetosToTecnologia";

-- CreateTable
CREATE TABLE "_ProjetoToTecnologia" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjetoToTecnologia_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjetoToTecnologia_B_index" ON "_ProjetoToTecnologia"("B");

-- AddForeignKey
ALTER TABLE "_ProjetoToTecnologia" ADD CONSTRAINT "_ProjetoToTecnologia_A_fkey" FOREIGN KEY ("A") REFERENCES "projetos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjetoToTecnologia" ADD CONSTRAINT "_ProjetoToTecnologia_B_fkey" FOREIGN KEY ("B") REFERENCES "tecnologias"("id") ON DELETE CASCADE ON UPDATE CASCADE;
