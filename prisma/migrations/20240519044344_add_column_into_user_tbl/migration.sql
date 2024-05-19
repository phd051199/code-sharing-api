-- AlterTable
ALTER TABLE `users` ADD COLUMN `avatar` MEDIUMTEXT NULL,
    ADD COLUMN `is_verified` BOOLEAN NOT NULL DEFAULT false;
