import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptUpdateWithoutBuild_detailInput } from './script-update-without-build-detail.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutBuild_detailInput } from './script-create-without-build-detail.input';
import { ScriptWhereInput } from './script-where.input';

@InputType()
export class ScriptUpsertWithoutBuild_detailInput {

    @Field(() => ScriptUpdateWithoutBuild_detailInput, {nullable:false})
    @Type(() => ScriptUpdateWithoutBuild_detailInput)
    update!: ScriptUpdateWithoutBuild_detailInput;

    @Field(() => ScriptCreateWithoutBuild_detailInput, {nullable:false})
    @Type(() => ScriptCreateWithoutBuild_detailInput)
    create!: ScriptCreateWithoutBuild_detailInput;

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;
}
