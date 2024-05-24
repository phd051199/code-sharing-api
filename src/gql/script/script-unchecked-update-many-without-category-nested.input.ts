import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutCategoryInput } from './script-create-without-category.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutCategoryInput } from './script-create-or-connect-without-category.input';
import { ScriptUpsertWithWhereUniqueWithoutCategoryInput } from './script-upsert-with-where-unique-without-category.input';
import { ScriptCreateManyCategoryInputEnvelope } from './script-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { ScriptUpdateWithWhereUniqueWithoutCategoryInput } from './script-update-with-where-unique-without-category.input';
import { ScriptUpdateManyWithWhereWithoutCategoryInput } from './script-update-many-with-where-without-category.input';
import { ScriptScalarWhereInput } from './script-scalar-where.input';

@InputType()
export class ScriptUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [ScriptCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ScriptCreateWithoutCategoryInput)
    create?: Array<ScriptCreateWithoutCategoryInput>;

    @Field(() => [ScriptCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ScriptCreateOrConnectWithoutCategoryInput>;

    @Field(() => [ScriptUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ScriptUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<ScriptUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => ScriptCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ScriptCreateManyCategoryInputEnvelope)
    createMany?: ScriptCreateManyCategoryInputEnvelope;

    @Field(() => [ScriptWhereUniqueInput], {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>>;

    @Field(() => [ScriptWhereUniqueInput], {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>>;

    @Field(() => [ScriptWhereUniqueInput], {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>>;

    @Field(() => [ScriptWhereUniqueInput], {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>>;

    @Field(() => [ScriptUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ScriptUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<ScriptUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [ScriptUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => ScriptUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<ScriptUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [ScriptScalarWhereInput], {nullable:true})
    @Type(() => ScriptScalarWhereInput)
    deleteMany?: Array<ScriptScalarWhereInput>;
}
