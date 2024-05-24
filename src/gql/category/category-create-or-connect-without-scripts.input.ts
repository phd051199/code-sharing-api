import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutScriptsInput } from './category-create-without-scripts.input';

@InputType()
export class CategoryCreateOrConnectWithoutScriptsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryCreateWithoutScriptsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutScriptsInput)
    create!: CategoryCreateWithoutScriptsInput;
}
