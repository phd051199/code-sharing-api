import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';
import { Type } from 'class-transformer';
import { ScriptUpdateWithoutUserFavoriteInput } from './script-update-without-user-favorite.input';

@InputType()
export class ScriptUpdateToOneWithWhereWithoutUserFavoriteInput {

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;

    @Field(() => ScriptUpdateWithoutUserFavoriteInput, {nullable:false})
    @Type(() => ScriptUpdateWithoutUserFavoriteInput)
    data!: ScriptUpdateWithoutUserFavoriteInput;
}
