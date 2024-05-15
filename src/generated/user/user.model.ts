import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Role, {nullable:false,defaultValue:'user'})
    role!: keyof typeof Role;

    @HideField()
    password!: string;

    @Field(() => Date, {nullable:true})
    lastLogin!: Date | null;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;
}
