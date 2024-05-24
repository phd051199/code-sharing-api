import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';
import { AuthProviderCreateNestedManyWithoutUserInput } from '../auth-provider/auth-provider-create-nested-many-without-user.input';
import { UserFavoriteCreateNestedManyWithoutUserInput } from '../user-favorite/user-favorite-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutScriptsInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    userName?: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RoleCreateNestedOneWithoutUsersInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUsersInput;

    @Field(() => AuthProviderCreateNestedManyWithoutUserInput, {nullable:true})
    authProviders?: AuthProviderCreateNestedManyWithoutUserInput;

    @Field(() => UserFavoriteCreateNestedManyWithoutUserInput, {nullable:true})
    userFavorite?: UserFavoriteCreateNestedManyWithoutUserInput;
}
