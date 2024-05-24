import { registerEnumType } from '@nestjs/graphql';

export enum PermissionScalarFieldEnum {
    id = "id",
    roleId = "roleId",
    action = "action",
    subject = "subject",
    inverted = "inverted",
    conditions = "conditions",
    reason = "reason",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PermissionScalarFieldEnum, { name: 'PermissionScalarFieldEnum', description: undefined })
