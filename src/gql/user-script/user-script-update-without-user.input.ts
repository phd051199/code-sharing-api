import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ScriptUpdateOneRequiredWithoutUserScriptsNestedInput } from '../script/script-update-one-required-without-user-scripts-nested.input';

@InputType()
export class UserScriptUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ScriptUpdateOneRequiredWithoutUserScriptsNestedInput, {nullable:true})
    script?: ScriptUpdateOneRequiredWithoutUserScriptsNestedInput;
}
