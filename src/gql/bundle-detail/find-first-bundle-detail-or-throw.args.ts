import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BundleDetailWhereInput } from './bundle-detail-where.input';
import { Type } from 'class-transformer';
import { BundleDetailOrderByWithRelationInput } from './bundle-detail-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BundleDetailWhereUniqueInput } from './bundle-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BundleDetailScalarFieldEnum } from './bundle-detail-scalar-field.enum';

@ArgsType()
export class FindFirstBundleDetailOrThrowArgs {

    @Field(() => BundleDetailWhereInput, {nullable:true})
    @Type(() => BundleDetailWhereInput)
    where?: BundleDetailWhereInput;

    @Field(() => [BundleDetailOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BundleDetailOrderByWithRelationInput>;

    @Field(() => BundleDetailWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BundleDetailWhereUniqueInput, 'id' | 'scriptId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BundleDetailScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BundleDetailScalarFieldEnum>;
}
