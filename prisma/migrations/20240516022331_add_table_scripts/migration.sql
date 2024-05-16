-- AlterTable
ALTER TABLE `users` MODIFY `name` MEDIUMTEXT NULL,
    MODIFY `password` MEDIUMTEXT NULL;

-- CreateTable
CREATE TABLE `scripts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TINYTEXT NULL,
    `description` LONGTEXT NULL,
    `path` MEDIUMTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_scripts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `scriptId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `users_scripts_userId_idx`(`userId`),
    INDEX `users_scripts_scriptId_idx`(`scriptId`),
    UNIQUE INDEX `users_scripts_userId_scriptId_key`(`userId`, `scriptId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
