import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserScriptWhereInput } from './user-script-where.input';
import { Type } from 'class-transformer';
import { UserScriptOrderByWithRelationInput } from './user-script-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserScriptWhereUniqueInput } from './user-script-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserScriptScalarFieldEnum } from './user-script-scalar-field.enum';

@ArgsType()
export class FindManyUserScriptArgs {

    @Field(() => UserScriptWhereInput, {nullable:true})
    @Type(() => UserScriptWhereInput)
    where?: UserScriptWhereInput;

    @Field(() => [UserScriptOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserScriptOrderByWithRelationInput>;

    @Field(() => UserScriptWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserScriptWhereUniqueInput, 'userId_scriptId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserScriptScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScriptScalarFieldEnum>;
}
