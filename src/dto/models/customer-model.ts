import { Field, ID, ObjectType } from "type-graphql";

// classe usada pra exemplificar o relacionado dos models no graphql

@ObjectType()
export class CustomerModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;
}
