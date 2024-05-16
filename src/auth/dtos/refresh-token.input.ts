import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class RefreshTokenInput {
  @Field()
  @IsUUID()
  @IsNotEmpty()
  refreshToken: string;
}
