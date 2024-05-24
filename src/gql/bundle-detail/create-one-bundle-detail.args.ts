import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BundleDetailCreateInput } from './bundle-detail-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBundleDetailArgs {

    @Field(() => BundleDetailCreateInput, {nullable:false})
    @Type(() => BundleDetailCreateInput)
    data!: BundleDetailCreateInput;
}
