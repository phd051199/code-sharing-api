import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildDetailWhereInput } from './build-detail-where.input';
import { Type } from 'class-transformer';
import { BuildDetailUpdateWithoutScriptInput } from './build-detail-update-without-script.input';

@InputType()
export class BuildDetailUpdateToOneWithWhereWithoutScriptInput {

    @Field(() => BuildDetailWhereInput, {nullable:true})
    @Type(() => BuildDetailWhereInput)
    where?: BuildDetailWhereInput;

    @Field(() => BuildDetailUpdateWithoutScriptInput, {nullable:false})
    @Type(() => BuildDetailUpdateWithoutScriptInput)
    data!: BuildDetailUpdateWithoutScriptInput;
}
