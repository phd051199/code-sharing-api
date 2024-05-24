import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutScriptsInput } from './category-create-without-scripts.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutScriptsInput } from './category-create-or-connect-without-scripts.input';
import { CategoryUpsertWithoutScriptsInput } from './category-upsert-without-scripts.input';
import { CategoryWhereInput } from './category-where.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateToOneWithWhereWithoutScriptsInput } from './category-update-to-one-with-where-without-scripts.input';

@InputType()
export class CategoryUpdateOneWithoutScriptsNestedInput {

    @Field(() => CategoryCreateWithoutScriptsInput, {nullable:true})
    @Type(() => CategoryCreateWithoutScriptsInput)
    create?: CategoryCreateWithoutScriptsInput;

    @Field(() => CategoryCreateOrConnectWithoutScriptsInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutScriptsInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutScriptsInput;

    @Field(() => CategoryUpsertWithoutScriptsInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutScriptsInput)
    upsert?: CategoryUpsertWithoutScriptsInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    disconnect?: CategoryWhereInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    delete?: CategoryWhereInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateToOneWithWhereWithoutScriptsInput, {nullable:true})
    @Type(() => CategoryUpdateToOneWithWhereWithoutScriptsInput)
    update?: CategoryUpdateToOneWithWhereWithoutScriptsInput;
}
