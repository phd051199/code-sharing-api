import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { AuthProvider } from '../auth-provider/auth-provider.model';
import { Script } from '../script/script.model';
import { UserFavorite } from '../user-favorite/user-favorite.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    userName!: string | null;

    @Field(() => String, {nullable:true})
    displayName!: string | null;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @HideField()
    password!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isVerified!: boolean;

    @Field(() => Date, {nullable:true})
    lastLogin!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => [AuthProvider], {nullable:true})
    authProviders?: Array<AuthProvider>;

    @Field(() => [Script], {nullable:true})
    scripts?: Array<Script>;

    @Field(() => [UserFavorite], {nullable:true})
    userFavorite?: Array<UserFavorite>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
