import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildDetailUpdateManyMutationInput } from './build-detail-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BuildDetailWhereInput } from './build-detail-where.input';

@ArgsType()
export class UpdateManyBuildDetailArgs {

    @Field(() => BuildDetailUpdateManyMutationInput, {nullable:false})
    @Type(() => BuildDetailUpdateManyMutationInput)
    data!: BuildDetailUpdateManyMutationInput;

    @Field(() => BuildDetailWhereInput, {nullable:true})
    @Type(() => BuildDetailWhereInput)
    where?: BuildDetailWhereInput;
}
