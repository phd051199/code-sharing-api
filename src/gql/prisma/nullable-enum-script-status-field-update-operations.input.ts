import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatus } from './script-status.enum';

@InputType()
export class NullableEnumScriptStatusFieldUpdateOperationsInput {

    @Field(() => ScriptStatus, {nullable:true})
    set?: keyof typeof ScriptStatus;
}
