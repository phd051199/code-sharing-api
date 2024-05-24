import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BundleDetailWhereUniqueInput } from './bundle-detail-where-unique.input';
import { Type } from 'class-transformer';
import { BundleDetailCreateWithoutScriptInput } from './bundle-detail-create-without-script.input';

@InputType()
export class BundleDetailCreateOrConnectWithoutScriptInput {

    @Field(() => BundleDetailWhereUniqueInput, {nullable:false})
    @Type(() => BundleDetailWhereUniqueInput)
    where!: Prisma.AtLeast<BundleDetailWhereUniqueInput, 'id' | 'scriptId'>;

    @Field(() => BundleDetailCreateWithoutScriptInput, {nullable:false})
    @Type(() => BundleDetailCreateWithoutScriptInput)
    create!: BundleDetailCreateWithoutScriptInput;
}
