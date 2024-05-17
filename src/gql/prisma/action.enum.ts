import { registerEnumType } from '@nestjs/graphql';

export enum Action {
    manage = "manage",
    create = "create",
    read = "read",
    update = "update",
    'delete' = "delete"
}


registerEnumType(Action, { name: 'Action', description: undefined })
