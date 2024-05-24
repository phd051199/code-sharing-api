import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutBuild_detailInput } from './script-create-without-build-detail.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutBuild_detailInput } from './script-create-or-connect-without-build-detail.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';

@InputType()
export class ScriptCreateNestedOneWithoutBuild_detailInput {

    @Field(() => ScriptCreateWithoutBuild_detailInput, {nullable:true})
    @Type(() => ScriptCreateWithoutBuild_detailInput)
    create?: ScriptCreateWithoutBuild_detailInput;

    @Field(() => ScriptCreateOrConnectWithoutBuild_detailInput, {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutBuild_detailInput)
    connectOrCreate?: ScriptCreateOrConnectWithoutBuild_detailInput;

    @Field(() => ScriptWhereUniqueInput, {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;
}
