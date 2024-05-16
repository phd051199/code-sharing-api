import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutUserScriptsNestedInput } from '../user/user-update-one-required-without-user-scripts-nested.input';

@InputType()
export class UserScriptUpdateWithoutScriptInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutUserScriptsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserScriptsNestedInput;
}
