import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UserScriptUncheckedCreateNestedManyWithoutUserInput } from '../user-script/user-script-unchecked-create-nested-many-without-user.input';
import { OAuthProviderUncheckedCreateNestedManyWithoutUserInput } from '../o-auth-provider/o-auth-provider-unchecked-create-nested-many-without-user.input';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserScriptUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userScripts?: UserScriptUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => OAuthProviderUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    oauthProviders?: OAuthProviderUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
}
