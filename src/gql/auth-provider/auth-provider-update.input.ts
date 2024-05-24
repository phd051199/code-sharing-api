import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumAuthProvidersFieldUpdateOperationsInput } from '../prisma/enum-auth-providers-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutAuthProvidersNestedInput } from '../user/user-update-one-required-without-auth-providers-nested.input';

@InputType()
export class AuthProviderUpdateInput {

    @Field(() => EnumAuthProvidersFieldUpdateOperationsInput, {nullable:true})
    provider?: EnumAuthProvidersFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutAuthProvidersNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutAuthProvidersNestedInput;
}
