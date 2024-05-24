import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutScriptsInput } from './category-update-without-scripts.input';

@InputType()
export class CategoryUpdateToOneWithWhereWithoutScriptsInput {

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;

    @Field(() => CategoryUpdateWithoutScriptsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutScriptsInput)
    data!: CategoryUpdateWithoutScriptsInput;
}
