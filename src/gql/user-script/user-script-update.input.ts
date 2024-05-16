import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutUserScriptsNestedInput } from '../user/user-update-one-required-without-user-scripts-nested.input';
import { ScriptUpdateOneRequiredWithoutUserScriptsNestedInput } from '../script/script-update-one-required-without-user-scripts-nested.input';

@InputType()
export class UserScriptUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutUserScriptsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserScriptsNestedInput;

    @Field(() => ScriptUpdateOneRequiredWithoutUserScriptsNestedInput, {nullable:true})
    script?: ScriptUpdateOneRequiredWithoutUserScriptsNestedInput;
}
