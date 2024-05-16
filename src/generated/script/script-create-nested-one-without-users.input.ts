import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutUsersInput } from './script-create-without-users.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutUsersInput } from './script-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';

@InputType()
export class ScriptCreateNestedOneWithoutUsersInput {

    @Field(() => ScriptCreateWithoutUsersInput, {nullable:true})
    @Type(() => ScriptCreateWithoutUsersInput)
    create?: ScriptCreateWithoutUsersInput;

    @Field(() => ScriptCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutUsersInput)
    connectOrCreate?: ScriptCreateOrConnectWithoutUsersInput;

    @Field(() => ScriptWhereUniqueInput, {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;
}
