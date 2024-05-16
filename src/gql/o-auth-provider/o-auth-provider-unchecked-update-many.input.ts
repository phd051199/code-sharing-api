import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumOAuthProvidersFieldUpdateOperationsInput } from '../prisma/enum-o-auth-providers-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class OAuthProviderUncheckedUpdateManyInput {

    @Field(() => EnumOAuthProvidersFieldUpdateOperationsInput, {nullable:true})
    provider?: EnumOAuthProvidersFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
