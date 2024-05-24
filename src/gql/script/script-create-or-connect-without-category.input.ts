import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutCategoryInput } from './script-create-without-category.input';

@InputType()
export class ScriptCreateOrConnectWithoutCategoryInput {

    @Field(() => ScriptWhereUniqueInput, {nullable:false})
    @Type(() => ScriptWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ScriptCreateWithoutCategoryInput)
    create!: ScriptCreateWithoutCategoryInput;
}
