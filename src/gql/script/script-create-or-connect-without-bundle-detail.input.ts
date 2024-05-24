import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutBundleDetailInput } from './script-create-without-bundle-detail.input';

@InputType()
export class ScriptCreateOrConnectWithoutBundleDetailInput {

    @Field(() => ScriptWhereUniqueInput, {nullable:false})
    @Type(() => ScriptWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptCreateWithoutBundleDetailInput, {nullable:false})
    @Type(() => ScriptCreateWithoutBundleDetailInput)
    create!: ScriptCreateWithoutBundleDetailInput;
}
