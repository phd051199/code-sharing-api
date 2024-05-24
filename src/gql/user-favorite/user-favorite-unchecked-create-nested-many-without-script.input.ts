import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserFavoriteCreateWithoutScriptInput } from './user-favorite-create-without-script.input';
import { Type } from 'class-transformer';
import { UserFavoriteCreateOrConnectWithoutScriptInput } from './user-favorite-create-or-connect-without-script.input';
import { UserFavoriteCreateManyScriptInputEnvelope } from './user-favorite-create-many-script-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserFavoriteWhereUniqueInput } from './user-favorite-where-unique.input';

@InputType()
export class UserFavoriteUncheckedCreateNestedManyWithoutScriptInput {

    @Field(() => [UserFavoriteCreateWithoutScriptInput], {nullable:true})
    @Type(() => UserFavoriteCreateWithoutScriptInput)
    create?: Array<UserFavoriteCreateWithoutScriptInput>;

    @Field(() => [UserFavoriteCreateOrConnectWithoutScriptInput], {nullable:true})
    @Type(() => UserFavoriteCreateOrConnectWithoutScriptInput)
    connectOrCreate?: Array<UserFavoriteCreateOrConnectWithoutScriptInput>;

    @Field(() => UserFavoriteCreateManyScriptInputEnvelope, {nullable:true})
    @Type(() => UserFavoriteCreateManyScriptInputEnvelope)
    createMany?: UserFavoriteCreateManyScriptInputEnvelope;

    @Field(() => [UserFavoriteWhereUniqueInput], {nullable:true})
    @Type(() => UserFavoriteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>>;
}
