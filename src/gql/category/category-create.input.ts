import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateNestedManyWithoutCategoryInput } from '../script/script-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ScriptCreateNestedManyWithoutCategoryInput, {nullable:true})
    scripts?: ScriptCreateNestedManyWithoutCategoryInput;
}
