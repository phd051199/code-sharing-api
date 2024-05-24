import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateNestedOneWithoutUserFavoriteInput } from '../script/script-create-nested-one-without-user-favorite.input';

@InputType()
export class UserFavoriteCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ScriptCreateNestedOneWithoutUserFavoriteInput, {nullable:false})
    script!: ScriptCreateNestedOneWithoutUserFavoriteInput;
}
