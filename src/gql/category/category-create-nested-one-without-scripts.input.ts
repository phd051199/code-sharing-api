import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutScriptsInput } from './category-create-without-scripts.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutScriptsInput } from './category-create-or-connect-without-scripts.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutScriptsInput {

    @Field(() => CategoryCreateWithoutScriptsInput, {nullable:true})
    @Type(() => CategoryCreateWithoutScriptsInput)
    create?: CategoryCreateWithoutScriptsInput;

    @Field(() => CategoryCreateOrConnectWithoutScriptsInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutScriptsInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutScriptsInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}
