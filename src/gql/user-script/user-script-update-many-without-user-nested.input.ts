import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScriptCreateWithoutUserInput } from './user-script-create-without-user.input';
import { Type } from 'class-transformer';
import { UserScriptCreateOrConnectWithoutUserInput } from './user-script-create-or-connect-without-user.input';
import { UserScriptUpsertWithWhereUniqueWithoutUserInput } from './user-script-upsert-with-where-unique-without-user.input';
import { UserScriptCreateManyUserInputEnvelope } from './user-script-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserScriptWhereUniqueInput } from './user-script-where-unique.input';
import { UserScriptUpdateWithWhereUniqueWithoutUserInput } from './user-script-update-with-where-unique-without-user.input';
import { UserScriptUpdateManyWithWhereWithoutUserInput } from './user-script-update-many-with-where-without-user.input';
import { UserScriptScalarWhereInput } from './user-script-scalar-where.input';

@InputType()
export class UserScriptUpdateManyWithoutUserNestedInput {

    @Field(() => [UserScriptCreateWithoutUserInput], {nullable:true})
    @Type(() => UserScriptCreateWithoutUserInput)
    create?: Array<UserScriptCreateWithoutUserInput>;

    @Field(() => [UserScriptCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserScriptCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserScriptCreateOrConnectWithoutUserInput>;

    @Field(() => [UserScriptUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserScriptUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserScriptUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserScriptCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserScriptCreateManyUserInputEnvelope)
    createMany?: UserScriptCreateManyUserInputEnvelope;

    @Field(() => [UserScriptWhereUniqueInput], {nullable:true})
    @Type(() => UserScriptWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserScriptWhereUniqueInput, 'userId_scriptId'>>;

    @Field(() => [UserScriptWhereUniqueInput], {nullable:true})
    @Type(() => UserScriptWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserScriptWhereUniqueInput, 'userId_scriptId'>>;

    @Field(() => [UserScriptWhereUniqueInput], {nullable:true})
    @Type(() => UserScriptWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserScriptWhereUniqueInput, 'userId_scriptId'>>;

    @Field(() => [UserScriptWhereUniqueInput], {nullable:true})
    @Type(() => UserScriptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserScriptWhereUniqueInput, 'userId_scriptId'>>;

    @Field(() => [UserScriptUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserScriptUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserScriptUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserScriptUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserScriptUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserScriptUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserScriptScalarWhereInput], {nullable:true})
    @Type(() => UserScriptScalarWhereInput)
    deleteMany?: Array<UserScriptScalarWhereInput>;
}
