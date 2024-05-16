-- AddForeignKey
ALTER TABLE `users_scripts` ADD CONSTRAINT `users_scripts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_scripts` ADD CONSTRAINT `users_scripts_scriptId_fkey` FOREIGN KEY (`scriptId`) REFERENCES `scripts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
