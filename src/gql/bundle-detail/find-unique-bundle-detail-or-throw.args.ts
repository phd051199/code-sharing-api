import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BundleDetailWhereUniqueInput } from './bundle-detail-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBundleDetailOrThrowArgs {

    @Field(() => BundleDetailWhereUniqueInput, {nullable:false})
    @Type(() => BundleDetailWhereUniqueInput)
    where!: Prisma.AtLeast<BundleDetailWhereUniqueInput, 'id' | 'scriptId'>;
}
