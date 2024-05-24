import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildDetailUpdateWithoutScriptInput } from './build-detail-update-without-script.input';
import { Type } from 'class-transformer';
import { BuildDetailCreateWithoutScriptInput } from './build-detail-create-without-script.input';
import { BuildDetailWhereInput } from './build-detail-where.input';

@InputType()
export class BuildDetailUpsertWithoutScriptInput {

    @Field(() => BuildDetailUpdateWithoutScriptInput, {nullable:false})
    @Type(() => BuildDetailUpdateWithoutScriptInput)
    update!: BuildDetailUpdateWithoutScriptInput;

    @Field(() => BuildDetailCreateWithoutScriptInput, {nullable:false})
    @Type(() => BuildDetailCreateWithoutScriptInput)
    create!: BuildDetailCreateWithoutScriptInput;

    @Field(() => BuildDetailWhereInput, {nullable:true})
    @Type(() => BuildDetailWhereInput)
    where?: BuildDetailWhereInput;
}
