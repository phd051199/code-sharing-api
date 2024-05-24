import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutUserFavoriteInput } from './script-create-without-user-favorite.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutUserFavoriteInput } from './script-create-or-connect-without-user-favorite.input';
import { ScriptUpsertWithoutUserFavoriteInput } from './script-upsert-without-user-favorite.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { ScriptUpdateToOneWithWhereWithoutUserFavoriteInput } from './script-update-to-one-with-where-without-user-favorite.input';

@InputType()
export class ScriptUpdateOneRequiredWithoutUserFavoriteNestedInput {

    @Field(() => ScriptCreateWithoutUserFavoriteInput, {nullable:true})
    @Type(() => ScriptCreateWithoutUserFavoriteInput)
    create?: ScriptCreateWithoutUserFavoriteInput;

    @Field(() => ScriptCreateOrConnectWithoutUserFavoriteInput, {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutUserFavoriteInput)
    connectOrCreate?: ScriptCreateOrConnectWithoutUserFavoriteInput;

    @Field(() => ScriptUpsertWithoutUserFavoriteInput, {nullable:true})
    @Type(() => ScriptUpsertWithoutUserFavoriteInput)
    upsert?: ScriptUpsertWithoutUserFavoriteInput;

    @Field(() => ScriptWhereUniqueInput, {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptUpdateToOneWithWhereWithoutUserFavoriteInput, {nullable:true})
    @Type(() => ScriptUpdateToOneWithWhereWithoutUserFavoriteInput)
    update?: ScriptUpdateToOneWithWhereWithoutUserFavoriteInput;
}
