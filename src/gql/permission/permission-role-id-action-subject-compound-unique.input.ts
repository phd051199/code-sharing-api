import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Action } from '../prisma/action.enum';

@InputType()
export class PermissionRole_idActionSubjectCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    role_id!: number;

    @Field(() => Action, {nullable:false})
    action!: keyof typeof Action;

    @Field(() => String, {nullable:false})
    subject!: string;
}
