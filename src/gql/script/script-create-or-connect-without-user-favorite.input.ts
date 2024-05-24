import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutUserFavoriteInput } from './script-create-without-user-favorite.input';

@InputType()
export class ScriptCreateOrConnectWithoutUserFavoriteInput {

    @Field(() => ScriptWhereUniqueInput, {nullable:false})
    @Type(() => ScriptWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptCreateWithoutUserFavoriteInput, {nullable:false})
    @Type(() => ScriptCreateWithoutUserFavoriteInput)
    create!: ScriptCreateWithoutUserFavoriteInput;
}
