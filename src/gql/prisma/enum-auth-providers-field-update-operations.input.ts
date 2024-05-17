import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviders } from './auth-providers.enum';

@InputType()
export class EnumAuthProvidersFieldUpdateOperationsInput {

    @Field(() => AuthProviders, {nullable:true})
    set?: keyof typeof AuthProviders;
}
