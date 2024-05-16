import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumOAuthProvidersFieldUpdateOperationsInput } from '../prisma/enum-o-auth-providers-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutOauthProvidersNestedInput } from '../user/user-update-one-required-without-oauth-providers-nested.input';

@InputType()
export class OAuthProviderUpdateInput {

    @Field(() => EnumOAuthProvidersFieldUpdateOperationsInput, {nullable:true})
    provider?: EnumOAuthProvidersFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutOauthProvidersNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutOauthProvidersNestedInput;
}
