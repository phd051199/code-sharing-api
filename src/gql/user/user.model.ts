import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { HideField } from '@nestjs/graphql';
import { UserScript } from '../user-script/user-script.model';
import { OAuthProvider } from '../o-auth-provider/o-auth-provider.model';
import { Profile } from '../profile/profile.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Role, {nullable:false,defaultValue:'user'})
    role!: keyof typeof Role;

    @HideField()
    password!: string | null;

    @Field(() => Date, {nullable:true})
    lastLogin!: Date | null;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;

    @Field(() => [UserScript], {nullable:true})
    userScripts?: Array<UserScript>;

    @Field(() => [OAuthProvider], {nullable:true})
    oauthProviders?: Array<OAuthProvider>;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
