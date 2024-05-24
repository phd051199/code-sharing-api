import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AuthProviderUncheckedCreateNestedManyWithoutUserInput } from '../auth-provider/auth-provider-unchecked-create-nested-many-without-user.input';
import { ScriptUncheckedCreateNestedManyWithoutUserInput } from '../script/script-unchecked-create-nested-many-without-user.input';
import { UserFavoriteUncheckedCreateNestedManyWithoutUserInput } from '../user-favorite/user-favorite-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    userName?: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => Int, {nullable:false})
    roleId!: number;

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

    @Field(() => AuthProviderUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    authProviders?: AuthProviderUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ScriptUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    scripts?: ScriptUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserFavoriteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
}
