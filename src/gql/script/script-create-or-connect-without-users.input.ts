import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutUsersInput } from './script-create-without-users.input';

@InputType()
export class ScriptCreateOrConnectWithoutUsersInput {

    @Field(() => ScriptWhereUniqueInput, {nullable:false})
    @Type(() => ScriptWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptCreateWithoutUsersInput, {nullable:false})
    @Type(() => ScriptCreateWithoutUsersInput)
    create!: ScriptCreateWithoutUsersInput;
}
