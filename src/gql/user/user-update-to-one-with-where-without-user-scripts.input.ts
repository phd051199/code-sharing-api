import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUserScriptsInput } from './user-update-without-user-scripts.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutUserScriptsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutUserScriptsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserScriptsInput)
    data!: UserUpdateWithoutUserScriptsInput;
}
