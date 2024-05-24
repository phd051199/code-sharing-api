import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserFavoriteCreateWithoutScriptInput } from './user-favorite-create-without-script.input';
import { Type } from 'class-transformer';
import { UserFavoriteCreateOrConnectWithoutScriptInput } from './user-favorite-create-or-connect-without-script.input';
import { UserFavoriteUpsertWithWhereUniqueWithoutScriptInput } from './user-favorite-upsert-with-where-unique-without-script.input';
import { UserFavoriteCreateManyScriptInputEnvelope } from './user-favorite-create-many-script-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserFavoriteWhereUniqueInput } from './user-favorite-where-unique.input';
import { UserFavoriteUpdateWithWhereUniqueWithoutScriptInput } from './user-favorite-update-with-where-unique-without-script.input';
import { UserFavoriteUpdateManyWithWhereWithoutScriptInput } from './user-favorite-update-many-with-where-without-script.input';
import { UserFavoriteScalarWhereInput } from './user-favorite-scalar-where.input';

@InputType()
export class UserFavoriteUpdateManyWithoutScriptNestedInput {

    @Field(() => [UserFavoriteCreateWithoutScriptInput], {nullable:true})
    @Type(() => UserFavoriteCreateWithoutScriptInput)
    create?: Array<UserFavoriteCreateWithoutScriptInput>;

    @Field(() => [UserFavoriteCreateOrConnectWithoutScriptInput], {nullable:true})
    @Type(() => UserFavoriteCreateOrConnectWithoutScriptInput)
    connectOrCreate?: Array<UserFavoriteCreateOrConnectWithoutScriptInput>;

    @Field(() => [UserFavoriteUpsertWithWhereUniqueWithoutScriptInput], {nullable:true})
    @Type(() => UserFavoriteUpsertWithWhereUniqueWithoutScriptInput)
    upsert?: Array<UserFavoriteUpsertWithWhereUniqueWithoutScriptInput>;

    @Field(() => UserFavoriteCreateManyScriptInputEnvelope, {nullable:true})
    @Type(() => UserFavoriteCreateManyScriptInputEnvelope)
    createMany?: UserFavoriteCreateManyScriptInputEnvelope;

    @Field(() => [UserFavoriteWhereUniqueInput], {nullable:true})
    @Type(() => UserFavoriteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>>;

    @Field(() => [UserFavoriteWhereUniqueInput], {nullable:true})
    @Type(() => UserFavoriteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>>;

    @Field(() => [UserFavoriteWhereUniqueInput], {nullable:true})
    @Type(() => UserFavoriteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>>;

    @Field(() => [UserFavoriteWhereUniqueInput], {nullable:true})
    @Type(() => UserFavoriteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>>;

    @Field(() => [UserFavoriteUpdateWithWhereUniqueWithoutScriptInput], {nullable:true})
    @Type(() => UserFavoriteUpdateWithWhereUniqueWithoutScriptInput)
    update?: Array<UserFavoriteUpdateWithWhereUniqueWithoutScriptInput>;

    @Field(() => [UserFavoriteUpdateManyWithWhereWithoutScriptInput], {nullable:true})
    @Type(() => UserFavoriteUpdateManyWithWhereWithoutScriptInput)
    updateMany?: Array<UserFavoriteUpdateManyWithWhereWithoutScriptInput>;

    @Field(() => [UserFavoriteScalarWhereInput], {nullable:true})
    @Type(() => UserFavoriteScalarWhereInput)
    deleteMany?: Array<UserFavoriteScalarWhereInput>;
}
