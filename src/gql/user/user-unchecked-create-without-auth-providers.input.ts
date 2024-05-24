import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScriptUncheckedCreateNestedManyWithoutUserInput } from '../script/script-unchecked-create-nested-many-without-user.input';
import { UserFavoriteUncheckedCreateNestedManyWithoutUserInput } from '../user-favorite/user-favorite-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutAuthProvidersInput {

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

    @Field(() => ScriptUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    scripts?: ScriptUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserFavoriteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput;
}
