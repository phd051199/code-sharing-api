import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BuildDetailWhereUniqueInput } from './build-detail-where-unique.input';
import { Type } from 'class-transformer';
import { BuildDetailCreateInput } from './build-detail-create.input';
import { BuildDetailUpdateInput } from './build-detail-update.input';

@ArgsType()
export class UpsertOneBuildDetailArgs {

    @Field(() => BuildDetailWhereUniqueInput, {nullable:false})
    @Type(() => BuildDetailWhereUniqueInput)
    where!: Prisma.AtLeast<BuildDetailWhereUniqueInput, 'id' | 'script_id'>;

    @Field(() => BuildDetailCreateInput, {nullable:false})
    @Type(() => BuildDetailCreateInput)
    create!: BuildDetailCreateInput;

    @Field(() => BuildDetailUpdateInput, {nullable:false})
    @Type(() => BuildDetailUpdateInput)
    update!: BuildDetailUpdateInput;
}
