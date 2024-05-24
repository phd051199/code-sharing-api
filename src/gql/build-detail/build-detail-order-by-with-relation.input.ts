import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ScriptOrderByWithRelationInput } from '../script/script-order-by-with-relation.input';

@InputType()
export class BuildDetailOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    script_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    path?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bundle?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    priority?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    failed_reason?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => ScriptOrderByWithRelationInput, {nullable:true})
    script?: ScriptOrderByWithRelationInput;
}
