import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserFavoriteCreateWithoutUserInput } from './user-favorite-create-without-user.input';
import { Type } from 'class-transformer';
import { UserFavoriteCreateOrConnectWithoutUserInput } from './user-favorite-create-or-connect-without-user.input';
import { UserFavoriteUpsertWithWhereUniqueWithoutUserInput } from './user-favorite-upsert-with-where-unique-without-user.input';
import { UserFavoriteCreateManyUserInputEnvelope } from './user-favorite-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserFavoriteWhereUniqueInput } from './user-favorite-where-unique.input';
import { UserFavoriteUpdateWithWhereUniqueWithoutUserInput } from './user-favorite-update-with-where-unique-without-user.input';
import { UserFavoriteUpdateManyWithWhereWithoutUserInput } from './user-favorite-update-many-with-where-without-user.input';
import { UserFavoriteScalarWhereInput } from './user-favorite-scalar-where.input';

@InputType()
export class UserFavoriteUpdateManyWithoutUserNestedInput {

    @Field(() => [UserFavoriteCreateWithoutUserInput], {nullable:true})
    @Type(() => UserFavoriteCreateWithoutUserInput)
    create?: Array<UserFavoriteCreateWithoutUserInput>;

    @Field(() => [UserFavoriteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserFavoriteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserFavoriteCreateOrConnectWithoutUserInput>;

    @Field(() => [UserFavoriteUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserFavoriteUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserFavoriteUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserFavoriteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserFavoriteCreateManyUserInputEnvelope)
    createMany?: UserFavoriteCreateManyUserInputEnvelope;

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

    @Field(() => [UserFavoriteUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserFavoriteUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserFavoriteUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserFavoriteUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserFavoriteUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserFavoriteUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserFavoriteScalarWhereInput], {nullable:true})
    @Type(() => UserFavoriteScalarWhereInput)
    deleteMany?: Array<UserFavoriteScalarWhereInput>;
}
