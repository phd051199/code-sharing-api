-- AlterTable
ALTER TABLE `bundle_detail` MODIFY `status` ENUM('waiting', 'running', 'uploading', 'success', 'failed') NULL;
