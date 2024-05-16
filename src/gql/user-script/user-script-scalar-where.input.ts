import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserScriptScalarWhereInput {

    @Field(() => [UserScriptScalarWhereInput], {nullable:true})
    AND?: Array<UserScriptScalarWhereInput>;

    @Field(() => [UserScriptScalarWhereInput], {nullable:true})
    OR?: Array<UserScriptScalarWhereInput>;

    @Field(() => [UserScriptScalarWhereInput], {nullable:true})
    NOT?: Array<UserScriptScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    scriptId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
