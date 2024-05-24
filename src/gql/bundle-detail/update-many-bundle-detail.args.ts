import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BundleDetailUpdateManyMutationInput } from './bundle-detail-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BundleDetailWhereInput } from './bundle-detail-where.input';

@ArgsType()
export class UpdateManyBundleDetailArgs {

    @Field(() => BundleDetailUpdateManyMutationInput, {nullable:false})
    @Type(() => BundleDetailUpdateManyMutationInput)
    data!: BundleDetailUpdateManyMutationInput;

    @Field(() => BundleDetailWhereInput, {nullable:true})
    @Type(() => BundleDetailWhereInput)
    where?: BundleDetailWhereInput;
}
