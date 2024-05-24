import { registerEnumType } from '@nestjs/graphql';

export enum BuildDetailScalarFieldEnum {
    id = "id",
    script_id = "script_id",
    path = "path",
    bundle = "bundle",
    priority = "priority",
    status = "status",
    failed_reason = "failed_reason",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(BuildDetailScalarFieldEnum, { name: 'BuildDetailScalarFieldEnum', description: undefined })
