import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutBundleDetailInput } from './script-create-without-bundle-detail.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutBundleDetailInput } from './script-create-or-connect-without-bundle-detail.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';

@InputType()
export class ScriptCreateNestedOneWithoutBundleDetailInput {

    @Field(() => ScriptCreateWithoutBundleDetailInput, {nullable:true})
    @Type(() => ScriptCreateWithoutBundleDetailInput)
    create?: ScriptCreateWithoutBundleDetailInput;

    @Field(() => ScriptCreateOrConnectWithoutBundleDetailInput, {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutBundleDetailInput)
    connectOrCreate?: ScriptCreateOrConnectWithoutBundleDetailInput;

    @Field(() => ScriptWhereUniqueInput, {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;
}
