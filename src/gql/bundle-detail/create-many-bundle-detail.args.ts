import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BundleDetailCreateManyInput } from './bundle-detail-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBundleDetailArgs {

    @Field(() => [BundleDetailCreateManyInput], {nullable:false})
    @Type(() => BundleDetailCreateManyInput)
    data!: Array<BundleDetailCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
