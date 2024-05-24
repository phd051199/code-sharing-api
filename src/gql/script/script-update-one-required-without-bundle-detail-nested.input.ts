import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutBundleDetailInput } from './script-create-without-bundle-detail.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutBundleDetailInput } from './script-create-or-connect-without-bundle-detail.input';
import { ScriptUpsertWithoutBundleDetailInput } from './script-upsert-without-bundle-detail.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { ScriptUpdateToOneWithWhereWithoutBundleDetailInput } from './script-update-to-one-with-where-without-bundle-detail.input';

@InputType()
export class ScriptUpdateOneRequiredWithoutBundleDetailNestedInput {

    @Field(() => ScriptCreateWithoutBundleDetailInput, {nullable:true})
    @Type(() => ScriptCreateWithoutBundleDetailInput)
    create?: ScriptCreateWithoutBundleDetailInput;

    @Field(() => ScriptCreateOrConnectWithoutBundleDetailInput, {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutBundleDetailInput)
    connectOrCreate?: ScriptCreateOrConnectWithoutBundleDetailInput;

    @Field(() => ScriptUpsertWithoutBundleDetailInput, {nullable:true})
    @Type(() => ScriptUpsertWithoutBundleDetailInput)
    upsert?: ScriptUpsertWithoutBundleDetailInput;

    @Field(() => ScriptWhereUniqueInput, {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptUpdateToOneWithWhereWithoutBundleDetailInput, {nullable:true})
    @Type(() => ScriptUpdateToOneWithWhereWithoutBundleDetailInput)
    update?: ScriptUpdateToOneWithWhereWithoutBundleDetailInput;
}
