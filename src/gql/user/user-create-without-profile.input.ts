import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UserScriptCreateNestedManyWithoutUserInput } from '../user-script/user-script-create-nested-many-without-user.input';
import { OAuthProviderCreateNestedManyWithoutUserInput } from '../o-auth-provider/o-auth-provider-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutProfileInput {

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

    @Field(() => UserScriptCreateNestedManyWithoutUserInput, {nullable:true})
    userScripts?: UserScriptCreateNestedManyWithoutUserInput;

    @Field(() => OAuthProviderCreateNestedManyWithoutUserInput, {nullable:true})
    oauthProviders?: OAuthProviderCreateNestedManyWithoutUserInput;
}
