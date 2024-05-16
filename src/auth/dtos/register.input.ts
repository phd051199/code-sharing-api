import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class RegisterInput {
  @Field()
  @MaxLength(255)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @MinLength(6)
  @MaxLength(255)
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @Field(() => String, { nullable: true })
  @MinLength(1)
  @MaxLength(255)
  @IsOptional()
  name?: string;
}
