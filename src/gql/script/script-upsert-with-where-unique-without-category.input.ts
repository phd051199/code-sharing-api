import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { Type } from 'class-transformer';
import { ScriptUpdateWithoutCategoryInput } from './script-update-without-category.input';
import { ScriptCreateWithoutCategoryInput } from './script-create-without-category.input';

@InputType()
export class ScriptUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => ScriptWhereUniqueInput, {nullable:false})
    @Type(() => ScriptWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ScriptUpdateWithoutCategoryInput)
    update!: ScriptUpdateWithoutCategoryInput;

    @Field(() => ScriptCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ScriptCreateWithoutCategoryInput)
    create!: ScriptCreateWithoutCategoryInput;
}
