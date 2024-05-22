import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatus } from '../prisma/script-status.enum';

@InputType()
export class ScriptCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    path?: string;

    @Field(() => String, {nullable:true})
    bundle?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ScriptStatus, {nullable:true})
    status?: keyof typeof ScriptStatus;

    @Field(() => String, {nullable:true})
    failed_reason?: string;
}
