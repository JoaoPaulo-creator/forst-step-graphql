import { Field, ID, ObjectType } from "type-graphql";
import { Appointment } from "./appointment-model";

// classe usada pra exemplificar o relacionado dos models no graphql

@ObjectType()
export class CustomerModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => [Appointment])
  appointments: Appointment[];
}
