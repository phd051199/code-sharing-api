import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserScriptUserIdScriptIdCompoundUniqueInput } from './user-script-user-id-script-id-compound-unique.input';
import { UserScriptWhereInput } from './user-script-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ScriptRelationFilter } from '../script/script-relation-filter.input';

@InputType()
export class UserScriptWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => UserScriptUserIdScriptIdCompoundUniqueInput, {nullable:true})
    userId_scriptId?: UserScriptUserIdScriptIdCompoundUniqueInput;

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
