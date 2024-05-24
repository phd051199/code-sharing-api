/*
  Warnings:

  - You are about to drop the column `display_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `script_status` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `scripts` ADD COLUMN `path` MEDIUMTEXT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `display_name`,
    ADD COLUMN `displayName` MEDIUMTEXT NULL;

-- DropTable
DROP TABLE `script_status`;

-- CreateTable
CREATE TABLE `bundle_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `script_id` INTEGER NOT NULL,
    `bundle_path` MEDIUMTEXT NULL,
    `priority` INTEGER NULL,
    `status` ENUM('waiting', 'running', 'success', 'failed') NULL,
    `failed_reason` LONGTEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `bundle_detail_script_id_key`(`script_id`),
    INDEX `bundle_detail_script_id_idx`(`script_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
