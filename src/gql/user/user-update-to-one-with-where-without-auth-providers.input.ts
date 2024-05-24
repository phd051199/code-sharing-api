import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAuthProvidersInput } from './user-update-without-auth-providers.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAuthProvidersInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAuthProvidersInput, {nullable:false})
    @Type(() => UserUpdateWithoutAuthProvidersInput)
    data!: UserUpdateWithoutAuthProvidersInput;
}
