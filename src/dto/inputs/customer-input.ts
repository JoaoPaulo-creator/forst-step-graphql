import { Field, InputType } from "type-graphql";

@InputType()
export class CustomerInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}
