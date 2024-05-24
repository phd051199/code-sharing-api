import { registerEnumType } from '@nestjs/graphql';

export enum BuildStatus {
    waiting = "waiting",
    running = "running",
    uploading = "uploading",
    success = "success",
    failed = "failed"
}


registerEnumType(BuildStatus, { name: 'BuildStatus', description: undefined })
