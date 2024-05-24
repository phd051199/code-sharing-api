import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUserFavoriteInput } from './user-update-without-user-favorite.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutUserFavoriteInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutUserFavoriteInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserFavoriteInput)
    data!: UserUpdateWithoutUserFavoriteInput;
}
