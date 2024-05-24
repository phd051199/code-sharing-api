import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserFavoriteWhereInput } from './user-favorite-where.input';
import { Type } from 'class-transformer';
import { UserFavoriteOrderByWithRelationInput } from './user-favorite-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserFavoriteWhereUniqueInput } from './user-favorite-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserFavoriteScalarFieldEnum } from './user-favorite-scalar-field.enum';

@ArgsType()
export class FindFirstUserFavoriteArgs {

    @Field(() => UserFavoriteWhereInput, {nullable:true})
    @Type(() => UserFavoriteWhereInput)
    where?: UserFavoriteWhereInput;

    @Field(() => [UserFavoriteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserFavoriteOrderByWithRelationInput>;

    @Field(() => UserFavoriteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserFavoriteScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserFavoriteScalarFieldEnum>;
}
