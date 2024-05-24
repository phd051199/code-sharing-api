import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserFavoriteCreateManyScriptInput } from './user-favorite-create-many-script.input';
import { Type } from 'class-transformer';

@InputType()
export class UserFavoriteCreateManyScriptInputEnvelope {

    @Field(() => [UserFavoriteCreateManyScriptInput], {nullable:false})
    @Type(() => UserFavoriteCreateManyScriptInput)
    data!: Array<UserFavoriteCreateManyScriptInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
