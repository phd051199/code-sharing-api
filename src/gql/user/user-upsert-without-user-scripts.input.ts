import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserScriptsInput } from './user-update-without-user-scripts.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserScriptsInput } from './user-create-without-user-scripts.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutUserScriptsInput {

    @Field(() => UserUpdateWithoutUserScriptsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserScriptsInput)
    update!: UserUpdateWithoutUserScriptsInput;

    @Field(() => UserCreateWithoutUserScriptsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserScriptsInput)
    create!: UserCreateWithoutUserScriptsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
