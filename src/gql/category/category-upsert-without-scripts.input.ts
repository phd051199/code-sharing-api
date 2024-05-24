import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutScriptsInput } from './category-update-without-scripts.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutScriptsInput } from './category-create-without-scripts.input';
import { CategoryWhereInput } from './category-where.input';

@InputType()
export class CategoryUpsertWithoutScriptsInput {

    @Field(() => CategoryUpdateWithoutScriptsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutScriptsInput)
    update!: CategoryUpdateWithoutScriptsInput;

    @Field(() => CategoryCreateWithoutScriptsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutScriptsInput)
    create!: CategoryCreateWithoutScriptsInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;
}
