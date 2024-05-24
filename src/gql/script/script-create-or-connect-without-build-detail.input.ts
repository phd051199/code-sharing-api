import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutBuild_detailInput } from './script-create-without-build-detail.input';

@InputType()
export class ScriptCreateOrConnectWithoutBuild_detailInput {

    @Field(() => ScriptWhereUniqueInput, {nullable:false})
    @Type(() => ScriptWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptCreateWithoutBuild_detailInput, {nullable:false})
    @Type(() => ScriptCreateWithoutBuild_detailInput)
    create!: ScriptCreateWithoutBuild_detailInput;
}
