import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BundleDetailWhereInput } from './bundle-detail-where.input';
import { Type } from 'class-transformer';
import { BundleDetailUpdateWithoutScriptInput } from './bundle-detail-update-without-script.input';

@InputType()
export class BundleDetailUpdateToOneWithWhereWithoutScriptInput {

    @Field(() => BundleDetailWhereInput, {nullable:true})
    @Type(() => BundleDetailWhereInput)
    where?: BundleDetailWhereInput;

    @Field(() => BundleDetailUpdateWithoutScriptInput, {nullable:false})
    @Type(() => BundleDetailUpdateWithoutScriptInput)
    data!: BundleDetailUpdateWithoutScriptInput;
}
