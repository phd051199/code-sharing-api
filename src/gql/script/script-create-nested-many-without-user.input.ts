import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutUserInput } from './script-create-without-user.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutUserInput } from './script-create-or-connect-without-user.input';
import { ScriptCreateManyUserInputEnvelope } from './script-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';

@InputType()
export class ScriptCreateNestedManyWithoutUserInput {

    @Field(() => [ScriptCreateWithoutUserInput], {nullable:true})
    @Type(() => ScriptCreateWithoutUserInput)
    create?: Array<ScriptCreateWithoutUserInput>;

    @Field(() => [ScriptCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ScriptCreateOrConnectWithoutUserInput>;

    @Field(() => ScriptCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ScriptCreateManyUserInputEnvelope)
    createMany?: ScriptCreateManyUserInputEnvelope;

    @Field(() => [ScriptWhereUniqueInput], {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>>;
}
