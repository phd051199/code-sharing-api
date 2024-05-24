import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutUserFavoriteInput } from './script-create-without-user-favorite.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutUserFavoriteInput } from './script-create-or-connect-without-user-favorite.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';

@InputType()
export class ScriptCreateNestedOneWithoutUserFavoriteInput {

    @Field(() => ScriptCreateWithoutUserFavoriteInput, {nullable:true})
    @Type(() => ScriptCreateWithoutUserFavoriteInput)
    create?: ScriptCreateWithoutUserFavoriteInput;

    @Field(() => ScriptCreateOrConnectWithoutUserFavoriteInput, {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutUserFavoriteInput)
    connectOrCreate?: ScriptCreateOrConnectWithoutUserFavoriteInput;

    @Field(() => ScriptWhereUniqueInput, {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;
}
