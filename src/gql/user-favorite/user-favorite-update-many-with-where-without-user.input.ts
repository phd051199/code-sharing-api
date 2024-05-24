import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserFavoriteScalarWhereInput } from './user-favorite-scalar-where.input';
import { Type } from 'class-transformer';
import { UserFavoriteUpdateManyMutationInput } from './user-favorite-update-many-mutation.input';

@InputType()
export class UserFavoriteUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserFavoriteScalarWhereInput, {nullable:false})
    @Type(() => UserFavoriteScalarWhereInput)
    where!: UserFavoriteScalarWhereInput;

    @Field(() => UserFavoriteUpdateManyMutationInput, {nullable:false})
    @Type(() => UserFavoriteUpdateManyMutationInput)
    data!: UserFavoriteUpdateManyMutationInput;
}
