import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Permission } from '../permission/permission.model';
import { User } from '../user/user.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => [Permission], {nullable:true})
    permissions?: Array<Permission>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
