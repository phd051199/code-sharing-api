import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Status {
  @Field()
  status: string;
}

@ObjectType()
class HealthDetails {
  @Field(() => Status, { nullable: true })
  network?: Status;

  @Field(() => Status, { nullable: true })
  database?: Status;

  @Field(() => Status, { nullable: true })
  redis?: Status;
}

@ObjectType()
export class HealthInfo {
  @Field()
  status?: string;

  @Field(() => HealthDetails)
  info?: HealthDetails;

  @Field(() => HealthDetails)
  error?: HealthDetails;
}
