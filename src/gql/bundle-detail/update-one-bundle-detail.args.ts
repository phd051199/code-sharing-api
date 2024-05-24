import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BundleDetailUpdateInput } from './bundle-detail-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BundleDetailWhereUniqueInput } from './bundle-detail-where-unique.input';

@ArgsType()
export class UpdateOneBundleDetailArgs {

    @Field(() => BundleDetailUpdateInput, {nullable:false})
    @Type(() => BundleDetailUpdateInput)
    data!: BundleDetailUpdateInput;

    @Field(() => BundleDetailWhereUniqueInput, {nullable:false})
    @Type(() => BundleDetailWhereUniqueInput)
    where!: Prisma.AtLeast<BundleDetailWhereUniqueInput, 'id' | 'scriptId'>;
}
