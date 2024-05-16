import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutScriptsNestedInput } from '../user/user-update-one-required-without-scripts-nested.input';

@InputType()
export class UserScriptUpdateWithoutScriptInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutScriptsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutScriptsNestedInput;
}
