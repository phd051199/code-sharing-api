import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptStatusWhereInput } from './script-status-where.input';
import { Type } from 'class-transformer';
import { ScriptStatusOrderByWithRelationInput } from './script-status-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ScriptStatusWhereUniqueInput } from './script-status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScriptStatusScalarFieldEnum } from './script-status-scalar-field.enum';

@ArgsType()
export class FindFirstScriptStatusOrThrowArgs {

    @Field(() => ScriptStatusWhereInput, {nullable:true})
    @Type(() => ScriptStatusWhereInput)
    where?: ScriptStatusWhereInput;

    @Field(() => [ScriptStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScriptStatusOrderByWithRelationInput>;

    @Field(() => ScriptStatusWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id' | 'script_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ScriptStatusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ScriptStatusScalarFieldEnum>;
}
