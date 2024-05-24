import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BuildStatus } from '../prisma/build-status.enum';
import { Script } from '../script/script.model';

@ObjectType()
export class BundleDetail {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    scriptId!: number;

    @Field(() => String, {nullable:true})
    bundlePath!: string | null;

    @Field(() => Int, {nullable:true})
    priority!: number | null;

    @Field(() => BuildStatus, {nullable:true})
    status!: keyof typeof BuildStatus | null;

    @Field(() => String, {nullable:true})
    failedReason!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Script, {nullable:false})
    script?: Script;
}
