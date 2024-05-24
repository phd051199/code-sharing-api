import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BundleDetailWhereUniqueInput } from './bundle-detail-where-unique.input';
import { Type } from 'class-transformer';
import { BundleDetailCreateInput } from './bundle-detail-create.input';
import { BundleDetailUpdateInput } from './bundle-detail-update.input';

@ArgsType()
export class UpsertOneBundleDetailArgs {

    @Field(() => BundleDetailWhereUniqueInput, {nullable:false})
    @Type(() => BundleDetailWhereUniqueInput)
    where!: Prisma.AtLeast<BundleDetailWhereUniqueInput, 'id' | 'scriptId'>;

    @Field(() => BundleDetailCreateInput, {nullable:false})
    @Type(() => BundleDetailCreateInput)
    create!: BundleDetailCreateInput;

    @Field(() => BundleDetailUpdateInput, {nullable:false})
    @Type(() => BundleDetailUpdateInput)
    update!: BundleDetailUpdateInput;
}
