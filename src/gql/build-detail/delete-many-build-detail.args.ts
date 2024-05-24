import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildDetailWhereInput } from './build-detail-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBuildDetailArgs {

    @Field(() => BuildDetailWhereInput, {nullable:true})
    @Type(() => BuildDetailWhereInput)
    where?: BuildDetailWhereInput;
}
