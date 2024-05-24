import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BuildDetailWhereUniqueInput } from './build-detail-where-unique.input';
import { Type } from 'class-transformer';
import { BuildDetailCreateWithoutScriptInput } from './build-detail-create-without-script.input';

@InputType()
export class BuildDetailCreateOrConnectWithoutScriptInput {

    @Field(() => BuildDetailWhereUniqueInput, {nullable:false})
    @Type(() => BuildDetailWhereUniqueInput)
    where!: Prisma.AtLeast<BuildDetailWhereUniqueInput, 'id' | 'script_id'>;

    @Field(() => BuildDetailCreateWithoutScriptInput, {nullable:false})
    @Type(() => BuildDetailCreateWithoutScriptInput)
    create!: BuildDetailCreateWithoutScriptInput;
}
