import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';
import { Type } from 'class-transformer';
import { ScriptUpdateWithoutBuild_detailInput } from './script-update-without-build-detail.input';

@InputType()
export class ScriptUpdateToOneWithWhereWithoutBuild_detailInput {

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;

    @Field(() => ScriptUpdateWithoutBuild_detailInput, {nullable:false})
    @Type(() => ScriptUpdateWithoutBuild_detailInput)
    data!: ScriptUpdateWithoutBuild_detailInput;
}
