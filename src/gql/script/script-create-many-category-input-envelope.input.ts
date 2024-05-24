import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateManyCategoryInput } from './script-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ScriptCreateManyCategoryInputEnvelope {

    @Field(() => [ScriptCreateManyCategoryInput], {nullable:false})
    @Type(() => ScriptCreateManyCategoryInput)
    data!: Array<ScriptCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
