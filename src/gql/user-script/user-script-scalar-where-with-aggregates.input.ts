import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserScriptScalarWhereWithAggregatesInput {

    @Field(() => [UserScriptScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScriptScalarWhereWithAggregatesInput>;

    @Field(() => [UserScriptScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScriptScalarWhereWithAggregatesInput>;

    @Field(() => [UserScriptScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScriptScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    scriptId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
