import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutUsersInput } from './script-create-without-users.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutUsersInput } from './script-create-or-connect-without-users.input';
import { ScriptUpsertWithoutUsersInput } from './script-upsert-without-users.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { ScriptUpdateToOneWithWhereWithoutUsersInput } from './script-update-to-one-with-where-without-users.input';

@InputType()
export class ScriptUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => ScriptCreateWithoutUsersInput, {nullable:true})
    @Type(() => ScriptCreateWithoutUsersInput)
    create?: ScriptCreateWithoutUsersInput;

    @Field(() => ScriptCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutUsersInput)
    connectOrCreate?: ScriptCreateOrConnectWithoutUsersInput;

    @Field(() => ScriptUpsertWithoutUsersInput, {nullable:true})
    @Type(() => ScriptUpsertWithoutUsersInput)
    upsert?: ScriptUpsertWithoutUsersInput;

    @Field(() => ScriptWhereUniqueInput, {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => ScriptUpdateToOneWithWhereWithoutUsersInput)
    update?: ScriptUpdateToOneWithWhereWithoutUsersInput;
}
