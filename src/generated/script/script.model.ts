import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserScript } from '../user-script/user-script.model';
import { ScriptCount } from './script-count.output';

@ObjectType()
export class Script {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [UserScript], {nullable:true})
    users?: Array<UserScript>;

    @Field(() => ScriptCount, {nullable:false})
    _count?: ScriptCount;
}
