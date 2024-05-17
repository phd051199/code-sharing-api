import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthProviderCreateManyInput } from './auth-provider-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAuthProviderArgs {

    @Field(() => [AuthProviderCreateManyInput], {nullable:false})
    @Type(() => AuthProviderCreateManyInput)
    data!: Array<AuthProviderCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
