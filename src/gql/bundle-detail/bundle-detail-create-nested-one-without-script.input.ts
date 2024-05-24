import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BundleDetailCreateWithoutScriptInput } from './bundle-detail-create-without-script.input';
import { Type } from 'class-transformer';
import { BundleDetailCreateOrConnectWithoutScriptInput } from './bundle-detail-create-or-connect-without-script.input';
import { Prisma } from '@prisma/client';
import { BundleDetailWhereUniqueInput } from './bundle-detail-where-unique.input';

@InputType()
export class BundleDetailCreateNestedOneWithoutScriptInput {

    @Field(() => BundleDetailCreateWithoutScriptInput, {nullable:true})
    @Type(() => BundleDetailCreateWithoutScriptInput)
    create?: BundleDetailCreateWithoutScriptInput;

    @Field(() => BundleDetailCreateOrConnectWithoutScriptInput, {nullable:true})
    @Type(() => BundleDetailCreateOrConnectWithoutScriptInput)
    connectOrCreate?: BundleDetailCreateOrConnectWithoutScriptInput;

    @Field(() => BundleDetailWhereUniqueInput, {nullable:true})
    @Type(() => BundleDetailWhereUniqueInput)
    connect?: Prisma.AtLeast<BundleDetailWhereUniqueInput, 'id' | 'scriptId'>;
}
