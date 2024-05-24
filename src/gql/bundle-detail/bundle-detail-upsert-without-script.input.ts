import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BundleDetailUpdateWithoutScriptInput } from './bundle-detail-update-without-script.input';
import { Type } from 'class-transformer';
import { BundleDetailCreateWithoutScriptInput } from './bundle-detail-create-without-script.input';
import { BundleDetailWhereInput } from './bundle-detail-where.input';

@InputType()
export class BundleDetailUpsertWithoutScriptInput {

    @Field(() => BundleDetailUpdateWithoutScriptInput, {nullable:false})
    @Type(() => BundleDetailUpdateWithoutScriptInput)
    update!: BundleDetailUpdateWithoutScriptInput;

    @Field(() => BundleDetailCreateWithoutScriptInput, {nullable:false})
    @Type(() => BundleDetailCreateWithoutScriptInput)
    create!: BundleDetailCreateWithoutScriptInput;

    @Field(() => BundleDetailWhereInput, {nullable:true})
    @Type(() => BundleDetailWhereInput)
    where?: BundleDetailWhereInput;
}
