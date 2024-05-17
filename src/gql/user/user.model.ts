import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { AuthProvider } from '../auth-provider/auth-provider.model';
import { Script } from '../script/script.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    user_name!: string | null;

    @Field(() => String, {nullable:true})
    display_name!: string | null;

    @Field(() => Int, {nullable:false})
    role_id!: number;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => Date, {nullable:true})
    last_login!: Date | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => [AuthProvider], {nullable:true})
    auth_providers?: Array<AuthProvider>;

    @Field(() => [Script], {nullable:true})
    scripts?: Array<Script>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
