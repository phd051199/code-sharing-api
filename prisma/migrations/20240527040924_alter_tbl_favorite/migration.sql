/*
  Warnings:

  - A unique constraint covering the columns `[user_id,script_id]` on the table `user_favorites` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `user_favorites_user_id_script_id_key` ON `user_favorites`(`user_id`, `script_id`);
