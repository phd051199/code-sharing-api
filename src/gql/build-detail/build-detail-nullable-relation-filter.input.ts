import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildDetailWhereInput } from './build-detail-where.input';

@InputType()
export class BuildDetailNullableRelationFilter {

    @Field(() => BuildDetailWhereInput, {nullable:true})
    is?: BuildDetailWhereInput;

    @Field(() => BuildDetailWhereInput, {nullable:true})
    isNot?: BuildDetailWhereInput;
}
