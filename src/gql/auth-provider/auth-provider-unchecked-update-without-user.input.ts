import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumAuthProvidersFieldUpdateOperationsInput } from '../prisma/enum-auth-providers-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class AuthProviderUncheckedUpdateWithoutUserInput {

    @Field(() => EnumAuthProvidersFieldUpdateOperationsInput, {nullable:true})
    provider?: EnumAuthProvidersFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;
}
