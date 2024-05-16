import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutScriptsInput } from './user-update-without-scripts.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutScriptsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutScriptsInput, {nullable:false})
    @Type(() => UserUpdateWithoutScriptsInput)
    data!: UserUpdateWithoutScriptsInput;
}
