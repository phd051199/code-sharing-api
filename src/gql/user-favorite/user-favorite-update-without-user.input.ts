import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ScriptUpdateOneRequiredWithoutUserFavoriteNestedInput } from '../script/script-update-one-required-without-user-favorite-nested.input';

@InputType()
export class UserFavoriteUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ScriptUpdateOneRequiredWithoutUserFavoriteNestedInput, {nullable:true})
    script?: ScriptUpdateOneRequiredWithoutUserFavoriteNestedInput;
}
