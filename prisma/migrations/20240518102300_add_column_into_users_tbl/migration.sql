/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `name`,
    ADD COLUMN `display_name` MEDIUMTEXT NULL,
    ADD COLUMN `user_name` MEDIUMTEXT NULL;
