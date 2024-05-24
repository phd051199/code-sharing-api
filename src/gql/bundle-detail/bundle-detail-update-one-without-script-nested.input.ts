import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BundleDetailCreateWithoutScriptInput } from './bundle-detail-create-without-script.input';
import { Type } from 'class-transformer';
import { BundleDetailCreateOrConnectWithoutScriptInput } from './bundle-detail-create-or-connect-without-script.input';
import { BundleDetailUpsertWithoutScriptInput } from './bundle-detail-upsert-without-script.input';
import { BundleDetailWhereInput } from './bundle-detail-where.input';
import { Prisma } from '@prisma/client';
import { BundleDetailWhereUniqueInput } from './bundle-detail-where-unique.input';
import { BundleDetailUpdateToOneWithWhereWithoutScriptInput } from './bundle-detail-update-to-one-with-where-without-script.input';

@InputType()
export class BundleDetailUpdateOneWithoutScriptNestedInput {

    @Field(() => BundleDetailCreateWithoutScriptInput, {nullable:true})
    @Type(() => BundleDetailCreateWithoutScriptInput)
    create?: BundleDetailCreateWithoutScriptInput;

    @Field(() => BundleDetailCreateOrConnectWithoutScriptInput, {nullable:true})
    @Type(() => BundleDetailCreateOrConnectWithoutScriptInput)
    connectOrCreate?: BundleDetailCreateOrConnectWithoutScriptInput;

    @Field(() => BundleDetailUpsertWithoutScriptInput, {nullable:true})
    @Type(() => BundleDetailUpsertWithoutScriptInput)
    upsert?: BundleDetailUpsertWithoutScriptInput;

    @Field(() => BundleDetailWhereInput, {nullable:true})
    @Type(() => BundleDetailWhereInput)
    disconnect?: BundleDetailWhereInput;

    @Field(() => BundleDetailWhereInput, {nullable:true})
    @Type(() => BundleDetailWhereInput)
    delete?: BundleDetailWhereInput;

    @Field(() => BundleDetailWhereUniqueInput, {nullable:true})
    @Type(() => BundleDetailWhereUniqueInput)
    connect?: Prisma.AtLeast<BundleDetailWhereUniqueInput, 'id' | 'scriptId'>;

    @Field(() => BundleDetailUpdateToOneWithWhereWithoutScriptInput, {nullable:true})
    @Type(() => BundleDetailUpdateToOneWithWhereWithoutScriptInput)
    update?: BundleDetailUpdateToOneWithWhereWithoutScriptInput;
}
