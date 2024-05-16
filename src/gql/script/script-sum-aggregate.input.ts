import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ScriptSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
