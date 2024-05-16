import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutScriptsInput } from './user-update-without-scripts.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutScriptsInput } from './user-create-without-scripts.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutScriptsInput {

    @Field(() => UserUpdateWithoutScriptsInput, {nullable:false})
    @Type(() => UserUpdateWithoutScriptsInput)
    update!: UserUpdateWithoutScriptsInput;

    @Field(() => UserCreateWithoutScriptsInput, {nullable:false})
    @Type(() => UserCreateWithoutScriptsInput)
    create!: UserCreateWithoutScriptsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
