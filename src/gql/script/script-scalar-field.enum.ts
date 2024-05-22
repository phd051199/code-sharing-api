import { registerEnumType } from '@nestjs/graphql';

export enum ScriptScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    path = "path",
    bundle = "bundle",
    created_at = "created_at",
    updated_at = "updated_at",
    user_id = "user_id",
    status = "status",
    failed_reason = "failed_reason"
}


registerEnumType(ScriptScalarFieldEnum, { name: 'ScriptScalarFieldEnum', description: undefined })
