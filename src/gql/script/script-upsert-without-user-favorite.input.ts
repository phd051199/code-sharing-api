import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptUpdateWithoutUserFavoriteInput } from './script-update-without-user-favorite.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutUserFavoriteInput } from './script-create-without-user-favorite.input';
import { ScriptWhereInput } from './script-where.input';

@InputType()
export class ScriptUpsertWithoutUserFavoriteInput {

    @Field(() => ScriptUpdateWithoutUserFavoriteInput, {nullable:false})
    @Type(() => ScriptUpdateWithoutUserFavoriteInput)
    update!: ScriptUpdateWithoutUserFavoriteInput;

    @Field(() => ScriptCreateWithoutUserFavoriteInput, {nullable:false})
    @Type(() => ScriptCreateWithoutUserFavoriteInput)
    create!: ScriptCreateWithoutUserFavoriteInput;

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;
}
