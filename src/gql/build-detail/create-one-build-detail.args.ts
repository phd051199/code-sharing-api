import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildDetailCreateInput } from './build-detail-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBuildDetailArgs {

    @Field(() => BuildDetailCreateInput, {nullable:false})
    @Type(() => BuildDetailCreateInput)
    data!: BuildDetailCreateInput;
}
