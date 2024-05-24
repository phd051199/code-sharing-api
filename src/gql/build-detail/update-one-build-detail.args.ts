import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildDetailUpdateInput } from './build-detail-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BuildDetailWhereUniqueInput } from './build-detail-where-unique.input';

@ArgsType()
export class UpdateOneBuildDetailArgs {

    @Field(() => BuildDetailUpdateInput, {nullable:false})
    @Type(() => BuildDetailUpdateInput)
    data!: BuildDetailUpdateInput;

    @Field(() => BuildDetailWhereUniqueInput, {nullable:false})
    @Type(() => BuildDetailWhereUniqueInput)
    where!: Prisma.AtLeast<BuildDetailWhereUniqueInput, 'id' | 'script_id'>;
}
