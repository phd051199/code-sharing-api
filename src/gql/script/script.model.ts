import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScriptStatus } from '../prisma/script-status.enum';
import { User } from '../user/user.model';

@ObjectType()
export class Script {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    path!: string | null;

    @Field(() => String, {nullable:true})
    bundle!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => ScriptStatus, {nullable:true})
    status!: keyof typeof ScriptStatus | null;

    @Field(() => String, {nullable:true})
    failed_reason!: string | null;

    @Field(() => User, {nullable:false})
    user?: User;
}
