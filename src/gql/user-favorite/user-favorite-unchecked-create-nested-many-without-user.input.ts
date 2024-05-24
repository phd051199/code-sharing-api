import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserFavoriteCreateWithoutUserInput } from './user-favorite-create-without-user.input';
import { Type } from 'class-transformer';
import { UserFavoriteCreateOrConnectWithoutUserInput } from './user-favorite-create-or-connect-without-user.input';
import { UserFavoriteCreateManyUserInputEnvelope } from './user-favorite-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserFavoriteWhereUniqueInput } from './user-favorite-where-unique.input';

@InputType()
export class UserFavoriteUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserFavoriteCreateWithoutUserInput], {nullable:true})
    @Type(() => UserFavoriteCreateWithoutUserInput)
    create?: Array<UserFavoriteCreateWithoutUserInput>;

    @Field(() => [UserFavoriteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserFavoriteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserFavoriteCreateOrConnectWithoutUserInput>;

    @Field(() => UserFavoriteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserFavoriteCreateManyUserInputEnvelope)
    createMany?: UserFavoriteCreateManyUserInputEnvelope;

    @Field(() => [UserFavoriteWhereUniqueInput], {nullable:true})
    @Type(() => UserFavoriteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>>;
}
