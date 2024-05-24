import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildDetailCreateWithoutScriptInput } from './build-detail-create-without-script.input';
import { Type } from 'class-transformer';
import { BuildDetailCreateOrConnectWithoutScriptInput } from './build-detail-create-or-connect-without-script.input';
import { Prisma } from '@prisma/client';
import { BuildDetailWhereUniqueInput } from './build-detail-where-unique.input';

@InputType()
export class BuildDetailUncheckedCreateNestedOneWithoutScriptInput {

    @Field(() => BuildDetailCreateWithoutScriptInput, {nullable:true})
    @Type(() => BuildDetailCreateWithoutScriptInput)
    create?: BuildDetailCreateWithoutScriptInput;

    @Field(() => BuildDetailCreateOrConnectWithoutScriptInput, {nullable:true})
    @Type(() => BuildDetailCreateOrConnectWithoutScriptInput)
    connectOrCreate?: BuildDetailCreateOrConnectWithoutScriptInput;

    @Field(() => BuildDetailWhereUniqueInput, {nullable:true})
    @Type(() => BuildDetailWhereUniqueInput)
    connect?: Prisma.AtLeast<BuildDetailWhereUniqueInput, 'id' | 'script_id'>;
}
