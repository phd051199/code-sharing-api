import { registerEnumType } from '@nestjs/graphql';

export enum BundleDetailScalarFieldEnum {
    id = "id",
    scriptId = "scriptId",
    bundlePath = "bundlePath",
    priority = "priority",
    status = "status",
    failedReason = "failedReason",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BundleDetailScalarFieldEnum, { name: 'BundleDetailScalarFieldEnum', description: undefined })
