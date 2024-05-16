import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';
import { Type } from 'class-transformer';
import { ScriptOrderByWithRelationInput } from './script-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScriptScalarFieldEnum } from './script-scalar-field.enum';

@ArgsType()
export class FindFirstScriptOrThrowArgs {

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;

    @Field(() => [ScriptOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScriptOrderByWithRelationInput>;

    @Field(() => ScriptWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ScriptScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ScriptScalarFieldEnum>;
}
