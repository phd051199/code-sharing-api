import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BuildDetailWhereUniqueInput } from './build-detail-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneBuildDetailArgs {

    @Field(() => BuildDetailWhereUniqueInput, {nullable:false})
    @Type(() => BuildDetailWhereUniqueInput)
    where!: Prisma.AtLeast<BuildDetailWhereUniqueInput, 'id' | 'script_id'>;
}
