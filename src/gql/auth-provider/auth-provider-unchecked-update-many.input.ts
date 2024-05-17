import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumAuthProvidersFieldUpdateOperationsInput } from '../prisma/enum-auth-providers-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class AuthProviderUncheckedUpdateManyInput {

    @Field(() => EnumAuthProvidersFieldUpdateOperationsInput, {nullable:true})
    provider?: EnumAuthProvidersFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    user_id?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;
}
