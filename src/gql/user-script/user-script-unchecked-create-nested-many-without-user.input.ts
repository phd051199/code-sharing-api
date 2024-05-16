import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScriptCreateWithoutUserInput } from './user-script-create-without-user.input';
import { Type } from 'class-transformer';
import { UserScriptCreateOrConnectWithoutUserInput } from './user-script-create-or-connect-without-user.input';
import { UserScriptCreateManyUserInputEnvelope } from './user-script-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserScriptWhereUniqueInput } from './user-script-where-unique.input';

@InputType()
export class UserScriptUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserScriptCreateWithoutUserInput], {nullable:true})
    @Type(() => UserScriptCreateWithoutUserInput)
    create?: Array<UserScriptCreateWithoutUserInput>;

    @Field(() => [UserScriptCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserScriptCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserScriptCreateOrConnectWithoutUserInput>;

    @Field(() => UserScriptCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserScriptCreateManyUserInputEnvelope)
    createMany?: UserScriptCreateManyUserInputEnvelope;

    @Field(() => [UserScriptWhereUniqueInput], {nullable:true})
    @Type(() => UserScriptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserScriptWhereUniqueInput, 'userId_scriptId'>>;
}
