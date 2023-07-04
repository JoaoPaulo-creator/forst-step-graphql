import { Field, ObjectType } from "type-graphql";

// classe usada pra exemplificar o relacionado dos models no graphql

@ObjectType()
export class CustomerModel {
  @Field(() => String)
  name: string;
}
