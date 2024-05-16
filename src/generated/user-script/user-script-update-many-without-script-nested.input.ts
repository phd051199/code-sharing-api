import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScriptCreateWithoutScriptInput } from './user-script-create-without-script.input';
import { Type } from 'class-transformer';
import { UserScriptCreateOrConnectWithoutScriptInput } from './user-script-create-or-connect-without-script.input';
import { UserScriptUpsertWithWhereUniqueWithoutScriptInput } from './user-script-upsert-with-where-unique-without-script.input';
import { UserScriptCreateManyScriptInputEnvelope } from './user-script-create-many-script-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserScriptWhereUniqueInput } from './user-script-where-unique.input';
import { UserScriptUpdateWithWhereUniqueWithoutScriptInput } from './user-script-update-with-where-unique-without-script.input';
import { UserScriptUpdateManyWithWhereWithoutScriptInput } from './user-script-update-many-with-where-without-script.input';
import { UserScriptScalarWhereInput } from './user-script-scalar-where.input';

@InputType()
export class UserScriptUpdateManyWithoutScriptNestedInput {

    @Field(() => [UserScriptCreateWithoutScriptInput], {nullable:true})
    @Type(() => UserScriptCreateWithoutScriptInput)
    create?: Array<UserScriptCreateWithoutScriptInput>;

    @Field(() => [UserScriptCreateOrConnectWithoutScriptInput], {nullable:true})
    @Type(() => UserScriptCreateOrConnectWithoutScriptInput)
    connectOrCreate?: Array<UserScriptCreateOrConnectWithoutScriptInput>;

    @Field(() => [UserScriptUpsertWithWhereUniqueWithoutScriptInput], {nullable:true})
    @Type(() => UserScriptUpsertWithWhereUniqueWithoutScriptInput)
    upsert?: Array<UserScriptUpsertWithWhereUniqueWithoutScriptInput>;

    @Field(() => UserScriptCreateManyScriptInputEnvelope, {nullable:true})
    @Type(() => UserScriptCreateManyScriptInputEnvelope)
    createMany?: UserScriptCreateManyScriptInputEnvelope;

    @Field(() => [UserScriptWhereUniqueInput], {nullable:true})
    @Type(() => UserScriptWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserScriptWhereUniqueInput, 'id' | 'userId_scriptId'>>;

    @Field(() => [UserScriptWhereUniqueInput], {nullable:true})
    @Type(() => UserScriptWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserScriptWhereUniqueInput, 'id' | 'userId_scriptId'>>;

    @Field(() => [UserScriptWhereUniqueInput], {nullable:true})
    @Type(() => UserScriptWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserScriptWhereUniqueInput, 'id' | 'userId_scriptId'>>;

    @Field(() => [UserScriptWhereUniqueInput], {nullable:true})
    @Type(() => UserScriptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserScriptWhereUniqueInput, 'id' | 'userId_scriptId'>>;

    @Field(() => [UserScriptUpdateWithWhereUniqueWithoutScriptInput], {nullable:true})
    @Type(() => UserScriptUpdateWithWhereUniqueWithoutScriptInput)
    update?: Array<UserScriptUpdateWithWhereUniqueWithoutScriptInput>;

    @Field(() => [UserScriptUpdateManyWithWhereWithoutScriptInput], {nullable:true})
    @Type(() => UserScriptUpdateManyWithWhereWithoutScriptInput)
    updateMany?: Array<UserScriptUpdateManyWithWhereWithoutScriptInput>;

    @Field(() => [UserScriptScalarWhereInput], {nullable:true})
    @Type(() => UserScriptScalarWhereInput)
    deleteMany?: Array<UserScriptScalarWhereInput>;
}
