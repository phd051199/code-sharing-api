import { registerEnumType } from '@nestjs/graphql';

export enum ScriptStatus {
    waiting = "waiting",
    running = "running",
    success = "success",
    failed = "failed"
}


registerEnumType(ScriptStatus, { name: 'ScriptStatus', description: undefined })
