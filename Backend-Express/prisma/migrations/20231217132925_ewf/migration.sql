-- AlterTable
ALTER TABLE `foto` ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Foto` ADD CONSTRAINT `Foto_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
