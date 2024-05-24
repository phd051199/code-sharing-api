import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BundleDetailWhereInput } from './bundle-detail-where.input';

@InputType()
export class BundleDetailNullableRelationFilter {

    @Field(() => BundleDetailWhereInput, {nullable:true})
    is?: BundleDetailWhereInput;

    @Field(() => BundleDetailWhereInput, {nullable:true})
    isNot?: BundleDetailWhereInput;
}
