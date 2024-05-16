import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutScriptsNestedInput } from '../user/user-update-one-required-without-scripts-nested.input';
import { ScriptUpdateOneRequiredWithoutUsersNestedInput } from '../script/script-update-one-required-without-users-nested.input';

@InputType()
export class UserScriptUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutScriptsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutScriptsNestedInput;

    @Field(() => ScriptUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    script?: ScriptUpdateOneRequiredWithoutUsersNestedInput;
}
