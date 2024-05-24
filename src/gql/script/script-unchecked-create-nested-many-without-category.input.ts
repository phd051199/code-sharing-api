import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutCategoryInput } from './script-create-without-category.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutCategoryInput } from './script-create-or-connect-without-category.input';
import { ScriptCreateManyCategoryInputEnvelope } from './script-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';

@InputType()
export class ScriptUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [ScriptCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ScriptCreateWithoutCategoryInput)
    create?: Array<ScriptCreateWithoutCategoryInput>;

    @Field(() => [ScriptCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ScriptCreateOrConnectWithoutCategoryInput>;

    @Field(() => ScriptCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ScriptCreateManyCategoryInputEnvelope)
    createMany?: ScriptCreateManyCategoryInputEnvelope;

    @Field(() => [ScriptWhereUniqueInput], {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>>;
}
