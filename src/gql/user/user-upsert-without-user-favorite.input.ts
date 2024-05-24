import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserFavoriteInput } from './user-update-without-user-favorite.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserFavoriteInput } from './user-create-without-user-favorite.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutUserFavoriteInput {

    @Field(() => UserUpdateWithoutUserFavoriteInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserFavoriteInput)
    update!: UserUpdateWithoutUserFavoriteInput;

    @Field(() => UserCreateWithoutUserFavoriteInput, {nullable:false})
    @Type(() => UserCreateWithoutUserFavoriteInput)
    create!: UserCreateWithoutUserFavoriteInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
