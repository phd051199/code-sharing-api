import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutUserInput } from './script-create-without-user.input';

@InputType()
export class ScriptCreateOrConnectWithoutUserInput {

    @Field(() => ScriptWhereUniqueInput, {nullable:false})
    @Type(() => ScriptWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptCreateWithoutUserInput, {nullable:false})
    @Type(() => ScriptCreateWithoutUserInput)
    create!: ScriptCreateWithoutUserInput;
}
