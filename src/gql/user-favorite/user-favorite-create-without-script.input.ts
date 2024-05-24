import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserFavoriteInput } from '../user/user-create-nested-one-without-user-favorite.input';

@InputType()
export class UserFavoriteCreateWithoutScriptInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUserFavoriteInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserFavoriteInput;
}
