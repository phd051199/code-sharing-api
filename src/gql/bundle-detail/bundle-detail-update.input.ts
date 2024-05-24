import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableEnumBuildStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-build-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ScriptUpdateOneRequiredWithoutBundleDetailNestedInput } from '../script/script-update-one-required-without-bundle-detail-nested.input';

@InputType()
export class BundleDetailUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bundlePath?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    priority?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableEnumBuildStatusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumBuildStatusFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    failedReason?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ScriptUpdateOneRequiredWithoutBundleDetailNestedInput, {nullable:true})
    script?: ScriptUpdateOneRequiredWithoutBundleDetailNestedInput;
}
