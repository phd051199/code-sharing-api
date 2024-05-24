import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildDetailCreateWithoutScriptInput } from './build-detail-create-without-script.input';
import { Type } from 'class-transformer';
import { BuildDetailCreateOrConnectWithoutScriptInput } from './build-detail-create-or-connect-without-script.input';
import { BuildDetailUpsertWithoutScriptInput } from './build-detail-upsert-without-script.input';
import { BuildDetailWhereInput } from './build-detail-where.input';
import { Prisma } from '@prisma/client';
import { BuildDetailWhereUniqueInput } from './build-detail-where-unique.input';
import { BuildDetailUpdateToOneWithWhereWithoutScriptInput } from './build-detail-update-to-one-with-where-without-script.input';

@InputType()
export class BuildDetailUpdateOneWithoutScriptNestedInput {

    @Field(() => BuildDetailCreateWithoutScriptInput, {nullable:true})
    @Type(() => BuildDetailCreateWithoutScriptInput)
    create?: BuildDetailCreateWithoutScriptInput;

    @Field(() => BuildDetailCreateOrConnectWithoutScriptInput, {nullable:true})
    @Type(() => BuildDetailCreateOrConnectWithoutScriptInput)
    connectOrCreate?: BuildDetailCreateOrConnectWithoutScriptInput;

    @Field(() => BuildDetailUpsertWithoutScriptInput, {nullable:true})
    @Type(() => BuildDetailUpsertWithoutScriptInput)
    upsert?: BuildDetailUpsertWithoutScriptInput;

    @Field(() => BuildDetailWhereInput, {nullable:true})
    @Type(() => BuildDetailWhereInput)
    disconnect?: BuildDetailWhereInput;

    @Field(() => BuildDetailWhereInput, {nullable:true})
    @Type(() => BuildDetailWhereInput)
    delete?: BuildDetailWhereInput;

    @Field(() => BuildDetailWhereUniqueInput, {nullable:true})
    @Type(() => BuildDetailWhereUniqueInput)
    connect?: Prisma.AtLeast<BuildDetailWhereUniqueInput, 'id' | 'script_id'>;

    @Field(() => BuildDetailUpdateToOneWithWhereWithoutScriptInput, {nullable:true})
    @Type(() => BuildDetailUpdateToOneWithWhereWithoutScriptInput)
    update?: BuildDetailUpdateToOneWithWhereWithoutScriptInput;
}
