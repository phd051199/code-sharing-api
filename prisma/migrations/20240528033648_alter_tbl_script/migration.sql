/*
  Warnings:

  - You are about to drop the column `bundle` on the `scripts` table. All the data in the column will be lost.
  - You are about to drop the column `failed_reason` on the `scripts` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `scripts` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `scripts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `scripts` DROP COLUMN `bundle`,
    DROP COLUMN `failed_reason`,
    DROP COLUMN `path`,
    DROP COLUMN `status`;

-- CreateTable
CREATE TABLE `script_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `script_id` INTEGER NOT NULL,
    `path` MEDIUMTEXT NULL,
    `bundle` MEDIUMTEXT NULL,
    `priority` INTEGER NULL,
    `status` ENUM('waiting', 'running', 'success', 'failed') NULL,
    `failed_reason` LONGTEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `script_status_script_id_idx`(`script_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
