import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OAuthProviders } from '../prisma/o-auth-providers.enum';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class OAuthProvider {

    @Field(() => OAuthProviders, {nullable:false})
    provider!: keyof typeof OAuthProviders;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @HideField()
    user?: User;
}
