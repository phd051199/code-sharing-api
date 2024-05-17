import { registerEnumType } from '@nestjs/graphql';

export enum PermissionScalarFieldEnum {
    id = "id",
    role_id = "role_id",
    action = "action",
    subject = "subject",
    inverted = "inverted",
    conditions = "conditions",
    reason = "reason",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(PermissionScalarFieldEnum, { name: 'PermissionScalarFieldEnum', description: undefined })
