import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserFavoriteCreateInput } from './user-favorite-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserFavoriteArgs {

    @Field(() => UserFavoriteCreateInput, {nullable:false})
    @Type(() => UserFavoriteCreateInput)
    data!: UserFavoriteCreateInput;
}
