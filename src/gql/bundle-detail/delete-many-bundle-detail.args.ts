import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BundleDetailWhereInput } from './bundle-detail-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBundleDetailArgs {

    @Field(() => BundleDetailWhereInput, {nullable:true})
    @Type(() => BundleDetailWhereInput)
    where?: BundleDetailWhereInput;
}
