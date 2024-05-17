import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuthProviders } from '../prisma/auth-providers.enum';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class AuthProvider {

    @Field(() => AuthProviders, {nullable:false})
    provider!: keyof typeof AuthProviders;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => User, {nullable:false})
    user?: User;
}
