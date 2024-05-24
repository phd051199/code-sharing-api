import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildDetailCreateManyInput } from './build-detail-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBuildDetailArgs {

    @Field(() => [BuildDetailCreateManyInput], {nullable:false})
    @Type(() => BuildDetailCreateManyInput)
    data!: Array<BuildDetailCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
