import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildStatus } from './build-status.enum';

@InputType()
export class NullableEnumBuildStatusFieldUpdateOperationsInput {

    @Field(() => BuildStatus, {nullable:true})
    set?: keyof typeof BuildStatus;
}
