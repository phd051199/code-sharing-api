import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ScriptUpdateOneRequiredWithoutUsersNestedInput } from '../script/script-update-one-required-without-users-nested.input';

@InputType()
export class UserScriptUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ScriptUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    script?: ScriptUpdateOneRequiredWithoutUsersNestedInput;
}
