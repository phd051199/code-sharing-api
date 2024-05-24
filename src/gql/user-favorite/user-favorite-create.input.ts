import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserFavoriteInput } from '../user/user-create-nested-one-without-user-favorite.input';
import { ScriptCreateNestedOneWithoutUserFavoriteInput } from '../script/script-create-nested-one-without-user-favorite.input';

@InputType()
export class UserFavoriteCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUserFavoriteInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserFavoriteInput;

    @Field(() => ScriptCreateNestedOneWithoutUserFavoriteInput, {nullable:false})
    script!: ScriptCreateNestedOneWithoutUserFavoriteInput;
}
