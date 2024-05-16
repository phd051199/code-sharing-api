import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScriptCreateWithoutScriptInput } from './user-script-create-without-script.input';
import { Type } from 'class-transformer';
import { UserScriptCreateOrConnectWithoutScriptInput } from './user-script-create-or-connect-without-script.input';
import { UserScriptCreateManyScriptInputEnvelope } from './user-script-create-many-script-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserScriptWhereUniqueInput } from './user-script-where-unique.input';

@InputType()
export class UserScriptCreateNestedManyWithoutScriptInput {

    @Field(() => [UserScriptCreateWithoutScriptInput], {nullable:true})
    @Type(() => UserScriptCreateWithoutScriptInput)
    create?: Array<UserScriptCreateWithoutScriptInput>;

    @Field(() => [UserScriptCreateOrConnectWithoutScriptInput], {nullable:true})
    @Type(() => UserScriptCreateOrConnectWithoutScriptInput)
    connectOrCreate?: Array<UserScriptCreateOrConnectWithoutScriptInput>;

    @Field(() => UserScriptCreateManyScriptInputEnvelope, {nullable:true})
    @Type(() => UserScriptCreateManyScriptInputEnvelope)
    createMany?: UserScriptCreateManyScriptInputEnvelope;

    @Field(() => [UserScriptWhereUniqueInput], {nullable:true})
    @Type(() => UserScriptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserScriptWhereUniqueInput, 'id' | 'userId_scriptId'>>;
}
