import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ScriptRelationFilter } from '../script/script-relation-filter.input';

@InputType()
export class UserScriptWhereInput {

    @Field(() => [UserScriptWhereInput], {nullable:true})
    AND?: Array<UserScriptWhereInput>;

    @Field(() => [UserScriptWhereInput], {nullable:true})
    OR?: Array<UserScriptWhereInput>;

    @Field(() => [UserScriptWhereInput], {nullable:true})
    NOT?: Array<UserScriptWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    scriptId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ScriptRelationFilter, {nullable:true})
    script?: ScriptRelationFilter;
}
