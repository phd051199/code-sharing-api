import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildDetailWhereInput } from './build-detail-where.input';
import { Type } from 'class-transformer';
import { BuildDetailOrderByWithRelationInput } from './build-detail-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BuildDetailWhereUniqueInput } from './build-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BuildDetailScalarFieldEnum } from './build-detail-scalar-field.enum';

@ArgsType()
export class FindFirstBuildDetailArgs {

    @Field(() => BuildDetailWhereInput, {nullable:true})
    @Type(() => BuildDetailWhereInput)
    where?: BuildDetailWhereInput;

    @Field(() => [BuildDetailOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BuildDetailOrderByWithRelationInput>;

    @Field(() => BuildDetailWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BuildDetailWhereUniqueInput, 'id' | 'script_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BuildDetailScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BuildDetailScalarFieldEnum>;
}
